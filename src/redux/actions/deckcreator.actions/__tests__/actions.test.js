import * as actions from '../index';
import { ADD_CARD_TO_DECK_LIST, DELETE_CARD_FROM_DECK_LIST, CLEAR_CREATOR_DECK_LIST } from "../../../reducers/deckcreator.reducers/DeckListCreator";
import { CREATOR_SEARCH_FILTER } from '../../../reducers/deckcreator.reducers/FoundCollection';
import lowerCase from 'lodash/lowerCase';

describe('#matchCardTerm', () =>{
  const testActions = (action, type, key, state) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      const expectedAction = {
        type: type,
        [key]: {term: state}
      };

      expect(action(state)).toEqual(expectedAction);
    })
  };

  testActions(actions.matchCardTerm, CREATOR_SEARCH_FILTER, 'payload', "");
});

describe('#deleteCardFromDeckList', () =>{
    const testActions = (action, type, key, state) =>{
      test(`should create an action to ${lowerCase(type)}`, () =>{
        const expectedAction = {
          type: type,
          [key]: state
        };
  
        expect(action(state)).toEqual(expectedAction);
      })
    };
  
    testActions(actions.deleteCardFromDeckList, DELETE_CARD_FROM_DECK_LIST, 'payload', {});
  });
  

  describe('#clearCreatorDeckList', () =>{
    const testActions = (action, type, key, state) =>{
      test(`should create an action to ${lowerCase(type)}`, () =>{
        const expectedAction = {
          type: type,
        };
  
        expect(action(state)).toEqual(expectedAction);
      })
    };
  
    testActions(actions.clearCreatorDeckList, CLEAR_CREATOR_DECK_LIST);
  });
  
  describe('#addCardToDeckList', () =>{
    const testActions = (action, type, key, state) =>{
      test(`should create an action to ${lowerCase(type)}`, () =>{
        const expectedAction = {
          type: type,
          [key]: state
        };
  
        expect(action(state)).toEqual(expectedAction);
      })
    };
  
    testActions(actions.addCardToDeckList, ADD_CARD_TO_DECK_LIST, 'payload', {});
  });

  describe('#searchFormat', () =>{
    const testActions = (action, type, key, state) =>{
      test(`should create an action to ${lowerCase(type)}`, () =>{
        const expectedAction = {
          type: type,
          [key]: { format: state }
        };
  
        expect(action(state)).toEqual(expectedAction);
      })
    };
  
    testActions(actions.searchFormat, CREATOR_SEARCH_FILTER, 'payload', undefined);

  });


  describe('#searchHero', () =>{
    const testActions = (action, type, key, state) =>{
      test(`should create an action to ${lowerCase(type)}`, () =>{
        const expectedAction = {
          type: type,
          [key]: { hero: state }
        };
  
        expect(action(state)).toEqual(expectedAction);
      })
    };
  
    testActions(actions.searchHero, CREATOR_SEARCH_FILTER, 'payload', undefined);

  });
