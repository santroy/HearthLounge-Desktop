import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { ipcRenderer } from 'electron';
import { clearLogs, toggleTrackButtonState } from '../../redux/actions/decktracker.actions'

class DeckTrackerPanel extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div>
                <div className="toggle-track">
                    <div className="toggle-track-buttons">
                        <button onClick={toggleTrack.bind(this)} className="toggle-track-button">Deck Tracker is {this.props.data.deckTrackerPanel.luancherTrackerButton.value ? null : "not"} running.</button>
                        <button onClick={clearLogsData.bind(this)} className="toggle-track-button">Clear</button>
                    </div>
                </div>

                <div className="deck-tracker-bar">Game Log:</div>
            </div>);
        }
    }

function toggleTrack(event) {

    if(!this.props.data.deckTrackerPanel.luancherTrackerButton.value) 
    {   
        ipcRenderer.send('deckTracker:start');
        ipcRenderer.on('log:delivery', this.props.handler);
        ipcRenderer.on('current-deck', this.props.data.getCurrentDeck);
        this.props.toggleTrackButtonState(true);
    } else {
        ipcRenderer.removeAllListeners('log:delivery');
        ipcRenderer.send('deckTracker:stop');
        this.props.toggleTrackButtonState(false);
    }
}

function clearLogsData() {
    this.props.clearLogs();
}
    

export default connect(null, { clearLogs, toggleTrackButtonState })(DeckTrackerPanel);