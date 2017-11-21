import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
    }

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

export default Content;