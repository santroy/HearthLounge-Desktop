const path = require('path');

import React, { Component } from 'react';
import { formats } from '../../globals/Format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCardFromDeckList } from '../../redux/actions/deckcreator.actions';
import { rarityColor } from '../../utils/styles';
import _ from 'lodash';


class DeckList extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        
        const deckList = _.map(this.props.data.deckList, value => {
            if(value.rarity == "Legendary") {
                return(
                    <tr key={value.dbfId} onClick={() => this.props.deleteCardFromDeckList(value) }>
                        <td>{value.cost}</td>
                        <td style={ { color: rarityColor(value.rarity) } } >{value.name}</td>
                        <td><img src={path.resolve('assets/legendary-star.png')}/></td>
                    </tr>);
                    }
            if(value.count == 1) {
            return(
                <tr key={value.dbfId} onClick={() => this.props.deleteCardFromDeckList(value) }>
                    <td>{value.cost}</td>
                    <td  colSpan="2" style={ { color: rarityColor(value.rarity) } } >{value.name}</td>
                </tr>);
                }
            if(value.count == 2) {
                return(
                    <tr key={value.dbfId} onClick={() => this.props.deleteCardFromDeckList(value) }>
                        <td>{value.cost}</td>
                        <td style={ { color: rarityColor(value.rarity) } } >{value.name}</td>
                        <td>{value.count}</td>
                    </tr>);
                    }
        });

        return(
            <div className="deck-creator-deck-list">
                <table>
                    <tbody>    
                            {deckList}
                    </tbody>
                </table>
            </div>
        );

        }
    }



export default connect(null, { deleteCardFromDeckList })(DeckList);