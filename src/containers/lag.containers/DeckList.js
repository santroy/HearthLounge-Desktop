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

    // const deckList = _.map(this.props.data.deckList, value => {

    //     const isLegendary = _.eq(value.rarity, "Legendary");
    //     const shouldShowAmount = value.count > 1;

    //     return(
    //         <tr key={value.dbfId} onClick={() => this.props.deleteCardFromDeckList(value) }>
    //             <td>{value.cost}</td>
    //             <td colSpan={ isLegendary || shouldShowAmount ? null : 2 } style={ { color: rarityColor(value.rarity) } }>{value.name}</td>
    //             { isLegendary ? <td><img src={path.resolve('assets/legendary-star.png')}/></td> : null }
    //             { shouldShowAmount && !isLegendary ? <td>{value.count}</td> : null }
    //         </tr>

    //     );

    // });
    
    
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