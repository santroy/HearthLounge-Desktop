import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { collectLogs, setTrackButton, clearLogs, getCurrentDeck, clearCurrentDeck, 
    decreaseCardFromCurrentDeck, increaseCardFromCurrentDeck} from '../../redux/actions/decktracker.actions'
import { ipcRenderer } from 'electron';
import { encode, decode } from 'deckstrings';

import GameLogs from '../../components/decktracker.components/GameLogs';
import CurrentDeckList from '../../components/decktracker.components/CurrentDeckList';
import DeckTrackerPanel from './DeckTrackerPanel';
 
class DeckTracker extends Component {
 
    constructor(props) {
        super(props);
        this.handleLogs = handleLogs.bind(this);
    }
 

    render() {
 
        return(
            <div className="content">
                <div className="deck-tracker-content">
                    <CurrentDeckList data={this.props}/>
                    <DeckTrackerPanel handler={this.handleLogs} data={this.props}/>

                    <div className="deck-tracker-log">
                        <ul>
                            <GameLogs data={this.props.logs}/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
 
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
                this.props.clearCurrentDeck();
                break;
            default: null;

        }

        this.props.collectLogs(data);
}


function convertCardNameToCardDbfId(card) {
    return _.find(this.props.allCollection, { name: card.data }).dbfId;
}
 
function mapStateToProps(state) {
    return {
        currentDeck: state.CurrentDeck,
        deckTrackerPanel: state.DeckTrackerPanel,
        logs: state.logs,
    }
}

export default connect(mapStateToProps, 
    { decreaseCardFromCurrentDeck, collectLogs, getCurrentDeck, clearCurrentDeck, increaseCardFromCurrentDeck})(DeckTracker);