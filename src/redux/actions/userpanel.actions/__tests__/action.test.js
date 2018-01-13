import * as actions from '../index';
import { SIGN_IN_USER, SIGN_OUT_USER } from '../../../reducers/User';
import lowerCase from 'lodash/lowerCase';

describe('#signInUser', () =>{
  const testActions = (action, type, key, state) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      const expectedAction = {
        type: type,
        [key]: state
      };

      expect(action(state)).toEqual(expectedAction);

    })
  };

  testActions(actions.signInUser, SIGN_IN_USER, 'payload', {});

});


describe('#signOutUser', () =>{
    const testActions = (action, type) =>{
      test(`should create an action to ${lowerCase(type)}`, () =>{
        const expectedAction = {
          type: type,
        };
  
        expect(action(type)).toEqual(expectedAction);
  
      })
    };
  
    testActions(actions.signOutUser, SIGN_OUT_USER);
    
  });
  
  