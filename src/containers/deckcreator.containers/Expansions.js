import React, { Component } from 'react';
import { formats } from '../../globals/Format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchFormat, setExpansion } from '../../redux/actions/deckcreator.actions';
import _ from 'lodash';
import { wild, standard } from '../../globals/Expansions'

class Expansions extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        
        const expansions =  _.map(this.props.format.name == "Standard" ? standard: wild, (expansion) => {
            return( <option key={expansion}>{expansion}</option> );
        } );

        return(
            <div>
                <label htmlFor="expansions">Expansions</label>
                <select value={this.props.expansion} onChange={(e) => this.props.setExpansion(e.target.value)} id="expansions">
                    {expansions}
                </select>
            </div>
        );

        }
    }



export default connect(null, { setExpansion })(Expansions);