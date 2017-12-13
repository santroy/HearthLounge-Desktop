import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { collectLogs, setTrackButton, clearLogs, getCurrentDeck} from '../actions'
import { ipcRenderer } from 'electron';
import { encode, decode } from 'deckstrings';
 
class DeckTracker extends Component {

    constructor(props) {
        super(props);
        this.getLogsEventData = getLogsEventData.bind(this);
    }


    renderLogs() {
        return _.map(this.props.logs, log => {

            if(log.type === "players") {
                return( <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}]</span> A match between <span style={{color: "#ff9999"}}>{log.value[0].name}</span> and <span style={{color: "#ff9999"}}>{log.value[1].name}</span> is started.</li> );    
            }

            if(log.type === "card_drew_from_deck") {
                return(
                    <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}]</span> You received <span style={{color: "#99ff99"}} >{log.value}</span> to your hand from deck.</li>
                );
            }

            if(log.type === "hero_power") {
                return( <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}]</span> <span style={{color: "#ff9999"}}>{log.value.player}</span> used Hero Power (<span style={{color: "#ff9999"}}>{log.value.name}</span>).</li> );    
            }

            if(log.type === "card_played") {
                return( <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}]</span> <span style={{color: "#ff9999"}}>{log.value.player}</span> played <span style={{color: "#ff9999"}}>{log.value.name}</span>.</li> );    
            }

            if(log.type === "game_over") {
                return( <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}]</span> <span style={{color: "#ff9999"}}>{log.value}</span></li> );    
            }

            if(log.type === "card_created_to_hand") {
                return( <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}]</span> <span style={{color: "#ff9999"}}>{log.value.name}</span> is generated to <span style={{color: "#ff9999"}}>{log.value.player}</span> hand.</li> );    
            }

            // if(log.type === "card_to_deck") {
            //     return( <li key={log.id}><span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}]</span> Putting <span style={{color: "#ff9999"}}>{log.value.name}</span> to my deck.</li> );    
            // }

        });
    }


    renderCurrentDeck() {

        if(!_.isEmpty(this.props.currentDeck)) {

        const currentDeckList = _.map(this.props.currentDeck.deck.cards, (value) => {
            return <li>{this.props.allCollection[value[0]].name} - count: {value[1]}</li>
        });


        return(
            <div className="deck-tracker-deck">Grasz obecnie "{this.props.currentDeck.name}"
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
export default connect(mapStateToProps, { collectLogs, setTrackButton, clearLogs, getCurrentDeck})(DeckTracker);