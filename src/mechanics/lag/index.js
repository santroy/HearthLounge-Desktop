
import { cardTextMechanicsRegex } from './regex/mechanicRegex';
import { cardTargetRegex } from './regex/targetRegex';
import _ from 'lodash';

const manaCurve = {
    0: 1.65,
    1: 1.25,
    2: 1.00,
    3: 0.95,
    4: 0.95,
    5: 0.95,
    6: 1.00,
    7: 1.00,
    8: 1.00,
    9: 0.95,
    10: 0.95,
    12: 0.95,
    20: 0.95
}

const cardTarget = {
    any: { multiplier: 1 },
    enemy: { multiplier: 1.2 },
    friendly: { multiplier: 1.2 },
    character: { multiplier: 1.1 },
    characters: { multiplier: 0.9 },
    hero: { multiplier: 0.8 },
    minion: { multiplier: 1.1 },
    minions: { multiplier: 1.2 },
    all: { multiplier: 1.2 },
    randomly: { multiplier: 0.8 },
    your: { multiplier: 1 },
    //this: { multiplier: 70, value: 1 },
}


const mechanics = {
    adapt: { name: "Adapt", multiplier: 150, value: 1 },
    battlecry: { name: "Battlecry", multiplier: 50, value: 1 },
    charge: { name: "Charge", multiplier: 200, value: 1 },
    combo: { name: "Combo", multiplier: 50, value: 1 },
    counter: { name: "Counter", multiplier: 200, value: 1 },
    deathrattle: { name: "Deathrattle", multiplier: 130, value: 1 },
    discover: { name: "Discover", multiplier: 150, value: 1 },
    divineShield: { name: "Divine Shield", multiplier: 100, value: 1 },
    enrage: { name: "Enrage", multiplier: 80, value: 1 },
    freeze: { name: "Freeze", multiplier: 50, value: 1 },
    immune: { name: "Immune", multiplier: 90, value: 1 },
    inspire: { name: "Inspire", multiplier: 120, value: 1 },
    lifesteal: { name: "Lifesteal", multiplier: 110, value: 1 },
    megaWindfury: { name: "Mega Windfury", multiplier: 200, value: 1 },
    overload: { name: "Overload", multiplier: 30, value: 1 },
    poisonous: { name: "Poisonous", multiplier: 150, value: 1 },
    quest: { name: "Quest", multiplier: 200, value: 1 },
    secret: { name: "Secret", multiplier: 100, value: 1 },
    silence: { name: "Silence", multiplier: 80, value: 1 },
    stealth: { name: "Stealth", multiplier: 80, value: 1 },
    spellDamage: { name: "Spell Damage", multiplier: 60, value: 1 },
    taunt: { name: "Taunt", multiplier: 100, value: 1 },
    windfury: { name: "Windfury", multiplier: 90, value: 1 }
}

