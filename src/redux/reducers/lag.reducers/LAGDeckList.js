import _ from 'lodash';

export const ADD_TO_LAG_DECK_LIST = "add_to_lag_deck_list";
export const CLEAR_LAG_DECK_LIST = "clear_lag_deck_list";

export default function(state = [] , action) 
{   
    switch(action.type) {

        case ADD_TO_LAG_DECK_LIST:
            return [ ...state, action.payload ];
        case CLEAR_LAG_DECK_LIST:
            return state = [];
        default:
            return state;
    }
}
