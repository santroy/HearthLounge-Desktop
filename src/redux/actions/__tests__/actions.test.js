import * as actions from '../index.js';
import { HOME_COMPONENT } from '../../reducers/SelectFeatureMenu';
import axios from 'axios';
import lowerCase from 'lodash/lowerCase';

import configureMockStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';
import moxios from 'moxios';

import { GET_ALL_COLLECTION } from '../../reducers/AllCollection';
import { GET_GAME_INFO } from '../../reducers/GameInfo';
import { GET_CARD_BACKS } from '../../reducers/CardBacks';

describe('#selectFeatureMenu', () =>{
  const testActions = (action, type, key, state) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      if(key && state !== undefined) {
        const expectedAction = {
          type: type,
        };
        expect(action(type)).toEqual(expectedAction);
      } else {
        const expectedAction = {
          type: type
        };
        expect(action(type)).toEqual(expectedAction);
      }
    })
  };

  testActions(actions.selectFeatureMenu, HOME_COMPONENT);
});



describe('All card collection', () => {

    const middlewares = [promiseMiddleware()];
    const mockStore = configureMockStore(middlewares);
  
    beforeEach(() => {
      moxios.install(actions.allCollectionInstance);
    });
    afterEach(() => {
      moxios.uninstall(actions.allCollectionInstance);
    });
    it('it dispatches GET_ALL_COLLECTION_FULFILLED and GET_ALL_COLLECTION_PENDING on fetch All Cards API Collection', () => {
      const payload = {
        collectionList: [] };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: payload,
        });
      });
      const expectedActions = [`${GET_ALL_COLLECTION}_PENDING`,`${GET_ALL_COLLECTION}_FULFILLED`];

      const store = mockStore({ collectionList: [] });
      
      return store.dispatch(actions.getAllCollection()).then(() => {
        
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        
        expect(actionTypes).toEqual(expectedActions);
      },
      );
    });
  });

  describe('Game Info collection', () => {

    const middlewares = [promiseMiddleware()];
    const mockStore = configureMockStore(middlewares);
  
    beforeEach(() => {
      moxios.install(actions.gameInfoInstance);
    });
    afterEach(() => {
      moxios.uninstall(actions.gameInfoInstance);
    });
    it('it dispatches GET_GAME_INFO_FULFILLED and GET_GAME_INFO_PENDING on fetch Get Game Info API Collection', () => {
      const payload = {
        collectionList: [] };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: payload,
        });
      });
      const expectedActions = [`${GET_GAME_INFO}_PENDING`,`${GET_GAME_INFO}_FULFILLED`];

      const store = mockStore({ collectionList: [] });
      
      return store.dispatch(actions.getGameInfo()).then(() => {
        
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        
        expect(actionTypes).toEqual(expectedActions);
      },
      );
    });
  });

  describe('Card Backs Collection', () => {

    const middlewares = [promiseMiddleware()];
    const mockStore = configureMockStore(middlewares);
  
    beforeEach(() => {
      moxios.install(actions.cardBacksInstance);
    });
    afterEach(() => {
      moxios.uninstall(actions.cardBacksInstance);
    });
    it('it dispatches GET_CARD_BACKS_FULFILLED and GET_CARD_BACKS_PENDING on fetch Card Backs API Collection', () => {
      const payload = {
        collectionList: [] };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: payload,
        });
      });
      const expectedActions = [`${GET_CARD_BACKS}_PENDING`,`${GET_CARD_BACKS}_FULFILLED`];

      const store = mockStore({ collectionList: [] });
      
      return store.dispatch(actions.getCardBacks()).then(() => {
        
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        
        expect(actionTypes).toEqual(expectedActions);
      },
      );
    });
  });