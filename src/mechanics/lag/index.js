
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
    10: 0.95
}

const cardTarget = {
    any: { multiplier: 70, value: 1 },
    enemy: { multiplier: 70, value: 1 },
    friendly: { multiplier: 70, value: 1 },
    character: { multiplier: 70, value: 1 },
    characters: { multiplier: 70, value: 1 },
    hero: { multiplier: 70, value: 1 },
    minion: { multiplier: 70, value: 1 },
    minions: { multiplier: 70, value: 1 },
    all: { multiplier: 70, value: 1 },
    randomly: { multiplier: 70, value: 1 },
    your: { multiplier: 70, value: 1 },
    this: { multiplier: 70, value: 1 },
}

const mechanics = {
    adapt: { name: "Adapt", multiplier: 70, value: 1 },
    battlecry: { name: "Battlecry", multiplier: 70, value: 1 },
    charge: { name: "Charge", multiplier: 70, value: 1 },
    chooseOne: { name: "Choose One", multiplier: 70, value: 1 },
    combo: { name: "Combo", multiplier: 70, value: 1 },
    counter: { name: "Counter", multiplier: 70, value: 1 },
    deathrattle: { name: "Deathrattle", multiplier: 70, value: 1 },
    discover: { name: "Discover", multiplier: 70, value: 1 },
    divineShield: { name: "Divine Shield", multiplier: 70, value: 1 },
    enrage: { name: "Enrage", multiplier: 70, value: 1 },
    freeze: { name: "Freeze", multiplier: 70, value: 1 },
    immune: { name: "Immune", multiplier: 70, value: 1 },
    inspire: { name: "Inspire", multiplier: 70, value: 1 },
    lifesteal: { name: "Lifesteal", multiplier: 70, value: 1 },
    megaWindfury: { name: "Mega Windfury", multiplier: 70, value: 1 },
    overload: { name: "Overload", multiplier: 70, value: 1 },
    poisonous: { name: "Poisonous", multiplier: 70, value: 1 },
    quest: { name: "Quest", multiplier: 70, value: 1 },
    secret: { name: "Secret", multiplier: 70, value: 1 },
    silence: { name: "Silence", multiplier: 70, value: 1 },
    stealth: { name: "Stealth", multiplier: 70, value: 1 },
    spellDamage: { name: "Spell Damage", multiplier: 70, value: 1 },
    taunt: { name: "Taunt", multiplier: 70, value: 1 },
    windfury: { name: "Windfury", multiplier: 70, value: 1 }
}

const textMechanics = {
    cardDraw: { multiplier: 70, value: 1 },
    castSpell: { multiplier: 70, value: 1 },
    copy: { multiplier: 70, value: 1 },
    dealDamage: { multiplier: 70, value: 1 },
    destroy: { multiplier: 70, value: 1 },
    disableHeroPower: { multiplier: 70, value: 1 },
    discard: { multiplier: 70, value: 1 },
    enchant: { multiplier: 70, value: 1 },
    elusive: { multiplier: 70, value: 1 },
    equip: { multiplier: 70, value: 1 },
    forgetful: { multiplier: 70, value: 1 },
    gainArmor: { multiplier: 70, value: 1 },
    generate: { multiplier: 70, value: 1 },
    incrementAttribute: { multiplier: 70, value: 1 },
    joust: { multiplier: 70, value: 1 },
    mindControlEffect: { multiplier: 70, value: 1 },
    modifyCost: { multiplier: 70, value: 1 },
    multiplyAttribute: { multiplier: 70, value: 1 },
    noDurabilityLoss: { multiplier: 70, value: 1 },
    permanent: { multiplier: 70, value: 1 },
    putIntoBattlefield: { multiplier: 70, value: 1 },
    putIntoHand: { multiplier: 70, value: 1 },
    refreshMana: { multiplier: 70, value: 1 },
    removeFromDeck: { multiplier: 70, value: 1 },
    replace: { multiplier: 70, value: 1 },
    restoreHealth: { multiplier: 70, value: 1 },
    return: { multiplier: 70, value: 1 },
    setAttribute: { multiplier: 70, value: 1 },
    shuffleIntoDeck: { multiplier: 70, value: 1 },
    spendMana: { multiplier: 70, value: 1 },
    summon: { multiplier: 70, value: 1 },
    transform: { multiplier: 70, value: 1 },
    transformInHand: { multiplier: 70, value: 1 },
    unlimitedAttacks: { multiplier: 70, value: 1 }
}

const mechanicsTypes = {
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

    const cardValues = {};
    const cardTargets = {};    

    let cardScore = 0;

    
    // getting card values from text

    _.each(cardTextMechanicsRegex, (regex, regexName) => {

        if(regex.test(card.text)) {
            cardValues[regexName] = _.cloneDeep(textMechanics[regexName]);
            regex.exec(card.text)[1] ? cardValues[regexName].value = regex.exec(card.text)[1] : null;
        }

    });

    // getting card values from base mechanic

    if(!_.isEmpty(card.mechanics)) {

        _.each(mechanics, (mechanic, mechanicPropName) => {

            const hasMechanic = _.some(card.mechanics, { 'name' : mechanic.name });
            
            hasMechanic ? cardValues[mechanicPropName] = mechanic : null;

        }); 

    }

    _.each(cardTextMechanicsRegex, (regex, regexName) => {

        if(regex.test(card.text)) {
            cardValues[regexName] = _.cloneDeep(textMechanics[regexName]);
            regex.exec(card.text)[1] ? cardValues[regexName].value = regex.exec(card.text)[1] : null;
        }

    });

    // getting card targets
    _.each(cardTargetRegex, (regex, regexName) => {
        if(regex.test(card.text)) {
            cardTargets[regexName] = cardTarget[regexName];
        }

    });


    // sumup all values 

    _.each(cardValues, (value, key) => {

        cardScore+= value.multiplier * value.value;

    });


    console.log(cardValues, cardTargets);

    return Math.round(cardScore / ( (card.cost + 1)  * (manaCurve[card.cost])).toFixed(0));
};

