import { CLEAR_LAG_DECK_LIST, ADD_TO_LAG_DECK_LIST, DELETE_FROM_LAG_DECK_LIST } from "../../reducers/lag.reducers/LAGDeckList";
import { SELECT_LAG_HERO } from '../../reducers/lag.reducers/LAGHero';

export function addToLagDeckList(card) {

    return {
        type: ADD_TO_LAG_DECK_LIST,
        payload: card
    }
}

export function deleteFromLagDeckList(data) {
    return {
        type: DELETE_FROM_LAG_DECK_LIST,
        payload: data
    }
}

export function clearLagDeckList(card) {
    return {
        type: CLEAR_LAG_DECK_LIST,
    }
}

export function selectHero(data) {
    return {
        type: SELECT_LAG_HERO,
        payload: data
    }
}

