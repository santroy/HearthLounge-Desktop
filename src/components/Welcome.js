import React, { Component } from 'react';
const path = require('path');
import _ from 'lodash';

class Welcome extends Component {

    render() {
        return(
            <div className="content">
                <div className="contentPlaceholder">
                    <div className="contentPlaceholderMessage">Welcome to our App!<br/>Please sign in and choose feature!</div>
                </div>
            </div>
        );
    }
    
}

export default Welcome;