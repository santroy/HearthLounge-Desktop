import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import Card from './Card';
import DeckList from './DeckList';
import LAGPanel from './LAGPanel';
import ManaCurve from '../../components/lag.components/ManaCurve';

class LoungeArenaGuider extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.clearAllInputs = this.clearAllInputs.bind(this);
	}

	componentDidMount() {
		this.setState({
			card1: this.card1.getWrappedInstance(),
			card2: this.card2.getWrappedInstance(),
			card3: this.card3.getWrappedInstance(),
		});
	}
	
	clearAllInputs() {

		this.state.card1.clearInput();
		this.state.card2.clearInput();
		this.state.card3.clearInput();	
	}



	render () {
		return (
            <div className="content">
				<div className="lag-wrapper">
				<div className="lag-decklist">
							<DeckList deckList={this.props.LAGDeckList}/>
							<ManaCurve deckList={this.props.LAGDeckList}/>

				</div>
				<div className="lag-deck-card-count">{_.sumBy(this.props.LAGDeckList, (value) => value.count)}/30</div>
					<div className="lag-card-choices">
							<Card ref={ (context) => this.card1 = context } cardNumber={1} clearAllInputs={this.clearAllInputs} cardBacks={this.props.cardBacks} allCollection={this.props.allCollection}/>
							<Card ref={ (context) => this.card2 = context } cardNumber={2} clearAllInputs={this.clearAllInputs} cardBacks={this.props.cardBacks} allCollection={this.props.allCollection}/>
							<Card ref={ (context) => this.card3 = context } cardNumber={3} clearAllInputs={this.clearAllInputs} cardBacks={this.props.cardBacks} allCollection={this.props.allCollection}/>
					</div>
					<div className="lag-panel">
						<LAGPanel clearAllInputs={this.clearAllInputs}/>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        LAGDeckList : state.LAGDeckList
    }
}


export default connect(mapStateToProps, null)(LoungeArenaGuider);