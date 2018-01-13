import * as actions from '../index';
import { CLEAR_CURRENT_DECK, GET_CURRENT_DECK_DECODED, DECREASE_CARD_FROM_DECK, INCREASE_CARD_FROM_DECK } from '../../../reducers/decktracker.reducers/CurrentDeck';
import { CLEAR_LOGS, FETCH_LOGS } from '../../../reducers/decktracker.reducers/Logs';
import { DECK_TRACKER_BUTTON_STATE } from '../../../reducers/decktracker.reducers/DeckTrackerPanel';
import { HEARTHSTONE_INSTALLED } from '../../../reducers/decktracker.reducers/DTErrors';
import lowerCase from 'lodash/lowerCase';

describe('#collectLogs', () =>{
  const testActions = (action, type, key, state) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      const expectedAction = {
        type: type,
        [key]: state
      };

      expect(action(state)).toEqual(expectedAction);
    })
  };

  testActions(actions.collectLogs, FETCH_LOGS, 'payload', {});
});

describe('#clearLogs', () =>{
    const testActions = (action, type, key) =>{
      test(`should create an action to ${lowerCase(type)}`, () =>{
        const expectedAction = {
          type: type,
        };
  
        expect(action(type)).toEqual(expectedAction);
      })
    };
  
    testActions(actions.clearLogs, CLEAR_LOGS, 'payload', {});
  });

describe('#toggleTrackButtonState', () =>{
    const testActions = (action, type, key) =>{
      test(`should create an action to ${lowerCase(type)}`, () =>{
        const expectedAction = {
          type: type,
        };
  
        expect(action(key)).toBeInstanceOf(Object);
      })
    };
  
    testActions(actions.toggleTrackButtonState, DECK_TRACKER_BUTTON_STATE, 'payload');
  });

  describe('#getCurrentDeck', () =>{
    const testActions = (action, type, key, state) =>{
      test(`should create an action to ${lowerCase(type)}`, () =>{
        const expectedAction = {
          type: type,
          [key]: state
        };
  
        expect(action(state)).toEqual(expectedAction);
      })
    };
  
    testActions(actions.getCurrentDeck, GET_CURRENT_DECK_DECODED, 'payload', undefined);
  });

  describe('#setHearthStoneInstalled', () =>{
    const testActions = (action, type, key) =>{
      test(`should create an action to ${lowerCase(type)}`, () =>{
        const expectedAction = {
          type: type,

        };
  
        expect(action(key)).toBeInstanceOf(Object);
      })
    };
  
    testActions(actions.setHearthStoneInstalled, HEARTHSTONE_INSTALLED, 'payload');
  });
  