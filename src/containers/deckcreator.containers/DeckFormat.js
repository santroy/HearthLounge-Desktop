import React, { Component } from 'react';
import { formats } from '../../globals/Format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchFormat } from '../../redux/actions/deckcreator.actions';
import _ from 'lodash';

class DeckFormat extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        
        const formatList =  _.map(formats, (format) => {
            return( <option key={format.name}>{format.name}</option> );
        } );

        return(
            <div>
                <label htmlFor="game-format">Deck Format</label>
                <select value={this.props.data.name} onChange={(e) => this.props.searchFormat(e.target.value)} id="game-format">
                    {formatList}
                </select>
            </div>
        );

        }
    }



export default connect(null, { searchFormat })(DeckFormat);