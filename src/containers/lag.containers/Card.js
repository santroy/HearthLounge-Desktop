import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToLagDeckList } from '../../redux/actions/lag.actions/index'
import _ from 'lodash';
import Autosuggest from 'react-autosuggest';

class Card extends Component {

    constructor(props) {
        super(props);
        this.cardNameToCardObj = cardNameToCardObj.bind(this);
        this.cardImageRender = cardImageRender.bind(this);
        this.state = {
            value: '',
            suggestions: []
          };
    }

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : Object.values(this.props.allCollection).filter(cards =>
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

            <div>
                <Autosuggest suggestions={suggestions} onSuggestionsFetchRequested={this.onSuggestionsFetchRequested} 
                onSuggestionsClearRequested={this.onSuggestionsClearRequested} getSuggestionValue={this.getSuggestionValue} 
                renderSuggestion={this.renderSuggestion} inputProps={inputProps}/>
                <img className="card-image" onClick={(e) => this.addToDeckList(this.state.value)} src={this.cardImageRender(this.state.value)}></img>
            </div>
        );

        }
    }

function cardNameToCardObj(cardName) {
    const cardFound = _.cloneDeep(_.find(this.props.allCollection, { name: cardName }));
    return cardFound;

}

function cardImageRender(cardName) {
    const card = this.cardNameToCardObj(cardName)
    if(card) {
        return card.img;
    } else return this.props.cardBacks[0].img;
}


export default connect(null, { addToLagDeckList }, null, { withRef: true })(Card);