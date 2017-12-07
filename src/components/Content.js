import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getYsera, selectComponent } from '../actions/index';
import { bindActionCreators } from 'redux';
import Welcome from './Welcome';
import _ from 'lodash';
import DeckCreator from './DeckCreator';
import Menu from './Menu';
import DeckTracker from './DeckTracker';
import LoungeArenaGuider from './LoungeArenaGuider';

import { WELCOME_COMPONENT, CREATE_DECK_COMPONENT, DECK_TRACKER_COMPONENT, LOUNGE_ARENA_GUIDER_COMPONENT } from '../reducers/SelectFeatureMenu';

const path = require('path');
 
class Content extends Component {

    constructor(props) {
        super(props); 

        this.welcomeComponent = <Welcome/>;
        this.deckComponent = null;
        this.deckTrackerComponent = null;
        this.loungeArenaGuiderComponent = null;
    }

    takeIstanceOf(ComponentType) {

        switch(ComponentType) {
            case WELCOME_COMPONENT: {
                if(!this.welcomeComponent) {
                    this.welcomeComponent = <Welcome/>
                }
                return this.welcomeComponent;
            }
            case CREATE_DECK_COMPONENT: {
                if(!this.deckComponent) {
                    this.deckComponent = <DeckCreator/>
                }
                return this.deckComponent;
            }
            case DECK_TRACKER_COMPONENT: {
                if(!this.deckTrackerComponent) {
                    this.deckTrackerComponent = <DeckTracker/>
                }
                return this.deckTrackerComponent
            }
            case LOUNGE_ARENA_GUIDER_COMPONENT: {
                if(!this.loungeArenaGuiderComponent) {
                    this.loungeArenaGuiderComponent = <LoungeArenaGuider/>
                }
                return this.loungeArenaGuiderComponent;
            }
            default: return this.welcomeComponent;
        }

    }

    getSelectedComponent() {
        return this.takeIstanceOf(this.props.selectedComponent);
    }

    render() {
        return(
            <div>
                {this.getSelectedComponent()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedComponent : state.SelectFeatureMenu
    }
}

export default connect(mapStateToProps)(Content);