const textMechanics = {
    cardDrawSingle: { multiplier: 100, value: 1 },
    cardDrawNumber: { multiplier: 100, value: 1 },

    castSpell: { multiplier: 50, value: 1 },

    chooseOne: { multiplier: 50, value: 1 },

    copy: { multiplier: 200, value: 1 },

    dealDamage: { multiplier: 70, value: 1 },
    dealDamageEqual: { multiplier: 140, value: 1 },
    dealDamageRandom: { multiplier: 60, value: 1, value2: 1},
    dealDamageRaise: { multiplier: 210, value: 1 },

    destroy: { multiplier: 250, value: 1 },
    destroyNumber: { multiplier: 250, value: 1 },

    disableHeroPower: { multiplier: 100, value: 1 },

    discardSingle: { multiplier: -100, value: 1 },
    discardTwo: { multiplier: -100, value: 2 },
    discardNumber: { multiplier: -100, value: 1 },
    discardHand: { multiplier: -300, value: 1 },

    enchantDouble: { multiplier: 100, value: 1 },
    enchantAttack: { multiplier: 70, value: 1 },
    enchantHealth: { multiplier: 90, value: 1 },

    elusive: { multiplier: 130, value: 1 },

    equip: { multiplier: 60, value: 1 },

    forgetful: { multiplier: -100, value: 1 },

    gainArmor: { multiplier: 70, value: 1 },
    gainArmorNumber: { multiplier: 70, value: 1 },
    gainArmorMuch: { multiplier: 140, value: 1 },
    gainArmorEqual: { multiplier: 140, value: 1 },

    generate: { multiplier: 250, value: 1 },

    incrementAttributeDouble: { multiplier: 80, value: 1, value2: 1 },
    incrementAttributeAttack: { multiplier: 70, value: 1 },
    incrementAttributeHealth: { multiplier: 90, value: 1 },
    incrementAttributeDurability: { multiplier: 90, value: 1 },
    incrementAttributeMana: { multiplier: 70, value: 1 },

    joust: { multiplier: 80, value: 1 },

    mindControlEffect: { multiplier: 130, value: 1 },

    modifyCostLess: { multiplier: 100, value: 1 },
    modifyCostMore: { multiplier: 100, value: 1 },

    multiplyAttribute: { multiplier: 130, value: 1 },

    noDurabilityLoss: { multiplier: 120, value: 1 },

    //permanent: { multiplier: 70, value: 1 },

    putIntoBattlefield: { multiplier: 150, value: 1 },

    putIntoHand: { multiplier: 150, value: 1 },
    

    reduce: { multiplier: 170, value: 1 },

    refreshMana: { multiplier: 250, value: 1 },

    removeFromDeck: { multiplier: 100, value: 1 },

    replace: { multiplier: 250, value: 1 },

    restoreHealth: { multiplier: 90, value: 1 },

    return: { multiplier: 100, value: 1 },

    setAttributeHealth: { multiplier: 210, value: 1 },
    setAttributeAttack: { multiplier: 180, value: 1 },

    shuffleIntoDeck: { multiplier: 250, value: 1 },

    spendMana: { multiplier: 200, value: 1 },

    summonMinionDouble: { multiplier: 80, value: 1, value2: 1 },
    summonMinionCost: { multiplier: 100, value: 1 },
    summonMinionCopy: { multiplier: 150, value: 1 },

    transformDouble: { multiplier: 80, value: 1, value2: 1 },
    transformMore: { multiplier: 150, value: 1 },
    transformLess: { multiplier: 150, value: 1 },

    transformInHand: { multiplier: 150, value: 1 },

    unlimitedAttacks: { multiplier: 200, value: 1 }
}

const mechanicsTypes = {
    //oncontrol
    areaOfEffect: { multiplier: 70, value: 1 },
    inHandEffect: { multiplier: 70, value: 1 },
    onDiscardEffect: { multiplier: 70, value: 1 },
    onDrawEffect: { multiplier: 70, value: 1 },
    onGoingEffect: { multiplier: 70, value: 1 },
    positionalEffect: { multiplier: 70, value: 1 },
    randomEffect: { multiplier: 70, value: 1 },
    removal: { multiplier: 70, value: 1 },
    triggeredEffect: { multiplier: 70, value: 1 }
}

export default function appraiseCardValue(collection, card) {

    let cardValues = {};
    const cardTargets = {};    

    let cardScore = 0;

    
    // getting card values from text

    _.each(cardTextMechanicsRegex, (regex, regexName) => {

        if(regex.test(card.text)) {
            cardValues[regexName] = _.cloneDeep(textMechanics[regexName]);
            regex.exec(card.text)[1] ? cardValues[regexName].value = Number(regex.exec(card.text)[1]) : null;
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
    _.each(cardTargetRegex, (regex, regexName) => {

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
        cardScore+= value.multiplier * value.value;
    });

    console.log(cardValues, cardTargets);

    switch(card.type) {
        case "Weapon": return  Math.round(( ((card.durability * 60 ) + (card.attack * 70) + cardScore ) / (card.cost + 1) * (manaCurve[card.cost]))* 0.4).toFixed(0);
        case "Spell": {
        
            return Math.round( cardScore / ( (card.cost + 1)  * (manaCurve[card.cost])).toFixed(0));
        }
        case "Minion": return Math.round(( cardScore + ( card.attack * 35 ) + (card.health * 40) / (card.cost + 1) * (manaCurve[card.cost])) * 0.2).toFixed(0);
        default: return 0;
    }

};

