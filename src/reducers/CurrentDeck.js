import _ from 'lodash';
import { encode, decode } from 'deckstrings';


export default function(state = {} , action) 
{   
    
    switch(action.type) {
        
        case 'GET_CURRENT_DECK':
            return { name: action.payload.name, deck: decodeDeck(action.payload.deck) };
        case 'CLEAR_CURRENT_DECK':
            return state = {};
        default:
            return state;
    }
}

function decodeDeck(deck) {
    return decode(deck);
}

