import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { valueAction } from '../actions'
 
class DeckTracker extends Component {
    constructor(props) {
        super(props);

        this.state = { term: 'aloha'};
    }

    render() {

        return(
            <div className="content">
                <div className="contentPlaceholder">
                <input onChange={e => this.props.valueAction(e.target.value) } type="text" value={this.props.v}/>
                    <div className="contentPlaceholderMessage">Track your minds!</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        v: state.ValueReducer
    }
}
export default connect(mapStateToProps, { valueAction })(DeckTracker);