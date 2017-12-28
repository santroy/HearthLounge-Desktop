import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFeatureMenu } from '../redux/actions' 
import DeckCreator from './deckcreator.containers/DeckCreator';
import DeckTracker from './decktracker.containers/DeckTracker';
import LoungeArenaGuider from './lag.containers/LoungeArenaGuider';
import Home from '../components/home.components/Home';
import LogoSVG from '../../assets/logo';

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
                <div className="menu-available" style={ { display: _.isEmpty(this.props.User) ? "block" : "none" } }  >
                    <div className="menu-available-center">Please sign in first.</div>
                </div>
                    <ul>
                        <li onClick={() => this.props.selectFeatureMenu(HOME_COMPONENT)}><LogoSVG dotsColor="#00a99c"/></li>
                        <li onClick={() => this.props.selectFeatureMenu(CREATE_DECK_COMPONENT)}>Deck Creator</li>
                        <li onClick={() => this.props.selectFeatureMenu(DECK_TRACKER_COMPONENT)}>Deck Tracker</li>
                        <li onClick={() => this.props.selectFeatureMenu(LOUNGE_ARENA_GUIDER_COMPONENT)}>LAG</li>
                    </ul>
                </div>
                <div onClick={this.toggleMenu} className="toggle-menu"></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        User: state.User
    }
}

export default connect(mapStateToProps, { selectFeatureMenu })(Menu);