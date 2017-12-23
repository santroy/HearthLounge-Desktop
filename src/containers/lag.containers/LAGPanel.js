import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearLagDeckList } from '../../redux/actions/lag.actions';
import _ from 'lodash';

class LAGPanel extends Component {

    constructor(props) {
        super(props);
    }

    clearState() {
        this.props.clearAllInputs();
        this.props.clearLagDeckList();
    }

    
    render() {

        return(
            <div>
                <button onClick={() => {this.clearState()}} className="reset-lag-button">Reset</button>
            </div>
        );

        }
    }



export default connect(null, { clearLagDeckList } )(LAGPanel);
