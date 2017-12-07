import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
 
class DeckCreator extends Component {

    render() {

        return(
            <div className="content">
                <div className="contentPlaceholder">
                    <div className="contentPlaceholderMessage">Do your best!<br/>Craft the best deck!</div>
                </div>
            </div>
        );
    }
}

export default DeckCreator;