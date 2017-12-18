import React, { Component } from 'react';
import { formats } from '../../globals/Format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchFormat } from '../../redux/actions/deckcreator.actions';
import _ from 'lodash';

class Expansions extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        console.log(this.props);
        
        const expansions =  _.map(this.props.data.wild, (expansion) => {
            return( <option key={expansion}>{expansion}</option> );
        } );

        return(
            <div>
                <label htmlFor="expansions">Expansions</label>
                <select value={this.props.data.wild[0]} id="expansions">
                    {expansions}
                </select>
            </div>
        );

        }
    }



export default connect(null, null)(Expansions);