import _ from 'lodash';
import { CLEAR_LAG_DECK_LIST } from './LAGDeckList';

export const SELECT_LAG_HERO = "select_lag_hero";

export default function(state = null , action) 
{   
    switch(action.type) {

        case SELECT_LAG_HERO:
            return action.payload;
        case CLEAR_LAG_DECK_LIST:
            return state = null;
        default:
            return state;
    }
    
}
