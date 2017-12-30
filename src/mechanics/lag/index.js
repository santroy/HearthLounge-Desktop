
const cardTextValuesRegex = {
    deal: /.*deal \$?(.*) damage.*/i,
    enemy: /.*(\benemy\b).*/gi,
    friendly: /.*(\bfriendly\b).*/gi,
    character: /.*(\bcharacter\b).*/gi,
    characters: /.*(\bcharacters\b).*/gi,
    hero: /.*(\bhero\b).*/gi,
    minion: /.*(\bminion\b).*/gi,
    minions: /.*(\bminions\b).*/gi,
    all: /.*(\ball\b).*/gi,
    randomly: /.*(\brandomly\b).*/gi,
    your: /.*(\byour\b).*/gi,
    this: /.*(\bthis\b).*/gi,
    dealExtra: /.*(\bdeal\b).*/gi,
    dealsDamage: /.*(\bdeals damage\b).*/gi,
    dealItsDamage: /.*(\bdealItsDamage\b).*/gi,
    dealThatMuchDamage: /.*(\bdealThatMuchDamage\b).*/gi,
    dealItsDamage: /.*(\bdealIts\b).*/gi,
    dealRandom: /.*(\bthis\b).*/gi,
    dealItsDamage: /.*(\bthis\b).*/gi,

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
    deal: { multiplier: 70, value: 0 },
    dealsDamage: { multiplier: 70, value: 0 },
    dealItsDamage: { multiplier: 70, value: 0 },
    dealThatMuchDamage: { multiplier: 70, value: 0 },
    dealItsDamage: { multiplier: 70, value: 0 },
    dealRandom: { multiplier: 70, value: 0 },
    dealItsDamage: { multiplier: 70, value: 0 },

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

    const foundValues = {};
    
    let cardValue = 0;

    // index of multiplier * value / mana + 1

    _.each(cardTextValuesRegex, (value, name) => {

        if(value.test(card.text)) {

            const foundValues = {};
            foundValues[name] = mechanicsFromText[name];
            foundValues[name].value = value.exec(card.text)[1];
        
            card.lag = foundValues;            
        } 
    });

    _.each(card.lag, (v) => {
        cardValue += (v.value * v.multiplier);
    })

    cardValue = cardValue / (card.cost + 1);

    card.cardValue = Math.round(cardValue.toFixed(2));

    return card.cardValue;
};

