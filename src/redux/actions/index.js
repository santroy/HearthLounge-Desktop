import axios from 'axios';
import { GET_ALL_COLLECTION } from '../reducers/AllCollection';
import { GET_GAME_INFO } from '../reducers/GameInfo';
import { GET_CARD_BACKS } from '../reducers/CardBacks';
import { HOME_COMPONENT } from '../reducers/SelectFeatureMenu';

const API_URL = 'https://omgvamp-hearthstone-v1.p.mashape.com/';
const API_KEY = 'yxJgRqkjtrmsh9tZZnpXltWK1r15p1UbfmKjsnyCxiqZUZU0a1';

export function selectFeatureMenu(componentName) {
    return {
        type: componentName
    }
}

export const allCollectionInstance = axios.create({
    method: 'get',
    baseURL: `${API_URL}/cards?collectible=1`,
    headers: {'X-Mashape-Key': API_KEY,
              'Accept' : 'application/json'
}
  });

export const gameInfoInstance = axios.create({
    method: 'get',
    baseURL: `${API_URL}/info`,
    headers: {'X-Mashape-Key': API_KEY,
              'Accept' : 'application/json'
}
  });

export const cardBacksInstance = axios.create({
    method: 'get',
    baseURL: `${API_URL}/cardbacks`,
    headers: {'X-Mashape-Key': API_KEY,
              'Accept' : 'application/json'
}
});

export function getAllCollection() {


      const request = allCollectionInstance.request();
          return {
              type: GET_ALL_COLLECTION,
              payload: request
        };
}

export function getGameInfo() {

      const request = gameInfoInstance.request();
          return {
              type: GET_GAME_INFO,
              payload: request
        };
}

export function getCardBacks() {

      const request = cardBacksInstance.request();
          return {
              type: GET_CARD_BACKS,
              payload: request
        };
}

export function goHome() {
    return {
        type: HOME_COMPONENT
    }
}