
import { cardTextMechanicsRegex } from './regex/mechanicRegex';
import { targetRegex } from './regex/targetRegex';
import { cardTarget, mechanics, textMechanics } from './LAGCardValues';
import _ from 'lodash';

export default function appraiseCardValue(collection, card) {

    let cardValues = {};
    const cardTargets = {};    
    let cardScore = 0;

    
    // getting card values from text

    _.each(cardTextMechanicsRegex, (regex, regexName) => {

        if(regex.test(card.text)) {
            cardValues[regexName] = _.cloneDeep(textMechanics[regexName]);
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

    // getting card targets
    _.each(targetRegex, (regex, regexName) => {

        if(regex.test(card.text)) {
            cardTargets[regexName] = cardTarget[regexName];
        }

    });

    // handle choose one 
    if(!_.isEmpty(cardValues.chooseOne)) {
        let max = _.sortBy(cardValues, [function(o) { return -(o.multiplier * o.value); }]);
        cardValues = { bestChooseOne : max.shift() }
    }


    // sumup all values 
    _.each(cardValues, (value, key) => {
        if(value.value2) {
            cardScore+= value.multiplier * (value.value + value.value2);
        } else cardScore+= value.multiplier * value.value;
    });

    const cardContext = determineCardContext(cardValues, cardTargets);
    const manaCurve = computeManaCurveMultipliers(collection, card.cost);
    const instantCast = 2.2;

    console.log(cardValues, cardTargets);

    switch(card.type) {

        case "Weapon": {
            return Math.round( ( ( (cardContext * (  (cardScore + ( card.attack * 50 ) + (card.durability * 35)) ) / ( card.cost + 1 )) ) * manaCurve )).toFixed(0);

        }
        case "Spell": {

            return Math.round( ( ( (cardContext * ( instantCast * cardScore ) ) / ( card.cost + 1 )) ) * manaCurve ).toFixed(0);
        }
        case "Minion": {
            return Math.round( ( ( (cardContext * ( (cardScore + ( card.attack * 30 ) + (card.health * 40)) ) / ( card.cost + 1 )) ) * manaCurve )).toFixed(0);
        }
        default: return 0;
    }

};

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


function determineCardContext(cardValues, cardTargets) {

    const negativeAllyCardTargets = ['your', 'friendly', 'himself', 'this'];
    const negativeAllyCardEffects =     [ 'dealDamage',
                                        'dealDamageEqual',
                                        'dealDamageRandom',
                                        'dealDamageRaise',
                                        'destroy',
                                        'destroyNumber',
                                        'discardSingle', 
                                        'discardTwo', 
                                        'discardNumber',
                                        'discardHand' ];

    let hasNegativeAllyCardTargets = false, hasNegativeAllyCardEffects = false;


    _.each(negativeAllyCardTargets, allyTarget => {
        if(cardTargets.hasOwnProperty(allyTarget)) hasNegativeAllyCardTargets = true;
    });

    _.each(negativeAllyCardEffects, allyEffect => {
        if(cardValues.hasOwnProperty(allyEffect)) hasNegativeAllyCardEffects = true;
    });
    
    
    if(hasNegativeAllyCardTargets && hasNegativeAllyCardEffects) {
        return 0.7;
    }

    const negativeEnemyCardTargets = ['enemy'];
    const negativeEnemyCardEffects =  [ 'transformLess',
                                    'enchantDouble',
                                    'enchantAttack',
                                    'enchantHealth',
                                    'generate',
                                    'incrementAttributeDouble',
                                    'incrementAttributeAttack',
                                    'incrementAttributeHealth',
                                    'incrementAttributeDurability',
                                    'incrementAttributeMana',
                                    'modifyCostLess',
                                    'multiplyAttribute',
                                    'putIntoBattlefield',
                                    'putIntoHand',
                                    'reduce',
                                    'restoreHealth' ];

    let hasNegativeEnemyCardTargets = false, hasNegativeEnemyCardEffects = false;

    _.each(negativeEnemyCardTargets, enemyTarget => {
        if(cardTargets.hasOwnProperty(enemyTarget)) hasNegativeEnemyCardTargets = true;
    });

    _.each(negativeEnemyCardEffects, enemyEffect => {
        if(cardValues.hasOwnProperty(enemyEffect)) hasNegativeEnemyCardEffects = true;
    });
    
    if(hasNegativeEnemyCardTargets && hasNegativeEnemyCardEffects ) {
        return 0.7;
    }

    return 1;


}