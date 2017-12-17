import _ from 'lodash';

// deck = Array or Object of card objects
const buildDeck = (deck, hero, format) => {
    
    const formatedDeck = [];

    _.each(deck, (card) => {
        formatedDeck.push( [ Number(card.dbfId) , Number(card.count) ] );
    }); 

    return {
        cards: formatedDeck,
        heroes: [Number(hero.id)],
        format
    }
} 

export default buildDeck;