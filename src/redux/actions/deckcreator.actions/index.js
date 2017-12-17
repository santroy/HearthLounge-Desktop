import { CREATOR_SEARCH_FILTER } from '../../reducers/FoundCollection';
import { heroes } from "../../../globals/Heroes";
import { formats } from "../../../globals/Format";

export function matchCardTerm(data) {
    return { 
        type: CREATOR_SEARCH_FILTER,
        payload: { term: data }
     }
 }

 export function deleteCardFromDeckList(data) {
    return {
        type: 'DELETE_CARD_FROM_DECK_LIST',
        payload: data
    }
}

export function addCardToDeckList(data) {
    return {
        type: 'ADD_CARD_TO_DECK_LIST',
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
    
    const braveHeroObj = _.find(heroes, (value) => value.name === data);

    return { 
        type: CREATOR_SEARCH_FILTER,
        payload: { hero: braveHeroObj }
        }
}