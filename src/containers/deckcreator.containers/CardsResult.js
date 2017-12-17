import React, { Component } from 'react';
import { formats } from '../../globals/Format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCardToDeckList, pickCards } from '../../redux/actions/deckcreator.actions';
import _ from 'lodash';

class CardsResult extends Component {

    constructor(props) {
        super(props);
        this.filterCollection = filterCollection.bind(this);
    }
    
    render() {    
        const foundCards = _.map(this.filterCollection(), value => 
            {
                return(<img key={value.dbfId} onClick={() => {
                    console.log(value);
                    console.log(this.props.data.hero.name);
                    this.props.addCardToDeckList(value)}} className="card-image" src={value.img}/>)
            });

        return(
            <div className="deck-creator-card-results">
                <div className="deck-creator-card-top-bar"> Found {foundCards.length} cards. </div>
                <div className="deck-creator-card-found">
                    {foundCards}     
                </div>
            </div>
        );
    }
}

function filterCollection() {

    // Some collection based on passed props by searchbar, we don't need save as state, but have to send an action.

    const filteredCollection = _.filter(this.props.data.allCollection, value => {

        //Handle card term
        const cardMatches = new RegExp(`.*${_.escapeRegExp(this.props.data.term)}.*`, "i");

        if(cardMatches.test(value.name) &&
            (this.props.data.hero.name == value.playerClass || value.playerClass == "Neutral") && 
            _.includes(this.props.data.gameInfo[this.props.data.format.name.toLowerCase()], value.cardSet) &&
            verifyMultiClass(value, this.props.data.hero)) {
            return value;
        }
        
    });

    return filteredCollection;
}

function verifyMultiClass(card, hero) {

    if(_.isEmpty(card.classes)) { 
        return true; 
    } else {
        return _.includes(card.classes, hero.name);
    }
    
}

export default connect(null, { addCardToDeckList })(CardsResult);