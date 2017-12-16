const path = require('path');
const os = require('os');
const _ = require('lodash');

const logRegExr = require('./Definitions/LoggersRegularExpressions');

let uniqueLogParcelId = 0;
let currentDeckListIndicator = 0;
let playersHandshaked = false;

let logs = [];
const timeStamp = new Date();

let players = [];
let heroes = [];
let finalPlayers = [];

let currentDeck = {
    name: null,
    deckString: null
}

class LogIPCManager {
    constructor(context) {
        this.context = context;
    }


    process(buffer) {

        //parsing buffer into array of strings, each index equals one line in log file
        logs = buffer.toString().split(os.EOL);

        _.each(logs, (log) => {

        const logsExecuted = {};

            _.each(logRegExr, (value, key) => {

                logsExecuted[key] = value.exec(log);
                
                // can cause problems
                if(logsExecuted[key]) return;

            });

            const logParcel = {
                id: uniqueLogParcelId,
                label: null,
                timeStamp: getTimeStamp(),
                data: null
            }

//############ Retrieving Current Deck ############
//When "Finding game with deck" appears, next 3 lines we need to parse

            if(logsExecuted.currentDeckInfoLines && (currentDeckListIndicator > 0)) {


                if(currentDeckListIndicator == 3) {
                    const deckNameRegExr = /.*\[Decks\] ### (.*)\.*/;
                    currentDeck.name = deckNameRegExr.exec(logsExecuted.currentDeckInfoLines[0])[1] ? deckNameRegExr.exec(logsExecuted.currentDeckInfoLines[0])[1] : "Arena";
                }

                if(currentDeckListIndicator == 1) {
                    currentDeck.deckString = /.*\[Decks\] (.*).*/.exec(logsExecuted.currentDeckInfoLines[0])[1];
                }

                currentDeckListIndicator--;

            }

            if(logsExecuted.currentDeck) {
                currentDeckListIndicator = 3
            };

          //  if(!_.has(currentDeck, null)) {
              if(currentDeck.name && currentDeck.deckString) {
                logParcel.label = "current_deck";
                logParcel.data = currentDeck;
                uniqueLogParcelId++;
                this.context.webContents.send('current-deck', logParcel);

                if(currentDeckListIndicator == 0) {
                    currentDeck = {
                        name: null,
                        deckString: null
                    };
                }

            }
//##################################################

            if(logsExecuted.drewCard) {
                logParcel.label = "drew_card";
                logParcel.data = logsExecuted.drewCard[1];
                uniqueLogParcelId++;
                this.context.webContents.send('log:delivery', logParcel);
            }

            if(logsExecuted.player) {
                players.push({ playerName: logsExecuted.player[1] });
            }

            if(logsExecuted.hero) {
                heroes.push({ heroName: logsExecuted.hero[1], playerId: logsExecuted.hero[2], playerSide: logsExecuted.hero[3] });
            }

            if(logsExecuted.gameOver) {
                logParcel.label = "game_over";
                playersHandshaked = false;
                players = [];
                heroes = [];
                finalPlayers = [];
                uniqueLogParcelId++;
                this.context.webContents.send('log:delivery', logParcel);
            }

            if(heroes.length >= 2 && players.length >= 2 && !playersHandshaked) {

                _.each(heroes, (value, index) => {

                    if(_.eq(value.playerSide.toUpperCase(), "OPPOSING" )) {
                        value.sideText = "Opponent";
                        value.styles = { color: "#ff3333" }
                    }

                    if(_.eq(value.playerSide.toUpperCase(), "FRIENDLY" )) {
                        value.sideText = "You"; 
                        value.styles = { color: "#4dff4d" };
                    }

                    finalPlayers.push(_.merge(heroes[index], players[index]));

                });

                if(_.eq(finalPlayers[0].playerSide.toUpperCase(), "OPPOSING")) finalPlayers.reverse();

                playersHandshaked = true;

                logParcel.label = "players";
                logParcel.data = finalPlayers;
                uniqueLogParcelId++;
                this.context.webContents.send("log:delivery", logParcel);

            } 

            if(logsExecuted.cardPlayed) {
                logParcel.label = "card_played";
                logParcel.data = { player: _.find(finalPlayers, { playerId : logsExecuted.cardPlayed[4] }), name: logsExecuted.cardPlayed[2] }
                uniqueLogParcelId++;
                this.context.webContents.send("log:delivery", logParcel);
            }

            if(logsExecuted.heroPower) {
                logParcel.label = "hero_power";
                logParcel.data = { heroPowerName: logsExecuted.heroPower[1], player : _.find(finalPlayers, { playerId : logsExecuted.heroPower[2] })};
                uniqueLogParcelId++;
                this.context.webContents.send("log:delivery", logParcel);
            }

            if(logsExecuted.playerWon) {
                logParcel.label = "player_won";
                logParcel.data = logsExecuted.playerWon[1];
                uniqueLogParcelId++;
                this.context.webContents.send("log:delivery", logParcel);
            }

            if(logsExecuted.playerConceded) {
                logParcel.label = "player_conceded";
                logParcel.data = logsExecuted.playerConceded[1];
                uniqueLogParcelId++;
                this.context.webContents.send("log:delivery", logParcel);
            }

            if(logsExecuted.playerTied) {
                logParcel.label = "player_tied";
                logParcel.data = logsExecuted.playerTied[1];
                uniqueLogParcelId++;
                this.context.webContents.send("log:delivery", logParcel);
            }

            if(logsExecuted.cardBurned) {
                logParcel.label = "card_burned";
                logParcel.data = logsExecuted.cardBurned[1];
                uniqueLogParcelId++;
                this.context.webContents.send("log:delivery", logParcel);
            }
 
            if(logsExecuted.cardCreated) {
                logParcel.label = "card_created";
                logParcel.data = { name: logsExecuted.cardCreated[1], player: players[[logsExecuted.cardCreated[4]-1]].playerName};
                uniqueLogParcelId++;
                this.context.webContents.send("log:delivery", logParcel);
            }
 
            if(logsExecuted.cardShuffled) {
                logParcel.label = "card_shuffled";
                logParcel.data = logsExecuted.cardShuffled[1];
                uniqueLogParcelId++;
                this.context.webContents.send("log:delivery", logParcel);
            }


        });
        
    }


}

function getTimeStamp() {
    return {
        hours: (("0" + timeStamp.getHours()).slice(-2)),
        minutes: (("0" + timeStamp.getMinutes()).slice(-2)),
        seconds: (("0" + timeStamp.getSeconds()).slice(-2))
    }
}

module.exports = LogIPCManager;