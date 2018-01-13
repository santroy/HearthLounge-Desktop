import * as actions from '../index';
import { CLEAR_LAG_DECK_LIST, ADD_TO_LAG_DECK_LIST, DELETE_FROM_LAG_DECK_LIST } from "../../../reducers/lag.reducers/LAGDeckList";
import { SELECT_LAG_HERO } from '../../../reducers/lag.reducers/LAGHero';
import lowerCase from 'lodash/lowerCase';

describe('#addToLagDeckList', () =>{
  const testActions = (action, type, key, state) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      const expectedAction = {
        type: type,
        [key]: state
      };

      expect(action(state)).toEqual(expectedAction);
    })
  };

  testActions(actions.addToLagDeckList, ADD_TO_LAG_DECK_LIST, 'payload', {});
});

describe('#deleteFromLagDeckList', () =>{
  const testActions = (action, type, key, state) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      const expectedAction = {
        type: type,
        [key]: state
      };

      expect(action(state)).toEqual(expectedAction);
    })
  };

  testActions(actions.deleteFromLagDeckList, DELETE_FROM_LAG_DECK_LIST, 'payload', {});
});

describe('#selectHero', () =>{
  const testActions = (action, type, key, state) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      const expectedAction = {
        type: type,
        [key]: state
      };

      expect(action(state)).toEqual(expectedAction);
    })
  };

  testActions(actions.selectHero, SELECT_LAG_HERO, 'payload', {});
});

describe('#clearLagDeckList', () =>{
  const testActions = (action, type, key) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      const expectedAction = {
        type: type,
      };

      expect(action(type)).toEqual(expectedAction);
    })
  };

  testActions(actions.clearLagDeckList, CLEAR_LAG_DECK_LIST);
});