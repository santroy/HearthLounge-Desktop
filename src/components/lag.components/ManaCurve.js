import React, { Component } from 'react';
import _ from 'lodash';

class ManaCurve extends Component {

    constructor(props) {
        super(props);
        this.getCountByMana = getCountByMana.bind(this);
        this.calculateColumnPercentageValue = calculateColumnPercentageValue.bind(this);
    }

    render() {
        return(  
            <div className="lag-deck-manacurve">

            <div className="chart-item">
                {this.getCountByMana(0)}
                <div className="chart-column">
                    <div style={{height: this.calculateColumnPercentageValue(0)}} className="chart-column-value"></div>
                </div>
                    0
            </div>

            <div className="chart-item">
                {this.getCountByMana(1)}
                <div className="chart-column">
                    <div style={{height: this.calculateColumnPercentageValue(1)}} className="chart-column-value"></div>
                </div>
                    1
            </div>

            <div className="chart-item">
                {this.getCountByMana(2)}
                <div className="chart-column">
                    <div style={{height: this.calculateColumnPercentageValue(2)}} className="chart-column-value"></div>
                </div>
                    2
            </div>

            <div className="chart-item">
                {this.getCountByMana(3)}
                <div className="chart-column">
                    <div style={{height: this.calculateColumnPercentageValue(3)}} className="chart-column-value"></div>
                </div>
                    3
            </div>

            <div className="chart-item">
                {this.getCountByMana(4)}
                <div className="chart-column">
                    <div style={{height: this.calculateColumnPercentageValue(4)}} className="chart-column-value"></div>
                </div>
                    4
            </div>

            <div className="chart-item">
                {this.getCountByMana(5)}
                <div className="chart-column">
                    <div style={{height: this.calculateColumnPercentageValue(5)}} className="chart-column-value"></div>
                </div>
                    5
            </div>

            <div className="chart-item">
                {this.getCountByMana(6)}
                <div className="chart-column">
                    <div style={{height: this.calculateColumnPercentageValue(6)}} className="chart-column-value"></div>
                </div>
                    6
            </div>

            <div className="chart-item">
                {this.getCountByMana(7)}
                <div className="chart-column">
                    <div style={{height: this.calculateColumnPercentageValue(7)}} className="chart-column-value"></div>
                </div>
                    7
            </div>

            <div className="chart-item">
                {this.getCountByMana(8)}
                <div className="chart-column">
                    <div style={{height: this.calculateColumnPercentageValue(8)}} className="chart-column-value"></div>
                </div>
                    8<span style={{fontSize:"10px"}}>+</span>
            </div>
            </div>);
        };
    
}

function getCountByMana(manaCost) {
    let sum = 0
    _.each(this.props.deckList, (card) => {
        
        _.eq(manaCost, 8) && _.gt(card.cost, 8) ? sum+=card.count : null ;
        _.eq(manaCost, card.cost) ? sum+=card.count : null ;
    }) 
    return sum;
}

function calculateColumnPercentageValue(manaCost) {
    const cardsTotal = _.sumBy(this.props.deckList, (value) => value.count);
    const cardsCountsByMana = [];

    for(let i = 0 ; i <= 8 ; i++) {
        cardsCountsByMana.push( this.getCountByMana(i));
    }

    const mostCount = _.max(cardsCountsByMana);
    const percentageValue = (cardsCountsByMana[manaCost] * 100) / mostCount;

    if(_.eq(mostCount, 0)) return '0%';
    return `${percentageValue}%`;

}

export default ManaCurve;