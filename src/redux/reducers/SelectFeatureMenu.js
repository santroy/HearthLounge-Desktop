export const CREATE_DECK_COMPONENT = 'create_deck_component';
export const DECK_TRACKER_COMPONENT = 'deck_tracker_component';
export const LOUNGE_ARENA_GUIDER_COMPONENT = 'lounge_arena_guider_component';
export const WELCOME_COMPONENT = 'welcome_component';

export default function(state = null, action) {
    switch(action.type) {
        case WELCOME_COMPONENT:
            return action.type;
        case CREATE_DECK_COMPONENT:
            return action.type;
        case DECK_TRACKER_COMPONENT:
            return action.type;
        case LOUNGE_ARENA_GUIDER_COMPONENT:
            return action.type;
        default:
            return state;
    }
}