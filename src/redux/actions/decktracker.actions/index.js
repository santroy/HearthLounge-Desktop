import { CLEAR_CURRENT_DECK, GET_CURRENT_DECK_DECODED, DECREASE_CARD_FROM_DECK, INCREASE_CARD_FROM_DECK } from '../../reducers/decktracker.reducers/CurrentDeck';
import { CLEAR_LOGS, FETCH_LOGS } from '../../reducers/decktracker.reducers/Logs';
import { DECK_TRACKER_BUTTON_STATE } from '../../reducers/decktracker.reducers/DeckTrackerPanel';
import { HEARTHSTONE_INSTALLED } from '../../reducers/decktracker.reducers/DTErrors';

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

export function toggleTrackButtonState(buttonState) {
    return {
        type: DECK_TRACKER_BUTTON_STATE,
        payload: { luancherTrackerButton : { value : buttonState } }
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

    const newDeckList = JSON.parse(JSON.stringify(deckList));
    
    const cardIndex = _.findIndex(newDeckList, (card) => {
            return card[0] == dbfId;
        });
    
    newDeckList[cardIndex][1]--;

    return {
        type: DECREASE_CARD_FROM_DECK,
        payload: newDeckList
    }
}

export function increaseCardFromCurrentDeck(deckList, dbfId) {

    const newDeckList = JSON.parse(JSON.stringify(deckList));
    
    const cardIndex = _.findIndex(newDeckList, (card) => {
            return card[0] == dbfId;
        });
    
        newDeckList[cardIndex][1]++;
    
        return {
            type: INCREASE_CARD_FROM_DECK,
            payload: newDeckList
        }
    }


export function setHearthStoneInstalled(statement) {
    return {
        type: HEARTHSTONE_INSTALLED,
        payload: { hsInstalled: statement }
    }
}