import axios from 'axios';
import { FETCH_LOGS, CLEAR_LOGS } from '../reducers/Logs';
import { GET_ALL_COLLECTION } from '../reducers/AllCollection';
import { GET_GAME_INFO } from '../reducers/GameInfo';

const API_URL = 'https://omgvamp-hearthstone-v1.p.mashape.com/';
const API_KEY = 'yxJgRqkjtrmsh9tZZnpXltWK1r15p1UbfmKjsnyCxiqZUZU0a1';

export function selectFeatureMenu(componentName) {
    return {
        type: componentName
    }
}

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

export function getAllCollection() {
    const instance = axios.create({
        method: 'get',
        baseURL: `${API_URL}/cards?collectible=1`,
        headers: {'X-Mashape-Key': API_KEY,
                  'Accept' : 'application/json'
    }
      });

      const request = instance.request();
          return {
              type: GET_ALL_COLLECTION,
              payload: request
        };
}

export function getGameInfo() {
    const instance = axios.create({
        method: 'get',
        baseURL: `${API_URL}/info`,
        headers: {'X-Mashape-Key': API_KEY,
                  'Accept' : 'application/json'
    }
      });

      const request = instance.request();
          return {
              type: GET_GAME_INFO,
              payload: request
        };
}

export function clearCurrentDeck() {
    return {
        type: 'CLEAR_CURRENT_DECK'
    }
}

export function getCurrentDeck(event, deck) {
    return {
        type: 'GET_CURRENT_DECK',
        payload: deck
    }
}