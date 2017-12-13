import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardTermSearch, heroSearch, addCardToDeckList, deleteCardFromDeckList, heroObj, gameModeObj, gameModeF} from '../actions/index';
import _ from 'lodash';
import { encode, decode } from 'deckstrings';
const { clipboard } = require('electron');
 
class DeckCreator extends Component {

    constructor(props) {
        super(props);
        this.isHeroSeleced = isHeroSeleced.bind(this);
        this.deckListToDeckString = deckListToDeckString.bind(this);
    }

    renderDeckList() {

        const deckList = _.map(this.props.deckList, value => {
            if(value.rarity == "Legendary") {
                return(
                    <tr key={value.dbfId} onClick={() => this.props.deleteCardFromDeckList(value) }>
                        <td>{value.cost}</td>
                        <td style={ { color: rarityColor(value.rarity) } } >{value.name}</td>
                        <td><img src="https://www.chronicle.com/forums/Themes/CHE/images/star.gif"/></td>
                    </tr>);
                    }
            if(value.count == 1) {
            return(
                <tr key={value.dbfId} onClick={() => this.props.deleteCardFromDeckList(value) }>
                    <td>{value.cost}</td>
                    <td  colSpan="2" style={ { color: rarityColor(value.rarity) } } >{value.name}</td>
                </tr>);
                }
            if(value.count == 2) {
                return(
                    <tr key={value.dbfId} onClick={() => this.props.deleteCardFromDeckList(value) }>
                        <td>{value.cost}</td>
                        <td style={ { color: rarityColor(value.rarity) } } >{value.name}</td>
                        <td>{value.count}</td>
                    </tr>);
                    }
        });

        return(
            <div className="deck-creator-deck-list">
                <table>
                    <tbody>    
                            {deckList}
                    </tbody>
                </table>
            </div>
        );

    }


    renderSearch() {

        return(    
        <div className="deck-creator-card-search">
            <div className="deck-creator-card-top-bar"> Search </div>

            <div className="deck-creator-search-inputs">
                {this.renderHeroList(heroObj)}
                <label htmlFor="card-name">Card Name</label>
                <input value={this.props.term} onChange={(e) => this.props.cardTermSearch(e.target.value)} type="text" name="card-name" id="card-name"/>
                {this.renderGameModeList()}
            </div>
        </div>);

    }

    renderGameModeList() {

        const gameModeList =  _.map(gameModeObj, (gameMode) => {
            return( <option selected={_.eq(this.props.gameMode.name, gameMode.name)} key={gameMode.name}>{gameMode.name}</option> );
        } );

        return(
            <div>
                <label htmlFor="game-mode-type">Game Mode</label>
                <select onChange={(e) => this.props.gameModeF(e.target.value)} id="game-mode-type">
                    {gameModeList}
                </select>
            </div>
        );

    }

    renderHeroList(heroArr) { 
        const heroOptions =  _.map(heroArr, (hero) => {
            return( <option selected={_.eq(this.props.hero.name, hero.name)} key={hero.name}>{hero.name}</option> );
        } );

        return(
            <div>
                <label htmlFor="hero-name">Hero</label>
                <select onChange={(e) => this.props.heroSearch(e.target.value)} id="hero-name" name="hero-name">
                    {heroOptions}
                </select>
            </div>
        );
    }

    renderCards() {
        
                    const filteredCollection = _.filter(this.props.allCollection, value => {
        
                        let regexTyped = new RegExp(`.*${_.escapeRegExp(this.props.term)}.*`, "i");
                        let hasOrIsAsMultiClass = true;
        
                        if(!_.isEmpty(hasOrIsAsMultiClass)) {
                            hasOrIsAsMultiClass = _.includes(value.classes, this.props.hero.name);
                        }
        
                        if(regexTyped.test(value.name) && (this.props.hero.name == value.playerClass || value.playerClass == "Neutral") 
                        && _.includes(this.props.gameInfo[this.props.gameMode.name.toLowerCase()], value.cardSet) && hasOrIsAsMultiClass ) {
                           return value;
                        }
        
                    });


        
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


    render() {

        return(
            <div className="content">
                {this.renderSearch()}
                {this.renderCards()}


                <div className="deck-creator-deck-choices">

                    <div className="deck-creator-card-top-bar">
                        Deck {_.sumBy(this.props.deckList, (value) => value.count)}/30
                    </div>
                        
                    {this.renderDeckList()}

                    <div className="deck-creator-deck-string">
                        Deckstring
                        <div className="deck-creator-deck-string-control">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><input id="dck" type="text" onChange={() => {return;}} value={this.deckListToDeckString()}/></td>
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

function isHeroSeleced(hero) {
    return this.props.hero.name == hero;
}

function mapStateToProps(state) {
    const { term, hero, mode } = state.FoundCollection;
    return {
        gameMode : mode,
        term,
        hero,
        deckList : state.DeckListCreator
    };
}


function rarityColor(rarity) {

     switch(rarity) {
         case "Common": return "white";
         case "Rare": return "#66ccff";
         case "Epic": return "#ff66cc";
         case "Legendary": return "#ffcc66";
         default: return "white";
     }


}


function deckListToDeckString() {
    const deckListFormat = { cards: [], heroes: [Number(this.props.hero.id)], format: this.props.gameMode.id };
    _.each(this.props.deckList, (value) => 
    { 
        deckListFormat.cards.push([Number(value.dbfId),Number(value.count)]);
     });

     const encoded = encode(deckListFormat);

     return encoded;
}

export default connect(mapStateToProps, { cardTermSearch, heroSearch, addCardToDeckList, deleteCardFromDeckList, gameModeF }) (DeckCreator);