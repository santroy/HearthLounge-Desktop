export const SET_USER_STATE = "set_user_state";


import _ from 'lodash';

export default function(state = {}, action) 
{
    switch(action.type) {
        case SET_USER_STATE:
            return action.payload.data;
        default:
            return state;
    }
}


