import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { collectDrewCards } from '../actions'
import { ipcRenderer } from 'electron';
 
class DeckTracker extends Component {

    componentDidMount() {
        ipcRenderer.on('drew-cards:response', this.checkListenerSend);
      }

    constructor(props) {
        super(props);
        this.checkListenerSend = this.checkListenerSend.bind(this);
    }

    checkListenerSend(event, data) {
        console.log('Listender Response: ', data);
        this.props.collectDrewCards(data);
    }

    renderDrewCards() {
        return _.map(this.props.DrewCard, card => {
            return(
                <li key={card.id}>{card.name}</li>
            );
        });
    }

    render() {
        return(
            <div className="content">
                <ul>
                    {this.renderDrewCards()}
                </ul>
            </div>
        );
    }

    componentWillUnmount() {
        ipcRenderer.removeListener('drew-cards:response', this.checkListenerSend);
    }

}


function mapStateToProps(state) {
    return {
        DrewCard: state.DrewCards,
    }
}
export default connect(mapStateToProps, { collectDrewCards })(DeckTracker);