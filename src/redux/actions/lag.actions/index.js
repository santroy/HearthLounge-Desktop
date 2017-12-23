import { CLEAR_LAG_DECK_LIST, ADD_TO_LAG_DECK_LIST } from "../../reducers/lag.reducers/LAGDeckList"

export function addToLagDeckList(card) {
    return {
        type: ADD_TO_LAG_DECK_LIST,
        payload: card
    }
}

export function clearLagDeckList(card) {
    console.log("im here");
    return {
        type: CLEAR_LAG_DECK_LIST,
    }
}
