import { CLEAR_CURRENT_DECK, GET_CURRENT_DECK_DECODED, DECREASE_CARD_FROM_DECK, INCREASE_CARD_FROM_DECK } from '../../reducers/decktracker.reducers/CurrentDeck';
import { CLEAR_LOGS, FETCH_LOGS } from '../../reducers/decktracker.reducers/Logs';

export function collectLogs(data) {
    return {
        type: FETCH_LOGS,
        payload: data
    }
}

export function clearLogs() {
    return {
        type: CLEAR_LOGS
    }
}

export function setTrackButton(buttonState) {
    return {
        type: 'BUTTON_STATE',
        payload: buttonState
    }
}

export function clearCurrentDeck() {
    return {
        type: CLEAR_CURRENT_DECK
    }
}

export function getCurrentDeck(event, deck) {
    return {
        type: GET_CURRENT_DECK_DECODED,
        payload: deck
    }
}

export function decreaseCardFromCurrentDeck(deckList, dbfId) {

    const cardIndex = _.findIndex(deckList.deck.cards, (card) => {
            return card[0] == dbfId;
        });
    
    deckList.deck.cards[cardIndex][1]--;

    return {
        type: DECREASE_CARD_FROM_DECK,
        payload: deckList.deck
    }
}

export function increaseCardFromCurrentDeck(deckList, dbfId) {
    
    const cardIndex = _.findIndex(deckList.deck.cards, (card) => {
            return card[0] == dbfId;
        });
    
        deckList.deck.cards[cardIndex][1]++;
    
        return {
            type: INCREASE_CARD_FROM_DECK,
            payload: deckList.deck
        }
    }