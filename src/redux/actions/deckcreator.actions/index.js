import { heroes } from "../../../globals/Heroes";
import { formats } from "../../../globals/Format";

import { ADD_CARD_TO_DECK_LIST, DELETE_CARD_FROM_DECK_LIST } from "../../reducers/deckcreator.reducers/DeckListCreator";
import { CREATOR_SEARCH_FILTER } from '../../reducers/deckcreator.reducers/FoundCollection';

export function matchCardTerm(data) {
    return { 
        type: CREATOR_SEARCH_FILTER,
        payload: { term: data }
     }
 }

 export function deleteCardFromDeckList(data) {
    return {
        type: DELETE_CARD_FROM_DECK_LIST,
        payload: data
    }
}

export function addCardToDeckList(data) {

    return {
        type: ADD_CARD_TO_DECK_LIST,
        payload: data
    }
}

export function searchFormat(data) {
    
    const formatFound = _.find(formats, (format) => format.name === data);

    return { 
        type: CREATOR_SEARCH_FILTER,
        payload: { format: formatFound }
    }
}

export function searchHero(data) {
    
    const heroFound = _.find(heroes, (value) => value.name === data);

    return { 
        type: CREATOR_SEARCH_FILTER,
        payload: { hero: heroFound }
        }
}

export function selectManaCrystal(crystals, crystal) {

    !crystal.active ? crystal.active = true : crystal.active = false;

    _.each(crystals, c => {
        if(c.active == true && c.value != crystal.value) c.active = false;
        if(c.value == crystal.value) c.active = crystal.active;
    } )

    return {
        type: CREATOR_SEARCH_FILTER,
        payload: { manaCrystals: crystals}
    }

}

export function setExpansion(expansion) {
    return {
        type: CREATOR_SEARCH_FILTER,
        payload: { expansion }
    }
}