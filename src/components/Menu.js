import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectComponent } from '../actions' 
import Deck from './Deck';
import DeckTracker from './DeckTracker';
import LoungeArenaGuider from './LoungeArenaGuider';
import Welcome from './Welcome';

import { WELCOME_COMPONENT, CREATE_DECK_COMPONENT, DECK_TRACKER_COMPONENT, LOUNGE_ARENA_GUIDER_COMPONENT } from '../reducers/select_component';

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
                        <li onClick={() => this.props.selectComponent(WELCOME_COMPONENT, <Welcome/>)}>Domek</li>
                        <li onClick={() => this.props.selectComponent(CREATE_DECK_COMPONENT, <Deck/>)}>Create Deck</li>
                        <li onClick={() => this.props.selectComponent(DECK_TRACKER_COMPONENT, <DeckTracker/>)}>Deck Tracker</li>
                        <li onClick={() => this.props.selectComponent(LOUNGE_ARENA_GUIDER_COMPONENT,<LoungeArenaGuider/>)}>LAG</li>
                    </ul>
                </div>
                <div onClick={this.toggleMenu} className="toggle-menu"></div>
            </div>
        );
    }
}

export default connect(null, { selectComponent })(Menu);