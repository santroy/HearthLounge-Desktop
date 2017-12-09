import axios from 'axios';

import { SHOW_CARDS } from '../reducers/ShowCard';
import { FETCH_LOGS, CLEAR_LOGS } from '../reducers/Logs';

const API_URL = 'https://omgvamp-hearthstone-v1.p.mashape.com/';
const API_KEY = 'yxJgRqkjtrmsh9tZZnpXltWK1r15p1UbfmKjsnyCxiqZUZU0a1';

export function getYsera() {
    const instance = axios.create({
        method: 'get',
        baseURL: `${API_URL}/cards/Ysera`,
        headers: {'X-Mashape-Key': API_KEY,
                  'Accept' : 'application/json'
    }
      });

    const request = instance.request();

    return {
        type: SHOW_CARDS,
        payload: request
    };
}

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