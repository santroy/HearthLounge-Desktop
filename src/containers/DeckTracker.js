import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { collectLogs, setTrackButton, clearLogs, getCurrentDeck, clearCurrentDeck} from '../redux/actions'
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
 
    if(!_.isEmpty(this.deckList) && (data.label == "drew_card" || data.label == "card_shuffled" || data.label == "card_burned")) {
        
        const dbfIdreq = _.find(this.props.allCollection, { name: data.data }).dbfId;
        const indexreq = _.findIndex(this.deckList.deck.cards, (value) => {
            return value[0] == dbfIdreq;
        });
 

        if(data.label == "drew_card" || data.label == "card_burned") this.deckList.deck.cards[indexreq][1]--;
        if(data.label == "card_shuffled") this.deckList.deck.cards[indexreq][1]++;
    }

    if(data.label == "game_over") {
        this.deckList = {};
        this.props.clearCurrentDeck();
    }
    
 
    this.props.collectLogs(data);
}
 
function toggleTrack(event) {
    if(this.props.trackButton.value === "off") 
    {   
        ipcRenderer.send('deckTracker:start');
        ipcRenderer.on('log:delivery', this.getLogsEventData);
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
export default connect(mapStateToProps, { collectLogs, setTrackButton, clearLogs, getCurrentDeck, clearCurrentDeck})(DeckTracker);