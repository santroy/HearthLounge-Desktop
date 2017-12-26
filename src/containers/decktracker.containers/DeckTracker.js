import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { collectLogs, setTrackButton, clearLogs, getCurrentDeck, clearCurrentDeck, 
    decreaseCardFromCurrentDeck, increaseCardFromCurrentDeck, setHearthStoneInstalled} from '../../redux/actions/decktracker.actions'
import { ipcRenderer } from 'electron';
import { encode, decode } from 'deckstrings';

import GameLogs from '../../components/decktracker.components/GameLogs';
import CurrentDeckList from '../../components/decktracker.components/CurrentDeckList';
import DeckTrackerPanel from './DeckTrackerPanel';
 
class DeckTracker extends Component {

    constructor(props) {
        super(props);
        this.handleLogs = handleLogs.bind(this);
        this.isHSInstalled = isHSInstalled.bind(this);
        ipcRenderer.on('hearthstone:installed:response', this.isHSInstalled);
    }

    componentDidMount() {
        ipcRenderer.send('hearthstone:installed:request');
    }
 

    render() {
        return(
            <div className="content">
                <div className="deck-tracker-content">
                <div className="deck-tracker-content-available" style={ { display: this.props.errors.hsInstalled ? "none" : "block" } }>
                    <div className="deck-tracker-content-available-center">Sorry, Hearthstone is not installed.</div>
                </div>
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

function isHSInstalled(event, statement) {
    this.props.setHearthStoneInstalled(statement);
}

function handleLogs(event, data) {

    this.props.collectLogs(data);

    // cloneDeep check
        switch(data.label) {
            case "drew_card":
            case "card_burned":
                this.props.decreaseCardFromCurrentDeck(this.props.currentDeck.deck.cards, convertCardNameToCardDbfId.call(this, data));
                break;
            case "card_shuffled":
                this.props.increaseCardFromCurrentDeck(this.props.currentDeck.deck.cards, convertCardNameToCardDbfId.call(this, data));
                break;
            case "game_over":
                this.props.clearCurrentDeck();
                break;
            default: null;

        }
}


function convertCardNameToCardDbfId(card) {
    return _.find(this.props.allCollection, { name: card.data }).dbfId;
}
 
function mapStateToProps(state) {
    return {
        currentDeck: state.CurrentDeck,
        deckTrackerPanel: state.DeckTrackerPanel,
        logs: state.logs,
        errors: state.DTErrors
    }
}

export default connect(mapStateToProps, 
    { decreaseCardFromCurrentDeck, collectLogs, getCurrentDeck, clearCurrentDeck, increaseCardFromCurrentDeck, setHearthStoneInstalled})(DeckTracker);