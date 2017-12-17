import React, { Component } from 'react';
import { formats } from '../../globals/Format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCardToDeckList } from '../../redux/actions/deckcreator.actions';
import _ from 'lodash';

class CardsResult extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        
        const filteredCollection = _.filter(this.props.data.allCollection, value => {
        
                        let regexTyped = new RegExp(`.*${_.escapeRegExp(this.props.data.term)}.*`, "i");
                        let hasOrIsAsMultiClass = true;
        
                        if(!_.isEmpty(hasOrIsAsMultiClass)) {
                            hasOrIsAsMultiClass = _.includes(value.classes, this.props.data.hero.name);
                        }
        
                        if(regexTyped.test(value.name) && (this.props.data.hero.name == value.playerClass || value.playerClass == "Neutral") 
                        && _.includes(this.props.data.gameInfo[this.props.data.format.name.toLowerCase()], value.cardSet) && hasOrIsAsMultiClass ) {
                           return value;
                        }
        
                    });

///////////////////////////////
        
                    const foundCards = _.map(filteredCollection, value => 
                        {
                            return(<img key={value.dbfId} onClick={() => {
                                console.log(value);
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



export default connect(null, { addCardToDeckList })(CardsResult);