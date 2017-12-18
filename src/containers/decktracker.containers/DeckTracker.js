import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { collectLogs, setTrackButton, clearLogs, getCurrentDeck, clearCurrentDeck, 
    decreaseCardFromCurrentDeck, increaseCardFromCurrentDeck} from '../../redux/actions/decktracker.actions'
import { ipcRenderer } from 'electron';
import { encode, decode } from 'deckstrings';

import CurrentDeckList from '../../components/decktracker.components/CurrentDeckList';
 
class DeckTracker extends Component {
 
    constructor(props) {
        super(props);
        this.handleLogs = handleLogs.bind(this);
        this.deckList = this.props.currentDeck;
    }
 
 
    renderLogs() {
        return _.map(this.props.logs, log => {
 
            if(log.label === "players") {

                this.players = log.data;

                return( 
                    <li key={log.id}>
                    <span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span> 
                     A game between ({log.data[1].sideText}) <span style={log.data[1].styles}>{log.data[1].playerName}</span> as {log.data[1].heroName} and ({log.data[0].sideText}) <span style={log.data[0].styles}>{log.data[0].playerName}</span> as {log.data[0].heroName} is started.
                    </li> 
                );    
            }
 
            if(log.label === "drew_card") {

                

                return(
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span> 
                     <span style={{color: "#4dff4d"}}>You</span> drew <span style={{color: "#d9b38c"}} >{log.data}</span> to your hand.
                    </li>
                );
            }
 
            if(log.label === "hero_power") {

                return( 
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span> 
                     <span style={log.data.player.styles}>{log.data.player.sideText}</span> used Hero Power (<span style={{color: "#d9b38c"}}>{log.data.heroPowerName}</span>).</li> );    
            }
 
            if(log.label === "card_played") {
                return( 
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span> 
                    <span style={log.data.player.styles}>{log.data.player.sideText}</span> played <span style={{color: "#d9b38c"}}>{log.data.name}</span>.</li> 
                );    
            }
 
            if(log.label === "card_created") {
                return( <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}]</span> <span style={{color: "#ff9999"}}>{log.data.name}</span> is generated to <span style={{color: "#ff9999"}}>{log.data.player}</span> hand.</li> );    
            }
 
            if(log.label === "card_shuffled") {
                return( 
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span> 
                    <span style={{color: "#d9b38c"}}>{log.data}</span> shuffled to <span style={{color: "#4dff4d"}}>your</span> deck.</li> 
                );    
            }

            if(log.label === "card_burned") {
                return( 
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span> 
                    <span style={{color: "#d9b38c"}}>{log.data}</span> burned from <span style={{color: "#4dff4d"}}>your</span> deck.</li> );    
            }
            
            if(log.label === "game_over") {
                return( <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span>
                <span style={{color: "#ccddff"}}>The game is over.</span></li> );    
            }

            if(log.label === "player_won") {
                return( 
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span>
                    <span style={{color: "#ccddff"}}>{log.data} won.</span></li> );    
            }

            if(log.label === "player_conceded") {
                return( 
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span> 
                    <span style={{color: "#ccddff"}}>{log.data} conceded.</span></li> );    
            }

            if(log.label === "player_tied") {
                return( 
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span> 
                    <span style={{color: "#ccddff"}}>{log.data} tied.</span></li> );    
            }
 
        });
    }

    render() {
 
        return(
            <div className="content">
                <div className="deck-tracker-content">
                    {/* {this.renderCurrentDeck()} */}
                    <CurrentDeckList data={this.props}/>
                    
                    <div className="toggle-track">
                        <div className="toggle-track-buttons">
                        <button value={this.props.trackButton.value}
                            onClick={toggleTrack.bind(this)} className="toggle-track-button">{this.props.trackButton.text}</button>
                        <button onClick={clearLogsData.bind(this)} className="toggle-track-button">Clear</button>
                        </div>
                    </div>
                    <div className="deck-tracker-bar">Game Log:</div>
                    <div className="deck-tracker-log">
                    <ul>
                        {this.renderLogs()}
                    </ul>
                    </div>
                </div>
            </div>
        );
    }
 
}
 
function clearLogsData() {
    this.props.clearLogs();
}
 
function handleLogs(event, data) {

        switch(data.label) {
            case "drew_card":
            case "card_burned":
                this.props.decreaseCardFromCurrentDeck(_.cloneDeep(this.props.currentDeck), convertCardNameToCardDbfId.call(this, data));
                break;
            case "card_shuffled":
                this.props.increaseCardFromCurrentDeck(_.cloneDeep(this.props.currentDeck), convertCardNameToCardDbfId.call(this, data));
                break;
            case "game_over":
                this.deckList = {};
                this.props.clearCurrentDeck();
                break;
            default: null;

        }

        this.props.collectLogs(data);
}


function convertCardNameToCardDbfId(card) {
    return _.find(this.props.allCollection, { name: card.data }).dbfId;
}
 
function toggleTrack(event) {
    if(this.props.trackButton.value === "off") 
    {   
        ipcRenderer.send('deckTracker:start');
        ipcRenderer.on('log:delivery', this.handleLogs);
        ipcRenderer.on('current-deck', this.props.getCurrentDeck);
        this.props.setTrackButton({ value : "on", text: "Turn off DeckTracker" });
    } else {
        ipcRenderer.removeAllListeners('log:delivery');
        ipcRenderer.send('deckTracker:stop');
        this.props.setTrackButton({ value : "off", text: "Turn on DeckTracker" });
    }
}

  
function mapStateToProps(state) {
    return {
        currentDeck: state.CurrentDeck,
        trackButton: state.trackButton,
        logs: state.logs,
    }
}

export default connect(mapStateToProps, 
    { decreaseCardFromCurrentDeck, collectLogs, setTrackButton, clearLogs, getCurrentDeck, clearCurrentDeck, increaseCardFromCurrentDeck})(DeckTracker);