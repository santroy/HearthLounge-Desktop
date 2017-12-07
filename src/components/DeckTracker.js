import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { collectDrewCards, setTrackButton } from '../actions'
import { ipcRenderer } from 'electron';
 
class DeckTracker extends Component {

    componentWillMount() {
        //ipcRenderer.removeListener('drew-cards:response', this.getCardDrewEventData);
      }

    constructor(props) {
        super(props);
        this.getCardDrewEventData = getCardDrewEventData.bind(this);
    }


    renderDrewCards() {
        return _.map(this.props.DrewCard, card => {
            return(
                <li key={card.id}><span style={{ color: "#e6e6e6" }}>[{printDate()}]</span> You received <span style={{color: "#99ff99"}} >{card.name}</span> to your hand.</li>
            );
        });
    }


    render() {

        console.log(this.props.DrewCard);

        return(

            <div className="content">
                <div className="deck-tracker-content">
                    <div className="deck-tracker-deck"></div>
                    <div className="toggle-track">
                        <button value={this.props.trackButton.value}
                            onClick={toggleTrack.bind(this)} className="toggle-track-button">{this.props.trackButton.text}</button>
                    </div>
                    <div className="deck-tracker-log">
                    Game Log:
                    <ul>
                        {this.renderDrewCards()}
                    </ul>
                    </div>
                </div>
            </div>
        );
    }


    componentWillUnmount() {
        //ipcRenderer.removeListener('drew-cards:response', this.getCardDrewEventData);
    }

}

function printDate() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function getCardDrewEventData(event, data) {
    this.props.collectDrewCards(data);
}

function toggleTrack(event) {
    if(this.props.trackButton.value === "off") 
    {   
        ipcRenderer.send('deckTracker:start');
        ipcRenderer.on('drew-cards:response', this.getCardDrewEventData);
        this.props.setTrackButton({ value : "on", text: "Turn off DeckTracker" });
    } else {
        ipcRenderer.removeAllListeners('drew-cards:response');
        ipcRenderer.send('deckTracker:stop');
        this.props.setTrackButton({ value : "off", text: "Turn on DeckTracker" });
    }
}


function mapStateToProps(state) {
    return {
        trackButton: state.trackButton,
        DrewCard: state.DrewCards,
    }
}
export default connect(mapStateToProps, { collectDrewCards, setTrackButton })(DeckTracker);