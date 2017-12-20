import React, { Component } from 'react';
import { rarityColor } from '../../utils/styles';
import path from 'path';

import _ from 'lodash';

class CurrentDeckList extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        if(_.isEmpty(this.props.data.currentDeck)) return(
            <div className="deck-tracker-deck">
                <div className="deck-tracker-game-start">Start game to load deck.</div>
        </div>
        );

        if(!_.isEmpty(this.props.data.currentDeck)) {

            let currentDeckObj = {};

            _.each(this.props.data.currentDeck.deck.cards, (value) => {
                currentDeckObj[value[0]] = _.cloneDeep(this.props.data.allCollection[value[0]]);
                currentDeckObj[value[0]].count = value[1];
            });

            currentDeckObj = _.sortBy(currentDeckObj, ['cost', 'name']);

            const currentDeckList = _.map(currentDeckObj, (value) => {

                return(
                    <tr style={ value.count <= 0 ? { backgroundColor: "gray", color: "gray" } : null } key={value.dbfId}>
                        <td>{value.cost}</td>
                        <td colSpan={ value.rarity == "Legendary" ||  value.count >= 2 ? null : 2} style={ value.count >= 1 ? { color: rarityColor(value.rarity) } : null }>{value.name}</td>

                        {value.rarity == "Legendary" ? <td><img src={path.resolve('assets/legendary-star.png')}/></td> : null}
                        {value.count >= 2 ? <td>{value.count}</td> : null}
                    </tr>
                );
            });
        
            return(
                <div className="deck-tracker-deck">
                    <div className="deck-tracker-deck-name">Playing now "{this.props.data.currentDeck.name}"</div>
                        <table>
                            <tbody>    
                                    {currentDeckList}
                            </tbody>
                        </table>
                </div>
            );
 
        }

    }

}

export default CurrentDeckList;