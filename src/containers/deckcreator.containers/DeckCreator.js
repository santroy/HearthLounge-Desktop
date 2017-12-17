import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardTermSearch, addCardToDeckList, deleteCardFromDeckList} from '../../redux/actions/index';
import _ from 'lodash';
import { rarityColor } from '../../utils/styles';
import DeckStringPanel from '../../components/deckcreator.components/DeckStringPanel';
import HeroesList from './HeroesList';
import DeckFormat from './DeckFormat';
 
class DeckCreator extends Component {

    constructor(props) {
        super(props);
        this.isHeroSeleced = isHeroSeleced.bind(this);
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
                <label htmlFor="card-name">Card Name</label>
                <input value={this.props.term} onChange={(e) => this.props.cardTermSearch(e.target.value)} type="text" name="card-name" id="card-name"/>

                {console.log(this.props.format)}
                <HeroesList data={this.props.hero}/>
                <DeckFormat data={this.props.format}/>
            </div>
        </div>);

    }

    renderCards() {
        
                    const filteredCollection = _.filter(this.props.allCollection, value => {
        
                        let regexTyped = new RegExp(`.*${_.escapeRegExp(this.props.term)}.*`, "i");
                        let hasOrIsAsMultiClass = true;
        
                        if(!_.isEmpty(hasOrIsAsMultiClass)) {
                            hasOrIsAsMultiClass = _.includes(value.classes, this.props.hero.name);
                        }
        
                        if(regexTyped.test(value.name) && (this.props.hero.name == value.playerClass || value.playerClass == "Neutral") 
                        && _.includes(this.props.gameInfo[this.props.format.name.toLowerCase()], value.cardSet) && hasOrIsAsMultiClass ) {
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

                    <DeckStringPanel data={this.props}/>

                </div>
            </div>
        );
    }
}

function isHeroSeleced(hero) {
    return this.props.hero.name == hero;
}

function mapStateToProps(state) {
    const { term, hero, format } = state.FoundCollection;
    return {
        format,
        term,
        hero,
        deckList : state.DeckListCreator
    };
}

export default connect(mapStateToProps, { cardTermSearch, addCardToDeckList, deleteCardFromDeckList }) (DeckCreator);