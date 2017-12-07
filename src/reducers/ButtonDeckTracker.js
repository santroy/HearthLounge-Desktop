

export default function(state = { value: "off", text: "Turn on DeckTracker" }, action) 
{
    switch(action.type) {
        case 'BUTTON_STATE':
            return action.payload;
        default:
            return state;
    }
}
