

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


const cardTextValuesRegex = {
    deal: /.*deals? \$?(\d*) (?:extra|damage).*/i,
    dealsDamage: /.*(\bdeals damage\b).*/i,
    dealItsDamage: /.*(\bdeal its damage\b).*/i,
    dealThatMuchDamage: /.*(\bdeal that much damage\b).*/i,
    dealRandom: /.*(\bdeal random\b).*/i,

}

const cardTargetRegex = {
    enemy: /.*(\benemy\b).*/i,
    friendly: /.*(\bfriendly\b).*/i,
    character: /.*(\bcharacter\b).*/i,
    characters: /.*(\bcharacters\b).*/i,
    hero: /.*(\bhero\b).*/i,
    minion: /.*(\bminion\b).*/i,
    minions: /.*(\bminions\b).*/i,
    all: /.*(\ball\b).*/i,
    randomly: /.*(\brandomly\b).*/i,
    your: /.*(\byour\b).*/i,
    this: /.*(\bthis\b).*/i,
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


const mechanicsFromText = {
    deal: { multiplier: 70, value: 1 },
    dealsDamage: { multiplier: 70, value: 1 },
    dealThatMuchDamage: { multiplier: 70, value: 1 },
    dealItsDamage: { multiplier: 70, value: 1 },
    dealRandom: { multiplier: 70, value: 1 },

    give: { multiplier: 70, value: 1 },
    summon: { multiplier: 70, value: 1 },
    gain: { multiplier: 70, value: 1 },
    adjacent: { multiplier: 70, value: 1 },
    less: { multiplier: 70, value: 1 },
    more: { multiplier: 70, value: 1 },
    remove: { multiplier: 70, value: 1 },
    cast: { multiplier: 70, value: 1 },
    add: { multiplier: 70, value: 1 },
    destroy: { multiplier: 70, value: 1 },
    freeze: { multiplier: 70, value: 1 },
    draw: { multiplier: 70, value: 1 },
    control: { multiplier: 70, value: 1 },
    put: { multiplier: 70, value: 1 },
    start: { multiplier: 70, value: 1 },
    end: { multiplier: 70, value: 1 },
    swap: { multiplier: 70, value: 1 },
    restore: { multiplier: 70, value: 1 },
    copy: { multiplier: 70, value: 1 },
    set: { multiplier: 70, value: 1 },  
    double: { multiplier: 70, value: 1 },  
    transform: { multiplier: 70, value: 1 },  
    cantAttack: { multiplier: 70, value: 1 },  
    targetedSpells: { multiplier: 70, value: 1 },  
    random: { multiplier: 70, value: 1 },
    whomever: { multiplier: 70, value: 1 },   
    legendary: { multiplier: 70, value: 1 },   
    except: { multiplier: 70, value: 1 },       
    wrong: { multiplier: 70, value: 1 },
    reveal: { multiplier: 70, value: 1 }, 
    discard: { multiplier: 70, value: 1 }, 
    replace: { multiplier: 70, value: 1 }, 
    heal: { multiplier: 70, value: 1 }, 
    returned: { multiplier: 70, value: 1 }, 
    shuffle: { multiplier: 70, value: 1 }
}

export default function appraiseCardValue(collection, card) {

    const textValues = {};
    const cardTargets = {};    

    let baseCardValue = 0;

    
    // getting card values
    _.each(cardTextValuesRegex, (regex, regexName) => {
        if(regex.test(card.text)) {
            textValues[regexName] = _.cloneDeep(mechanicsFromText[regexName]);
            regex.exec(card.text)[1] ? textValues[regexName].value = regex.exec(card.text)[1] : null;
        }

    });

    // getting card targets
    _.each(cardTargetRegex, (regex, regexName) => {
        if(regex.test(card.text)) {
            cardTargets[regexName] = cardTarget[regexName];
        }

    });


    // sumup all values 

    _.each(textValues, (value, key) => {

        baseCardValue+= value.multiplier * value.value;

    });


    console.log(( (card.cost + 1)  * (manaCurve[card.cost])));

    return Math.round(baseCardValue / ( (card.cost + 1)  * (manaCurve[card.cost])).toFixed(0));
};

