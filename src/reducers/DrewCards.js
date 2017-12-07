export const TRACK_DREW_CARDS = 'track_drew_cards';

export default function(state = [], action) 
{
    switch(action.type) 
    {
        case TRACK_DREW_CARDS: 
            return [ action.payload , ...state ];
        default: 
            return state;
    };

}
