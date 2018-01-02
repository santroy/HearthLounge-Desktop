import React, { Component } from 'react';
import { formats } from '../../globals/Format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchAffiliation } from '../../redux/actions/deckcreator.actions';
import _ from 'lodash';
import { affiliations } from '../../globals/Affiliations';

class Affiliation extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        
        const affiliationList =  _.map(affiliations, (affiliation) => {
            return( <option key={affiliation.name}>{affiliation.name}</option> );
        } );

        return(
            <div>
                <label htmlFor="affiliation">Card Affiliation</label>
                <select value={this.props.data.name} onChange={(e) => { this.props.searchAffiliation(e.target.value)}} id="affiliation" name="affiliation">
                    {affiliationList}
                </select>
            </div>
        );

        }
    }



export default connect(null, { searchAffiliation })(Affiliation);