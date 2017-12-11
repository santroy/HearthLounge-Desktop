import _ from 'lodash';

export const CREATOR_SEARCH_FILTER = 'card_term_filter';

const initialState = {
    term: '',
    hero: { id: 637, name: "Mage" },
    mode: 'standard'
}

export default function(state = initialState, action) 
{   
    switch(action.type) {
        
        case CREATOR_SEARCH_FILTER:
            console.log(action.payload);
            console.log(Object.assign({}, state, action.payload));
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
