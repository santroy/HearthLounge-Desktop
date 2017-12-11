import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardTermSearch, heroSearch, addCardToDeckList, deleteCardFromDeckList } from '../actions/index';
import _ from 'lodash';
import { encode, decode } from 'deckstrings';
const { clipboard } = require('electron');
 
class DeckCreator extends Component {

    constructor(props) {
        super(props);
        // this.state = {};
    }

    renderDeckList() {

        return _.map(this.props.deckList, value => {
            return(<tr key={value.dbfId} onClick={() => { console.log(value); this.props.deleteCardFromDeckList(value)} }><td>{value.cost}</td><td>{value.name}</td><td>{value.count}</td></tr>);
        });

    }


    renderCards() {

            const filteredCollection = _.filter(this.props.allCollection, value => {

                let regexTyped = new RegExp(`.*${this.props.term}.*`, "i");

                if(regexTyped.test(value.name) && (this.props.hero == value.playerClass || value.playerClass == "Neutral") ) {
                   return value;
                }

            });

            return _.map(filteredCollection, value => 
                {
                    return(<img key={value.dbfId} onClick={() => this.props.addCardToDeckList(value)} className="card-image" src={value.img}/>)
                });

    }


    render() {

        return(
            <div className="content">
            
                <div className="deck-creator-card-search">
                    <p>Search</p>

                    <div className="deck-creator-search-inputs">
                        <label htmlFor="hero-name">Hero</label>
                        <select onChange={(e) => this.props.heroSearch(e.target.value)} id="hero-name" name="hero-name">
                            <option value="Mage">Mage</option>
                            <option value="Warrior">Warrior</option>
                            <option value="Shaman">Shaman</option>
                            <option value="Warlock">Warlock</option>
                            <option value="Paladin">Paladin</option>
                            <option value="Hunter">Hunter</option>
                            <option value="Druid">Druid</option>
                            <option value="Rogue">Rogue</option>
                            <option value="Priest">Priest</option>
                        </select>
                        <label htmlFor="card-name">Card Name</label>
                        <input value={this.props.term} onChange={(e) => this.props.cardTermSearch(e.target.value)} type="text" name="card-name" id="card-name"/>
                    </div>


                </div>
                <div className="deck-creator-card-results">      
                        {this.renderCards()}
                </div>

                <div className="deck-creator-deck-choices">

                    <div className="deck-creator-deck-counter">
                        Deck {_.sumBy(this.props.deckList, (value) => value.count)}/30
                    </div>
                        

                        <div className="deck-creator-deck-list">

                            <table>
                            <tbody>
                                    
                                    { this.renderDeckList() }

                            </tbody>
                            </table>

                        </div>

                        <div className="deck-creator-deck-string">
                            Deckstring
                            <div className="deck-creator-deck-string-control">
                            <table>
                            <tbody>
                                <tr>
                                <td><input id="dck" type="text" onChange={() => {return;}} value={deckListToDeckString(this.props.deckList)}/></td>
                                <td><button className="deck-creator-deck-copy-button" onClick={() => { clipboard.writeText(document.querySelector("#dck").value) }} ></button></td>
                                </tr>
                            </tbody>
                            </table>
                            </div>
                        </div>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { term, hero } = state.FoundCollection;
    return {
        term,
        hero,
        deckList : state.DeckListCreator
    };
}

function deckListToDeckString(deckList) {

    console.log(deckList);

    const deckListFormat = { cards: [], heroes: [7], format: 2 };
    _.each(deckList, (value) => 
    { 
        deckListFormat.cards.push([Number(value.dbfId),Number(value.count)]);
     });

     const encoded = encode(deckListFormat);
     return encoded;
}

export default connect(mapStateToProps, { cardTermSearch, heroSearch, addCardToDeckList, deleteCardFromDeckList }) (DeckCreator);