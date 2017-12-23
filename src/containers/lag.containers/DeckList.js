import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class DeckList extends Component {

    constructor(props) {
        super(props);
    }

    renderDeckList() {
        return _.map(this.props.deckList, (card => {
            return(
                <tr key={card.dbfId} >
                    <td>{card.cost}</td>
                    <td>{card.name}</td>
                </tr>
            );
        })); 
    }

    
    
    render() {

        return(
            <div>
                <table>
                    <tbody>    
                         {this.renderDeckList()}
                    </tbody>
                </table>
            </div>
        );

        }
    }



export default connect(null, null)(DeckList);