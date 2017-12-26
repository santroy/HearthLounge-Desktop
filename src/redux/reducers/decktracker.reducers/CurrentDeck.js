import _ from 'lodash';
import { encode, decode } from 'deckstrings';

export const GET_CURRENT_DECK_DECODED = "get_current_deck_decoded";
export const CLEAR_CURRENT_DECK = "clear_current_deck";
export const DECREASE_CARD_FROM_DECK = "decrease_card_from_deck";
export const INCREASE_CARD_FROM_DECK = "increase_card_from_deck";

const initialState = {
    name: null,
    deck: {}
}

export default function(state = initialState , action) 
{   
    switch(action.type) {
        case GET_CURRENT_DECK_DECODED:
            state = initialState;
            return Object.assign({}, state, { name: action.payload.data.name, deck: decodeDeck(action.payload.data.deckString) });
        case CLEAR_CURRENT_DECK:
            state = initialState;
            return state;
        case INCREASE_CARD_FROM_DECK:
        case DECREASE_CARD_FROM_DECK:
            return Object.assign({}, state, { deck: { cards: action.payload, format: state.deck.format, heroes: state.deck.heroes  } });
        default:
            return state;
    }
}

function decodeDeck(deck) {
    return decode(deck);
}

