import axios from 'axios';

export const SHOW_CARDS = 'show_cards';

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