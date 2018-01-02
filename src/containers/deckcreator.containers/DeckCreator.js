import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { matchCardTerm, deleteCardFromDeckList } from '../../redux/actions/deckcreator.actions';
import DeckStringPanel from '../../components/deckcreator.components/DeckStringPanel';
import HeroesList from './HeroesList';
import DeckFormat from './DeckFormat';
import CardsResult from './CardsResult';
import DeckList from './DeckList';
import ManaCrystals from './ManaCrystals';
import Expansions from './Expansions';
import Affiliation from './Affiliation';


 
class DeckCreator extends Component {

    constructor(props) {
        super(props);
    }

    renderSearch() {
        return(    
        <div className="deck-creator-card-search">
            <div className="deck-creator-card-top-bar"> Search </div>
            <div className="deck-creator-search-inputs">
                <label htmlFor="card-name">Card Name</label>
                <input value={this.props.term} onChange={(e) => this.props.matchCardTerm(e.target.value)} type="text" name="card-name" id="card-name"/>
                    <HeroesList data={this.props.hero}/>
                    <Affiliation data={this.props.affiliation}/>
                    <DeckFormat data={this.props.format}/>
                    <Expansions expansion={this.props.expansion} format={this.props.format}/>
                    <ManaCrystals data={this.props.manaCrystals}/>
            </div>
        </div>);

    }

    render() {

        return(
            <div className="content">

                {this.renderSearch()}

                <CardsResult data={this.props}/>


                <div className="deck-creator-deck-choices">

                    <div className="deck-creator-card-top-bar">
                        Deck {_.sumBy(this.props.deckList, (value) => value.count)}/30
                    </div>

                    <DeckList data={this.props}/>
                    <DeckStringPanel data={this.props}/>

                </div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { term, hero, format, manaCrystals, expansion, affiliation } = state.FoundCollection;
    return {
        User: state.User,
        affiliation,
        format,
        expansion,
        term,
        hero,
        manaCrystals,
        deckList : state.DeckListCreator
    };
}

export default connect(mapStateToProps, { matchCardTerm, deleteCardFromDeckList }) (DeckCreator);