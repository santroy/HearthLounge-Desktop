import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToLagDeckList } from '../../redux/actions/lag.actions/index'
import _ from 'lodash';
import Autosuggest from 'react-autosuggest';
import appraiseCardValue from '../../mechanics/lag';
import { standard } from '../../globals/Expansions';

class Card extends Component {

    componentDidMount() {
        this.activeCard = null;
    }

    constructor(props) {
        super(props);
        this.cardNameToCardObj = cardNameToCardObj.bind(this);
        this.cardImageRender = cardImageRender.bind(this);
        this.lagCollection = null;
        this.filterCollection = filterCollection.bind(this);
        this.filterCollection();
        this.state = {
            value: '',
            suggestions: []
          };
    }

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : Object.values(this.lagCollection).filter(cards =>
          cards.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };


    renderSuggestion = suggestion => (
        <div>
          {suggestion.name}
        </div>
    );

    
    getSuggestionValue = suggestion => suggestion.name;

    onChange = (event, { newValue }) => {

        this.setState({
          value: newValue
        });
        
      };

    onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
        suggestions: this.getSuggestions(value)
    });
    };
    
    onSuggestionsClearRequested = () => {
    this.setState({
        suggestions: []
    });
    };

    clearInput() {
        this.setState({value : ''});
    }

    addToDeckList(cardName) {    

        const card = this.cardNameToCardObj(cardName);

        if(!_.isEmpty(card)) {
            this.props.addToLagDeckList(card);
            this.props.clearAllInputs();
        }

    } 
 
    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Type a card name',
            value,
            onChange: this.onChange
        };


        return(
            <div className="lag-card-choice">
                <div className="lag-card-number">{this.props.cardNumber}</div>
                <Autosuggest suggestions={suggestions} onSuggestionsFetchRequested={this.onSuggestionsFetchRequested} 
                onSuggestionsClearRequested={this.onSuggestionsClearRequested} getSuggestionValue={this.getSuggestionValue} 
                renderSuggestion={this.renderSuggestion} inputProps={inputProps}/>

                <img className="card-image" onClick={(e) => this.addToDeckList(this.state.value)} src={this.cardImageRender(this.state.value)}></img>
                { this.activeCard ? <div className="lag-card-value">{appraiseCardValue(this.props.deckList, this.activeCard )}</div> : null }
            </div>
        );

        }
    }

function filterCollection() {
    this.lagCollection = _.filter(this.props.allCollection, (card) => {
        if((card.playerClass == this.props.hero || card.playerClass == 'Neutral' ) && verifyMultiClass(card, this.props.hero) && _.includes(standard, card.cardSet)) {
            return card;
        }
    });
}

function cardNameToCardObj(cardName) {
    const cardFound = _.cloneDeep(_.find(this.lagCollection, { name: cardName }));
    return cardFound;

}

function cardImageRender(cardName) {
    const card = this.cardNameToCardObj(cardName)
    if(card) {
        this.activeCard = card;
        return card.img;
    } else 
    {
        this.activeCard = null;
        return this.props.cardBacks[0].img;
    }
}

function verifyMultiClass(card, hero) {

    if(_.isEmpty(card.classes)) { 
        return true; 
    } else {
        return _.includes(card.classes, hero);
    }
    
}

export default connect(null, { addToLagDeckList }, null, { withRef: true })(Card);