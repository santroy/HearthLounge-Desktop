const fs = require('fs');
const path = require('path');
const os = require('os');
const _ = require('lodash');
 
class DeckTrackerController {
 
    constructor(filePath) {
        this.filePath = filePath;
        this.players = [];
        this.initialPlayerId = 0; // Number 1 is GameState
        this.playersMatchDisplayed = false;
        this.fileSize = null;
        this.fileDiff = null;
        this.watchingInterval = null;
        this.deckLineCounter = 0;
        this.heroPowers = [];
        this.actualPlayingDeck = {};
        this.id = 0;
        this.regexs = {
            gameOver: /\[Power\] GameState.DebugPrintPower\(\).*-.*TAG_CHANGE Entity=GameEntity tag=NEXT_STEP value=FINAL_GAMEOVER/,
            cardCreatedToHand : /\[Power\] PowerTaskList.DebugPrintPower\(\).*-.*TAG_CHANGE Entity=\[entityName=(.*) id=.* zone=SETASIDE zonePos=(.*) cardId=(.*) player=(.*)] tag=ZONE value=HAND/,
            drawCardFromDeck : /\[Zone\].*ZoneChangeList.ProcessChanges\(\).*-.*id=.* local=False \[entityName=(.*) id=.* zone=(.*) zonePos=(.*) cardId=(.*) player=(.*)] zone from (FRIENDLY|OPPOSING) DECK -> FRIENDLY HAND/,
            players: /\[Power\] PowerTaskList.DebugPrintPower\(\).*-.*TAG_CHANGE Entity=(.*) tag=PLAYSTATE value=PLAYING/,
            heroPower: /\[Zone\] ZoneChangeList.ProcessChanges\(\).*-.*TRANSITIONING card \[entityName=(.*) id=(.*) zone=(.*) zonePos=(.*) cardId=(.*) player=(.*)\] to (FRIENDLY|OPPOSING) PLAY \(Hero Power\)/,
            heroPowerCast: /\[Power\] GameState.DebugPrintPower\(\).*-.*BLOCK_START.*BlockType=PLAY Entity=\[entityName=(.*) id=(.*) zone=PLAY zonePos=0 cardId=(.*) player=(.*)] EffectCardId=(.*) EffectIndex=(.*) Target=(.*) SubOption=.*\s*?/,
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
            const heroPower = this.regexs.heroPower.exec(line);
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
 
            const ts = new Date();
 
            const deckStringObj = {
                name: "",
                value: ""
            }
 
            const logObject = {
                id: this.id++,
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
 
                if(this.deckLineCounter==0) {
                    this.actualPlayingDeck = {};
                }
    
            }
 
 
            if(drewCardFromDeck) {
 
                logObject.type = "card_drew_from_deck";
                logObject.value = drewCardFromDeck[1];
                windowContext.webContents.send('log:response', logObject);
            }
 
            if(player) {
                this.players.push( { name: player[1], id: ++this.initialPlayerId } );
            }
 
            if(gameOver) {
                logObject.type = "game_over";
                logObject.value = "The game is over."
                this.playersMatchDisplayed = false;
                this.players = [];
                this.initialPlayerId = 0;
                windowContext.webContents.send('log:response', logObject);
            }
 
            if((this.players.length >= 2) && !(this.playersMatchDisplayed))  {
                if(this.players[1].name.toUpperCase() == "THE INNKEEPER") {
                    this.players.reverse();
                }

                this.playersMatchDisplayed = true;
                logObject.type = "players";
                logObject.value = this.players;
                windowContext.webContents.send('log:response', logObject);
            }
 
            if(heroPower) {
                this.heroPowers.push( { id: heroPower[2], player: heroPower[6] } );
            }
 
            if(cardPlayed) {
                logObject.type = "card_played";
                logObject.value = { player: this.players[cardPlayed[4]-1].name, 
                                    name: cardPlayed[2] };
                windowContext.webContents.send('log:response', logObject);
            }
 
            if(!(_.isEmpty(this.heroPowers)) && heroPowerCast) {
                if(_.some(this.heroPowers, { id: heroPowerCast[2] } )) {
                    
                    logObject.type = "hero_power";
                    logObject.value = { id: heroPowerCast[2], name: heroPowerCast[1], player: this.players[[heroPowerCast[4]-1]].name };
                    windowContext.webContents.send('log:response', logObject);
 
                }
 
            }

            if(playerWon) {
                logObject.type = "player_won";
                logObject.value = playerWon[1];
                windowContext.webContents.send('log:response', logObject);
            }

            if(playerConceded) {
                logObject.type = "player_conceded";
                logObject.value = playerConceded[1];
                windowContext.webContents.send('log:response', logObject);
            }

            if(playerTied) {
                logObject.type = "player_tied";
                logObject.value = playerTied[1];
                windowContext.webContents.send('log:response', logObject);
            }

            if(cardBurned) {
                logObject.type = "card_burned";
                logObject.value = cardBurned[1];
                windowContext.webContents.send('log:response', logObject);
            }
 
            if(cardCreatedToHand) {
                logObject.type = "card_created_to_hand";
                logObject.value = { name: cardCreatedToHand[1], player: this.players[[cardCreatedToHand[4]-1]].name};
                windowContext.webContents.send('log:response', logObject);
            }
 
            if(cardToDeck) {
                logObject.type = "card_to_deck";
                logObject.value = cardToDeck[1];
                windowContext.webContents.send('log:response', logObject);
            }
 
 
        });
    }
 
 
}
 
module.exports = DeckTrackerController;