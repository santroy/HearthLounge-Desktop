import React, { Component } from 'react';
import { formats } from '../../globals/Format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatSearch } from '../../redux/actions/index';
import _ from 'lodash';

class DeckFormat extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }
    
    render() {
        
        const formatList =  _.map(formats, (format) => {
            return( <option selected={_.eq(this.props.data.name, format.name)} key={format.name}>{format.name}</option> );
        } );

        return(
            <div>
                <label htmlFor="game-format">Deck Format</label>
                <select onChange={(e) => this.props.formatSearch(e.target.value)} id="game-format">
                    {formatList}
                </select>
            </div>
        );

        }
    }



export default connect(null, { formatSearch })(DeckFormat);