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
        this.exposeCardCost = exposeCardCost.bind(this);
    }
    
    render() {    
        const foundCards = _.map(this.filterCollection(), value => 
            {
                return(<img key={value.dbfId} onClick={() => {
                    console.log(value);
                    this.props.addCardToDeckList(_.cloneDeep(value))}} className="card-image" src={value.img}/>)
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

        if(cardMatches.test(value.name) && (this.props.data.hero.name == value.playerClass || value.playerClass == "Neutral" ) && exposeAffiliation(this.props.data.affiliation, value) && 
            _.includes(this.props.data.gameInfo[this.props.data.format.name.toLowerCase()], value.cardSet) && verifyMultiClass(value, this.props.data.hero) && 
            this.exposeCardCost(value.cost) && exposeExpansion.call(this, value) )  
            {
            return value;
        }
        
    });

    return filteredCollection;
}

function exposeAffiliation(affiliation, card) {
    return affiliation.name == "All" ? true : affiliation.name == "Class" && card.playerClass != "Neutral" ? true : affiliation.name == card.playerClass ? true : false ;
}

function verifyMultiClass(card, hero) {

    if(_.isEmpty(card.classes)) { 
        return true; 
    } else {
        return _.includes(card.classes, hero.name);
    }
    
}

function exposeExpansion(expansion) {

    if(this.props.data.expansion == "All") return true;

    return this.props.data.expansion == expansion.cardSet;


}

function exposeCardCost(cost) {

    //console.log(this.props.data);

    const activeManaCost = _.find(this.props.data.manaCrystals, (o) => o.active == true);


    if(_.isEmpty(activeManaCost)) return true;

    if(Number(activeManaCost.value) == 9) {
        return Number(activeManaCost.value) <= cost;
    }

    return Number(activeManaCost.value) == cost;

}

export default connect(null, { addCardToDeckList })(CardsResult);