import React, { Component } from 'react';

import _ from 'lodash';

class CurrentDeckList extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        if(_.isEmpty(this.props.data.currentDeck)) return(
            <div className="deck-tracker-deck">You are not in the game!"
            <ul>
                Start game to load deck.
            </ul>
        </div>
        );

        if(!_.isEmpty(this.props.data.currentDeck)) {

            const currentDeckList = _.map(this.props.data.currentDeck.deck.cards, (value) => {
                return <li key={this.props.data.allCollection[value[0]].name}>{this.props.data.allCollection[value[0]].name} - count: {value[1]}</li>
            });
        
            return(
                <div className="deck-tracker-deck">Grasz obecnie "{this.props.data.currentDeck.name}"
                    <ul>
                        {currentDeckList}
                    </ul>
                </div>
            );
 
        }

    }

}

export default CurrentDeckList;