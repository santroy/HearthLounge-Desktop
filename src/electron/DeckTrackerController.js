const fs = require('fs');
const path = require('path');
const os = require('os');
const _ = require('lodash');
 
class DeckTrackerController {
 
    constructor(filePath) {
        this.filePath = filePath;
        this.players = [];
        this.heroes = [];
        this.playersMatchDisplayed = false;
        this.fileSize = null;
        this.fileDiff = null;
        this.watchingInterval = null;
        this.deckLineCounter = 0;
        this.mergedPlayer = [];
        //this.heroPowers = [];
        this.actualPlayingDeck = {};
        this.id = 0;
        this.regexs = {
            gameOver: /\[Power\] GameState.DebugPrintPower\(\).*-.*TAG_CHANGE Entity=GameEntity tag=NEXT_STEP value=FINAL_GAMEOVER/,
            cardCreatedToHand : /\[Power\] PowerTaskList.DebugPrintPower\(\).*-.*TAG_CHANGE Entity=\[entityName=(.*) id=.* zone=SETASIDE zonePos=(.*) cardId=(.*) player=(.*)] tag=ZONE value=HAND/,
            drawCardFromDeck : /\[Zone\].*ZoneChangeList.ProcessChanges\(\).*-.*id=.* local=False \[entityName=(.*) id=.* zone=(.*) zonePos=(.*) cardId=(.*) player=(.*)] zone from (FRIENDLY|OPPOSING) DECK -> FRIENDLY HAND/,
            players: /\[Power\] PowerTaskList.DebugPrintPower\(\).*-.*TAG_CHANGE Entity=(.*) tag=PLAYSTATE value=PLAYING/,
            hero: /\[Zone\] ZoneChangeList.ProcessChanges\(\).*-.*TRANSITIONING card \[entityName=(.*) id=.* zone=PLAY zonePos=.* cardId=.* player=(.*)\] to (FRIENDLY|OPPOSING) PLAY \(Hero\)/,
            heroPowerCast: /\[Power\] GameState.DebugPrintPower\(\).*-.*BLOCK_START.*BlockType=PLAY Entity=\[entityName=(.*) id=.* zone=PLAY zonePos=0 cardId=.* player=(.*)] EffectCardId=.* EffectIndex=.* Target=.* SubOption=.*\s*?/,
            cardToDeck: /\[Zone\] ZoneChangeList.ProcessChanges\(\) - TRANSITIONING card \[entityName=(\b(?!UNKNOWN\b).*?\b) id=(.*) zone=DECK zonePos=(.*) cardId= player=(.*)] to FRIENDLY DECK/,
            cardPlayed: /\[Zone\].*ZoneChangeList.ProcessChanges\(\).*cardId=(.*)name=(.*)\] tag=JUST_PLAYED.*zone=(.*) zon.*player=(\d+).*/,
            playingDeckTrigger: /\[Decks\].*(Finding Game With Deck|Starting Arena Game With Deck).*/,
            cardBurned: /\[Zone\] ZoneChangeList.ProcessChanges\(\).*entityName=(\b(?!UNKNOWN\b).*?\b) id.* FRIENDLY DECK -> FRIENDLY GRAVEYARD/,
            playingDeckLines: /\[Decks\].*/gm,
            playerConceded: /\[Power\] GameState.DebugPrintPower\(\) - TAG_CHANGE Entity=(.*) tag=PLAYSTATE value=CONCEDED/,
            playerWon: /\[Power\] GameState.DebugPrintPower\(\) - TAG_CHANGE Entity=(.*) tag=PLAYSTATE value=WON/,
            playerTied: /\[Power\] GameState.DebugPrintPower\(\) - TAG_CHANGE Entity=(.*) tag=PLAYSTATE value=TIED/
        }
    }
 
    getFileSize(filePath) {
        return fs.statSync(filePath).size;
    }
 
    getFileDiff(actual) {
        return this.getFileSize(actual) - this.fileSize;
    }
 
    startWatching(windowContext) {
 
        this.fileSize = this.getFileSize(this.filePath);
 
        this.watchingInterval = setInterval(() => {
 
            let aFileSize = this.getFileSize(this.filePath);
            this.fileDiff = aFileSize - this.fileSize;
 
            if(this.fileDiff < 0) {
 
                this.fileSize = 0;
                this.fileDiff = aFileSize;
 
            } else {
 
                let buffer = new Buffer(this.fileDiff);
                let fileDescriptor = fs.openSync(this.filePath, 'r');
 
                fs.readSync(fileDescriptor, buffer, 0, this.fileDiff, this.fileSize);
                fs.closeSync(fileDescriptor);
 
                this.fileSize = aFileSize;
 
                this.processBuffer(buffer, windowContext);
            }
 
        }, 3000);
    }
 
    stopWatching() {
        clearInterval(this.watchingInterval);
    }
 
    processBuffer(buffer, windowContext) {
        buffer.toString().split(os.EOL).forEach((line) => {
            const drewCardFromDeck = this.regexs.drawCardFromDeck.exec(line);
            const player = this.regexs.players.exec(line);
            //const heroPower = this.regexs.heroPower.exec(line);
            const heroPowerCast = this.regexs.heroPowerCast.exec(line);
            const cardPlayed = this.regexs.cardPlayed.exec(line);
            const gameOver = this.regexs.gameOver.exec(line);
            const cardCreatedToHand = this.regexs.cardCreatedToHand.exec(line);
            const playingDeckTrigger = this.regexs.playingDeckTrigger.exec(line);
            const playingDeckLines = this.regexs.playingDeckLines.exec(line);
            const cardToDeck = this.regexs.cardToDeck.exec(line);
            const cardBurned = this.regexs.cardBurned.exec(line);
            const playerWon = this.regexs.playerWon.exec(line);
            const playerConceded = this.regexs.playerConceded.exec(line);
            const playerTied = this.regexs.playerTied.exec(line);
            const hero = this.regexs.hero.exec(line);
 
            const ts = new Date();
 
            const deckStringObj = {
                name: "",
                value: ""
            }
 
            const logObject = {
                id: this.id,
                type : "",
                timeStamp: { hours: (("0" + ts.getHours()).slice(-2)), minutes: (("0" + ts.getMinutes()).slice(-2)), seconds : (("0" + ts.getSeconds()).slice(-2)) },
                value: null 
            }
 
            if(playingDeckLines && this.deckLineCounter > 0) {
                if(this.deckLineCounter == 3) { 
                    this.actualPlayingDeck.name = /.*\[Decks\] ### (.*)\.*/.exec(playingDeckLines[0])[1] ? /.*\[Decks\] ### (.*)\.*/.exec(playingDeckLines[0])[1] : "Arena Play";
                }
                if(this.deckLineCounter == 1) this.actualPlayingDeck.deck = /.*\[Decks\] (.*).*/.exec(playingDeckLines[0])[1];
                this.deckLineCounter--;
            }
 
            if(playingDeckTrigger) {
                this.deckLineCounter = 3;
            }
 
            if(this.actualPlayingDeck.name && this.actualPlayingDeck.deck) {
                
                windowContext.webContents.send('current-deck', this.actualPlayingDeck);
                this.id++;
 
                if(this.deckLineCounter==0) {
                    this.actualPlayingDeck = {};
                }
    
            }
 
 
            if(drewCardFromDeck) {
 
                logObject.type = "card_drew_from_deck";
                logObject.value = drewCardFromDeck[1];
                windowContext.webContents.send('log:response', logObject);
                this.id++;
            }
 
            if(player) {
                this.players.push( { playerName: player[1] } );
            }

            if(hero) {
                this.heroes.push ( { heroName: hero[1], playerId: hero[2], playerSide: hero[3] });
            }
 
            if(gameOver) {
                logObject.type = "game_over";
                this.playersMatchDisplayed = false;
                this.players = [];
                this.heroes = [];
                this.mergedPlayer = [];
                this.initialPlayerId = 0;
                windowContext.webContents.send('log:response', logObject);
                this.id++;
            }
 
            if((this.heroes.length >=2) && (this.players.length >= 2) && !(this.playersMatchDisplayed))  {

                 _.each(this.heroes, (value, index) => {

                    if(value.playerSide == "OPPOSING") {value.sideText = "Opponent"; value.styles = { color: "#ff3333" }};
                    if(value.playerSide == "FRIENDLY") { value.sideText = "You"; value.styles = { color: "#4dff4d" }};

                    this.mergedPlayer.push(_.merge(this.heroes[index], this.players[index]));
                });
                
                if(this.mergedPlayer[0].playerSide.toUpperCase() == "OPPOSING") this.mergedPlayer.reverse();

                this.playersMatchDisplayed = true;
                logObject.type = "players";
                logObject.value = this.mergedPlayer;
                windowContext.webContents.send('log:response', logObject);
                this.id++;
            }
 
            if(cardPlayed) {
                logObject.type = "card_played";

                logObject.value = { player: _.find(this.mergedPlayer, { playerId : cardPlayed[4] }), 
                                    name: cardPlayed[2] };

                windowContext.webContents.send('log:response', logObject);
                this.id++;
            }

            if(heroPowerCast) {
                logObject.type = "hero_power";
                logObject.value = { heroPowerName: heroPowerCast[1], player : _.find(this.mergedPlayer, { playerId : heroPowerCast[2] })};
                windowContext.webContents.send('log:response', logObject);
                this.id++;
            }

            if(playerWon) {
                logObject.type = "player_won";
                logObject.value = playerWon[1];
                windowContext.webContents.send('log:response', logObject);
                this.id++;
            }

            if(playerConceded) {
                logObject.type = "player_conceded";
                logObject.value = playerConceded[1];
                windowContext.webContents.send('log:response', logObject);
                this.id++;
            }

            if(playerTied) {
                logObject.type = "player_tied";
                logObject.value = playerTied[1];
                windowContext.webContents.send('log:response', logObject);
                this.id++;
            }

            if(cardBurned) {
                logObject.type = "card_burned";
                logObject.value = cardBurned[1];
                windowContext.webContents.send('log:response', logObject);
                this.id++;
            }
 
            if(cardCreatedToHand) {
                logObject.type = "card_created_to_hand";
                logObject.value = { name: cardCreatedToHand[1], player: this.players[[cardCreatedToHand[4]-1]].name};
                windowContext.webContents.send('log:response', logObject);
                this.id++;
            }
 
            if(cardToDeck) {
                logObject.type = "card_to_deck";
                logObject.value = cardToDeck[1];
                windowContext.webContents.send('log:response', logObject);
                this.id++;
            }
 
 
        });
    }
 
 
}
 
module.exports = DeckTrackerController;