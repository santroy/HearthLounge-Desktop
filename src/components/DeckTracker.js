import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { collectLogs, setTrackButton, clearLogs, getCurrentDeck, clearCurrentDeck} from '../actions'
import { ipcRenderer } from 'electron';
import { encode, decode } from 'deckstrings';
 
class DeckTracker extends Component {
 
    constructor(props) {
        super(props);
        this.getLogsEventData = getLogsEventData.bind(this);
        this.deckList = this.props.currentDeck;
    }
 
 
    renderLogs() {
        return _.map(this.props.logs, log => {
 
            if(log.type === "players") {

                this.players = log.value;

                return( 
                    <li key={log.id}>
                    <span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span> 
                     A game between ({log.value[1].sideText}) <span style={log.value[1].styles}>{log.value[1].playerName}</span> as {log.value[1].heroName} and ({log.value[0].sideText}) <span style={log.value[0].styles}>{log.value[0].playerName}</span> as {log.value[0].heroName} is started.
                    </li> 
                );    
            }
 
            if(log.type === "card_drew_from_deck") {
                return(
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span> 
                     <span style={{color: "#4dff4d"}}>You</span> drew <span style={{color: "#d9b38c"}} >{log.value}</span> to your hand.
                    </li>
                );
            }
 
            if(log.type === "hero_power") {

                return( 
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span> 
                     <span style={log.value.player.styles}>{log.value.player.sideText}</span> used Hero Power (<span style={{color: "#d9b38c"}}>{log.value.heroPowerName}</span>).</li> );    
            }
 
            if(log.type === "card_played") {
                return( 
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span> 
                    <span style={log.value.player.styles}>{log.value.player.sideText}</span> played <span style={{color: "#d9b38c"}}>{log.value.name}</span>.</li> 
                );    
            }
 
            if(log.type === "card_created_to_hand") {
                return( <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}]</span> <span style={{color: "#ff9999"}}>{log.value.name}</span> is generated to <span style={{color: "#ff9999"}}>{log.value.player}</span> hand.</li> );    
            }
 
            if(log.type === "card_to_deck") {
                return( 
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span> 
                    <span style={{color: "#d9b38c"}}>{log.value}</span> shuffled to <span style={{color: "#4dff4d"}}>your</span> deck.</li> 
                );    
            }

            if(log.type === "card_burned") {
                return( 
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span> 
                    <span style={{color: "#d9b38c"}}>{log.value}</span> burned from <span style={{color: "#4dff4d"}}>your</span> deck.</li> );    
            }
            
            if(log.type === "game_over") {
                return( <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span>
                <span style={{color: "#ccddff"}}>The game is over.</span></li> );    
            }

            if(log.type === "player_won") {
                return( 
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span>
                    <span style={{color: "#ccddff"}}>{log.value} won.</span></li> );    
            }

            if(log.type === "player_conceded") {
                return( 
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span> 
                    <span style={{color: "#ccddff"}}>{log.value} conceded.</span></li> );    
            }

            if(log.type === "player_tied") {
                return( 
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span> 
                    <span style={{color: "#ccddff"}}>{log.value} tied.</span></li> );    
            }
 
        });
    }
 
 
    renderCurrentDeck() {
 
        this.deckList = this.props.currentDeck;
 
        if(!_.isEmpty(this.deckList)) {
 
        const currentDeckList = _.map(this.deckList.deck.cards, (value) => {
            return <li key={this.props.allCollection[value[0]].name}>{this.props.allCollection[value[0]].name} - count: {value[1]}</li>
        });
 
 
        return(
            <div className="deck-tracker-deck">Grasz obecnie "{this.deckList.name}"
                <ul>
                    {currentDeckList}
                </ul>
            </div>
        );
 
    }
 
 
    }
 
    render() {
 
        return(
            <div className="content">
                <div className="deck-tracker-content">
                    {this.renderCurrentDeck()}
                    
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
 
function getLogsEventData(event, data) {
 
    if(!_.isEmpty(this.deckList) && (data.type == "card_drew_from_deck" || data.type == "card_to_deck" || data.type == "card_burned")) {
        
        const dbfIdreq = _.find(this.props.allCollection, { name: data.value }).dbfId;
        const indexreq = _.findIndex(this.deckList.deck.cards, (value) => {
            return value[0] == dbfIdreq;
        });
 

        if(data.type == "card_drew_from_deck" || data.type == "card_burned") this.deckList.deck.cards[indexreq][1]--;
        if(data.type == "card_to_deck") this.deckList.deck.cards[indexreq][1]++;
    }

    if(data.type == "game_over") {
        this.deckList = {};
        this.props.clearCurrentDeck();
    }
    
 
    this.props.collectLogs(data);
}
 
function toggleTrack(event) {
    if(this.props.trackButton.value === "off") 
    {   
        ipcRenderer.send('deckTracker:start');
        ipcRenderer.on('log:response', this.getLogsEventData);
        ipcRenderer.on('current-deck', this.props.getCurrentDeck);
        this.props.setTrackButton({ value : "on", text: "Turn off DeckTracker" });
    } else {
        ipcRenderer.removeAllListeners('log:response');
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
export default connect(mapStateToProps, { collectLogs, setTrackButton, clearLogs, getCurrentDeck, clearCurrentDeck})(DeckTracker);