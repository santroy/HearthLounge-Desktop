import { encode } from 'deckstrings';

const encodeDeck = (deck) => {
    if(!deck) throw "Deck cannot be empty!";
    return encode(deck);
} 

export default encodeDeck;