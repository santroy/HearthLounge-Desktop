import { SHOW_CARDS } from '../actions'

export default function(state = {}, action) {
    switch(action.type) {
        case SHOW_CARDS:
            console.log("Dostałem TO!", action.payload.data["0"]);
            return action.payload.data["0"];
        default:
            return state;
    }
}