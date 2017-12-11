import _ from 'lodash';

export const CREATOR_SEARCH_FILTER = 'card_term_filter';

const initialState = {

    term: '',
    hero: 'Mage'

}

export default function(state = initialState, action) 
{   
    switch(action.type) {
        
        case CREATOR_SEARCH_FILTER:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
