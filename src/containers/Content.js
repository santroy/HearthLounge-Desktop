import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectComponent, getAllCollection, getGameInfo, getCardBacks } from '../redux/actions';
import { bindActionCreators } from 'redux';
import Home from '../components/home.components/Home';
import _ from 'lodash';
import DeckCreator from './deckcreator.containers/DeckCreator';
import Menu from './Menu';
import DeckTracker from '../containers/decktracker.containers/DeckTracker';
import LoungeArenaGuider from './lag.containers/LoungeArenaGuider';

import { HOME_COMPONENT, CREATE_DECK_COMPONENT, DECK_TRACKER_COMPONENT, LOUNGE_ARENA_GUIDER_COMPONENT } from '../redux/reducers/SelectFeatureMenu';

const path = require('path');
 
class Content extends Component {

    componentDidMount() {
        if(_.isEmpty(this.props.allCollection)) {
            this.props.getAllCollection();
        }

        if(_.isEmpty(this.props.gameInfo)) {
            this.props.getGameInfo();
        }

        if(_.isEmpty(this.props.cardBacks)) {
            this.props.getCardBacks();
        }
    }

    constructor(props) {
        super(props); 

        this.welcomeComponent = <Home/>;
        this.deckComponent = null;
        this.deckTrackerComponent = null;
        this.loungeArenaGuiderComponent = null;
    }

    takeIstanceOf(ComponentType) {

        if(!(_.isEmpty(this.props.allCollection))) {
            console.log(this);
            switch(ComponentType) {
                case HOME_COMPONENT: {
                    if(!this.welcomeComponent) {
                        this.welcomeComponent = <Home/>
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
                        this.deckTrackerComponent = <DeckTracker allCollection={this.props.allCollection} gameInfo={this.props.gameInfo}/>
                    }
                    return this.deckTrackerComponent
                }
                case LOUNGE_ARENA_GUIDER_COMPONENT: {
                    if(!this.loungeArenaGuiderComponent) {
                        this.loungeArenaGuiderComponent = <LoungeArenaGuider cardBacks={this.props.cardBacks} allCollection={this.props.allCollection}/>
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
                {loadScreen(this.props.allCollection)}
                <div>
                    {this.getSelectedComponent()}
                </div>
            </div>
        );
    }
}

function loadScreen(requestedElement) {

    if(_.isEmpty(requestedElement)) {
        return (
            <div className="preparing">
                <div className="preparing-center">
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </div>
                </div>
            </div>
        );
    } else return null;

}

function mapStateToProps(state) {
    return {
        gameInfo: state.GameInfo,
        selectedComponent : state.SelectFeatureMenu,
        allCollection: state.AllCollection,
        cardBacks: state.CardBacks
    }
}

export default connect(mapStateToProps, { getAllCollection, getGameInfo, getCardBacks })(Content);