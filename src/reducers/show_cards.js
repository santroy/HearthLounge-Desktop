import { SHOW_CARDS } from '../actions'

export default function(state = {}, action) {
    switch(action.type) {
        case SHOW_CARDS:
            return action.payload.data["0"];
        default:
            return state;
    }
}