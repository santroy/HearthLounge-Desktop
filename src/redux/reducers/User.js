export const SIGN_IN_USER = "sign_in_user";
export const SIGN_OUT_USER = "sign_out_user";

import _ from 'lodash';

export default function(state = {}, action) 
{
    switch(action.type) {
        case SIGN_IN_USER:
            return action.payload;
        case SIGN_OUT_USER:
            return state = {};
        default:
            return state;
    }
}


