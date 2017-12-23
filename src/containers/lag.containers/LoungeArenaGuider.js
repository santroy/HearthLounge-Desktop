import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import Card from './Card';
import DeckList from './DeckList';
import LAGPanel from './LAGPanel';

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
					<div className="lag-card-choices">
						<div className="lag-card-choice-1">
							<Card ref={ (context) => this.card1 = context } clearAllInputs={this.clearAllInputs} cardBacks={this.props.cardBacks} allCollection={this.props.allCollection}/>
						</div>
						<div className="lag-card-choice-2">
							<Card ref={ (context) => this.card2 = context } clearAllInputs={this.clearAllInputs} cardBacks={this.props.cardBacks} allCollection={this.props.allCollection}/>
						</div>
						<div className="lag-card-choice-3">
							<Card ref={ (context) => this.card3 = context } clearAllInputs={this.clearAllInputs} cardBacks={this.props.cardBacks} allCollection={this.props.allCollection}/>
						</div>
					</div>
					<div className="lag-decklist">
						<DeckList deckList={this.props.LAGDeckList}/>
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