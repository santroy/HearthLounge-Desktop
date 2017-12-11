export const GET_GAME_INFO = "get_game_info";

import _ from 'lodash';

export default function(state = [], action) 
{
    switch(action.type) {
        case GET_GAME_INFO:
            return action.payload;
        default:
            return state;
    }
}
