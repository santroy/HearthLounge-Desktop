import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { getYsera, selectComponent } from '../actions/index';
import { bindActionCreators } from 'redux';
import Welcome from './Welcome';
import _ from 'lodash';
import Deck from './Deck';
import Menu from './Menu';
import DeckTracker from './DeckTracker';
import LoungeArenaGuider from './LoungeArenaGuider';
 
class Content extends Component {

    constructor(props) {
        super(props);
        let selectedComponent;
    }


    setSelectedComponent() {
        console.log(this.props.selectedComponent)
        return this.props.selectedComponent ? this.props.selectedComponent : <Welcome/>;

        // switch(this.props.selectedComponent) {
        //     case 'deckComponent': return this.selectedComponent = <Deck/>
        //     case 'deckTrackerComponent': return this.selectedComponent = <DeckTracker/>
        //     case 'LagComponent': return this.selectedComponent = <LoungeArenaGuider/>
        //     default: return this.selectedComponent = <Welcome/>;
        // }
    }

    render() {

        return(
            <div>
                {this.setSelectedComponent()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedComponent : state.SelectComponent
    }
}

export default connect(mapStateToProps)(Content);