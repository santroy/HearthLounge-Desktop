export const GET_CARD_BACKS = "get_card_backs";

import _ from 'lodash';

export default function(state = [], action) 
{
    switch(action.type) {
        case GET_CARD_BACKS:
            return action.payload.data;
        default:
            return state;
    }
}
