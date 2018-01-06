import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import Card from './Card';
import DeckList from './DeckList';
import LAGPanel from './LAGPanel';
import ManaCurve from '../../components/lag.components/ManaCurve';
import LAGHero from './LAGHero';

class LoungeArenaGuider extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.clearAllInputs = this.clearAllInputs.bind(this);
	}
	
	clearAllInputs() {

		console.log("geee:", this);
			this.card1.wrappedInstance.clearInput();
			this.card2.wrappedInstance.clearInput();
			this.card3.wrappedInstance.clearInput();	
		
	}



	render () {

		if(_.isEmpty(this.props.LAGClass)) {
			return  <div className="content"> <LAGHero /> </div>
		} else return(
		<div className="content">
		<div className="lag-wrapper">
			<div className="lag-decklist">
						<DeckList deckList={this.props.LAGDeckList}/>
						<ManaCurve deckList={this.props.LAGDeckList}/>

			</div>
			<div className="lag-deck-card-count">{_.sumBy(this.props.LAGDeckList, (value) => value.count)}/30</div>
				<div className="lag-card-choices">
						<Card ref={ (context) => this.card1 = context } hero={this.props.LAGClass} deckList={this.props.LAGDeckList} cardNumber={1} clearAllInputs={this.clearAllInputs} cardBacks={this.props.cardBacks} allCollection={this.props.allCollection}/>
						<Card ref={ (context) => this.card2 = context } hero={this.props.LAGClass} deckList={this.props.LAGDeckList} cardNumber={2} clearAllInputs={this.clearAllInputs} cardBacks={this.props.cardBacks} allCollection={this.props.allCollection}/>
						<Card ref={ (context) => this.card3 = context } hero={this.props.LAGClass} deckList={this.props.LAGDeckList} cardNumber={3} clearAllInputs={this.clearAllInputs} cardBacks={this.props.cardBacks} allCollection={this.props.allCollection}/>
				</div>
				<div className="lag-panel">
					<LAGPanel clearAllInputs={this.clearAllInputs}/>
				</div>
			</div>
			</div>);
	
	}
}

function mapStateToProps(state) {
    return {
		LAGDeckList : state.LAGDeckList,
		LAGClass : state.LAGHero
    }
}


export default connect(mapStateToProps, null)(LoungeArenaGuider);