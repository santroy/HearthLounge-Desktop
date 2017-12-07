import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFeatureMenu } from '../actions' 
import DeckCreator from './DeckCreator';
import DeckTracker from './DeckTracker';
import LoungeArenaGuider from './LoungeArenaGuider';
import Welcome from './Welcome';

import { WELCOME_COMPONENT, CREATE_DECK_COMPONENT, DECK_TRACKER_COMPONENT, LOUNGE_ARENA_GUIDER_COMPONENT } from '../reducers/SelectFeatureMenu';

class Menu extends Component {
    constructor(props) {
        super(props);
    }


    toggleMenu(event) {
        let content = document.querySelector(".menu");

        if(content.classList.contains('hidden')) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    }

    render() {
        return (
            <div>
                <div className="menu">
                    <ul>
                        <li onClick={() => this.props.selectFeatureMenu(WELCOME_COMPONENT)}>Domek</li>
                        <li onClick={() => this.props.selectFeatureMenu(CREATE_DECK_COMPONENT)}>Create Deck</li>
                        <li onClick={() => this.props.selectFeatureMenu(DECK_TRACKER_COMPONENT)}>Deck Tracker</li>
                        <li onClick={() => this.props.selectFeatureMenu(LOUNGE_ARENA_GUIDER_COMPONENT)}>LAG</li>
                    </ul>
                </div>
                <div onClick={this.toggleMenu} className="toggle-menu"></div>
            </div>
        );
    }
}

export default connect(null, { selectFeatureMenu })(Menu);