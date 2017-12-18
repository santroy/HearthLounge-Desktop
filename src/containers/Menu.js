import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFeatureMenu } from '../redux/actions' 
import DeckCreator from './deckcreator.containers/DeckCreator';
import DeckTracker from './decktracker.containers/DeckTracker';
import LoungeArenaGuider from './LoungeArenaGuider';
import Home from '../components/Home';

import { HOME_COMPONENT, CREATE_DECK_COMPONENT, DECK_TRACKER_COMPONENT, LOUNGE_ARENA_GUIDER_COMPONENT } from '../redux/reducers/SelectFeatureMenu';

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
                        <li onClick={() => this.props.selectFeatureMenu(HOME_COMPONENT)}>Domek</li>
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