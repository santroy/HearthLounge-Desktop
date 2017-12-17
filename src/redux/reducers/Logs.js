export const FETCH_LOGS = 'fetch_logs';
export const CLEAR_LOGS = 'clear_logs';

export default function(state = [], action) 
{
    switch(action.type) 
    {
        case CLEAR_LOGS:
            state = [];
            return state;
        case FETCH_LOGS: 
            return [ action.payload , ...state ];
        default: 
            return state;
    };

}
