const initialState = {
    hsInstalled: true,
    hsConsole: true
}

export const HEARTHSTONE_INSTALLED = "hearthstone_installed";

export default function(state = initialState, action) 
{

    switch(action.type) {
        case HEARTHSTONE_INSTALLED:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
