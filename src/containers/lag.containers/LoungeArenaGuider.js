import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
 
class LoungeArenaGuider extends Component {

    render() {

        return(
            <div className="content">
                <div className="contentPlaceholder">
                    <div className="contentPlaceholderMessage">Take my hand!<br/>Let's win this!</div>
                </div>
            </div>
        );
    }
}

export default LoungeArenaGuider;