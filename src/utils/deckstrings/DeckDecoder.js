import { decode } from 'deckstrings';

const decodeDeck = (encodedDeck) => {
    if(!encodedDeck) throw "DeckString cannot be empty!";
    return decode(encodedDeck);
} 

export default decodeDeck;