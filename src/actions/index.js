import axios from 'axios';

import { SHOW_CARDS } from '../reducers/ShowCard';
import { TRACK_DREW_CARDS } from '../reducers/DrewCards';

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

export function collectDrewCards(data) {
    console.log('AC:', data);
    return {
        type: TRACK_DREW_CARDS,
        payload: data
    }
}
