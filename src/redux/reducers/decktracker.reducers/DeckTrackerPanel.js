const initialState = {
    luancherTrackerButton : { value: false }
}

export const DECK_TRACKER_BUTTON_STATE = "deck_tracker_button_state";

export default function(state = initialState, action) 
{
    switch(action.type) {
        case DECK_TRACKER_BUTTON_STATE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
