import axios from 'axios';
import { FETCH_LOGS, CLEAR_LOGS } from '../reducers/Logs';
import { GET_ALL_COLLECTION } from '../reducers/AllCollection';
import { GET_GAME_INFO } from '../reducers/GameInfo';
import { CREATOR_SEARCH_FILTER } from '../reducers/FoundCollection';

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


export function cardTermSearch(data) {
   return { 
       type: CREATOR_SEARCH_FILTER,
       payload: { term: data }
    }
}

export function heroSearch(data) {

    const braveHeroObj = _.find(heroObj, (value) => value.name === data);

    return { 
        type: CREATOR_SEARCH_FILTER,
        payload: { hero: braveHeroObj }
     }
 }

 export function addCardToDeckList(data) {
     return {
         type: 'ADD_CARD_TO_DECK_LIST',
         payload: data
     }
 }

 export function deleteCardFromDeckList(data) {
    return {
        type: 'DELETE_CARD_FROM_DECK_LIST',
        payload: data
    }
}

const heroObj = {
    priest : { name: "Priest", id: 813},
    warrior : { name: "Warrior", id: 7},
    warlock : { name: "Warlock", id: 963},
    mage : { name: "Mage", id: 637},
    druid : { name: "Druid", id: 274},
    hunter : { name: "Hunter", id: 31},
    shaman : { name: "Shaman", id: 1066},
    paladin : { name: "Paladin", id: 671},
    rogue : { name: "Rogue", id: 930},
}