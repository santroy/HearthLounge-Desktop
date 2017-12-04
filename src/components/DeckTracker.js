import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
 
class DeckTracker extends Component {

    render() {

        return(
            <div className="content">
                <div className="contentPlaceholder">
                    <div className="contentPlaceholderMessage">Track your minds!</div>
                </div>
            </div>
        );
    }
}

export default DeckTracker;