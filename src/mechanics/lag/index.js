import { mechanics, textAbilities } from './LAGCardValues';
import { textAbilitiesRegex } from './regex/AbilitiesRegex';
import _ from 'lodash';

export default function appraiseCardValue(collection, card) {

    let cardValues = {};
    let cardScore = 0;

    
    // getting card values from text

    _.each(textAbilitiesRegex, (regex, regexName) => {

        if(regex.test(card.text)) {
            cardValues[regexName] = _.cloneDeep(textAbilities[regexName]);
            regex.exec(card.text)[1] ? cardValues[regexName].value = Number(regex.exec(card.text)[1]) : null;
            regex.exec(card.text)[2] ? cardValues[regexName].value2 = Number(regex.exec(card.text)[2]) : null;
        }

    });

    // getting card values from base mechanic

    if(!_.isEmpty(card.mechanics)) {

        _.each(mechanics, (mechanic, mechanicPropName) => {

            const hasMechanic = _.some(card.mechanics, { 'name' : mechanic.name });
            
            hasMechanic ? cardValues[mechanicPropName] = mechanic : null;

        }); 

    }

    // handle choose one 
    if(!_.isEmpty(cardValues.chooseOne)) {
        let max = _.sortBy(cardValues, [function(o) { return -(o.multiplier * o.value); }]);
        cardValues = { bestChooseOne : max.shift() }
    }


    // sumup all values 
    _.each(cardValues, (value, key) => {
        if(value.value2) {
            cardScore+= value.multiplier * ((value.value + value.value2)/2);
        } else cardScore+= value.multiplier * value.value;
    });

    const manaCurve = computeManaCurveMultipliers(collection, card.cost);
    const instantCast = 2.2;

    console.log(cardValues);

    let cannotAttack = !_.isEmpty(cardValues.cannotAttack) ? 0.1 : 1;

    switch(card.type) {

        case "Weapon": {
            return Math.round( ( ( ((  (cardScore + ( card.attack * 50 ) + (card.durability * 35)) ) / ( card.cost + 1 )) ) * manaCurve )).toFixed(0);

        }
        case "Spell": {

            return Math.round( ( ( (( instantCast * cardScore ) ) / ( card.cost + 1 )) ) * manaCurve ).toFixed(0);
        }
        case "Minion": {
            return Math.round( ( ( (( ( (card.attack == 0 ? 0.5 : 1 * cardScore) + ( card.attack * statsValue(card.cost, 30)) + (card.health * statsValue(card.cost, 40))) ) / ( card.cost + 1 )) ) * manaCurve ) * cannotAttack ).toFixed(0);
        }
        case "Hero": {
            return Math.round( (( (cardScore * 10 / ( card.cost + 1 )) ) * manaCurve )).toFixed(0);
        }
        default: return 0;
    }

};

function statsValue(cost, value) {
    const costValues = { 0: 5, 1: 3, 2: 1.4, 3: 1.1, 4: 1, 5: 1.1, 6: 1.0, 7: 1, 8: 1.2, 9: 1.6, 10: 1.8 };

    if(cost > 10 ) {
        return value;
    }

    return Math.round(value / costValues[cost]);
}

function computeManaCurveMultipliers(collection, cardCost) {

    const manaCurveBalancedArchetype = { 0: 0, 1: 2, 2: 5, 3: 6, 4: 7, 5: 5, 6: 3, 7: 2 };
    const manaCurveCurrentCounts = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };

    _.each(collection, (card) => {
        if(card.cost >= 7) {
            manaCurveCurrentCounts['7'] += card.count;
        } else {
            manaCurveCurrentCounts[card.cost] += card.count;
        }
    });

    const manaCurveMultipliers = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    
    _.each(manaCurveBalancedArchetype, (manaValue, manaKey) => {

        const currentManaCrystal = manaValue - manaCurveCurrentCounts[manaKey];

        if(currentManaCrystal > 0) {

             manaCurveMultipliers[manaKey] = (1 + Number((((currentManaCrystal) / (30 - collection.length - 1)) ).toFixed(3)));

        } else {
            manaCurveMultipliers[manaKey] = (1 - Number(((Math.abs(currentManaCrystal) / (30 - collection.length - 1)) ).toFixed(3)));
        }

        manaCurveMultipliers[manaKey] < 0 ? manaCurveMultipliers[manaKey] = 0 : null;


    })

    return cardCost >= 7 ? manaCurveMultipliers['7'] : manaCurveMultipliers[cardCost];
}