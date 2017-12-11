import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getYsera, selectComponent, getAllCollection, getGameInfo } from '../actions/index';
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

    componentDidMount() {
        if(_.isEmpty(this.props.allCollection)) {
            this.props.getAllCollection();
        }

        if(_.isEmpty(this.props.gameInfo)) {
            this.props.getGameInfo();
        }
    }

    constructor(props) {
        super(props); 

        this.welcomeComponent = <Welcome/>;
        this.deckComponent = null;
        this.deckTrackerComponent = null;
        this.loungeArenaGuiderComponent = null;
    }

    takeIstanceOf(ComponentType) {

        if(!(_.isEmpty(this.props.allCollection))) {

            switch(ComponentType) {
                case WELCOME_COMPONENT: {
                    if(!this.welcomeComponent) {
                        this.welcomeComponent = <Welcome/>
                    }
                    return this.welcomeComponent;
                }
                case CREATE_DECK_COMPONENT: {
                    if(!this.deckComponent) {
                        this.deckComponent = <DeckCreator allCollection={this.props.allCollection} gameInfo={this.props.gameInfo}/>
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

        } else return this.welcomeComponent;

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
        gameInfo: state.GameInfo,
        selectedComponent : state.SelectFeatureMenu,
        allCollection: state.AllCollection
    }
}

export default connect(mapStateToProps, { getAllCollection, getGameInfo })(Content);