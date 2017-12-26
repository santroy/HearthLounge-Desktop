import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { deleteFromLagDeckList } from '../../redux/actions/lag.actions';
import { rarityColor } from '../../utils/styles';

class DeckList extends Component {

    constructor(props) {
        super(props);
    }

    renderDeckList() {
        return _.map(this.props.deckList, (card => {
            return(
                <tr key={card.dbfId} onClick={() => this.props.deleteFromLagDeckList(card)} >
                    <td>{card.cost}</td>
                    <td style={ { color: rarityColor(card.rarity) } } >{card.name}</td>
                    <td>{card.count}</td>
                </tr>
            );
        })); 
    }
    
    render() {

        return(
            <div className='lag-decklist-table'>
                <table>
                    <tbody>    
                         {this.renderDeckList()}
                    </tbody>
                </table>
            </div>
        );

        }
    }



export default connect(null, { deleteFromLagDeckList })(DeckList);