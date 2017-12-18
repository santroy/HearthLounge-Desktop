import _ from 'lodash';

export const CREATOR_SEARCH_FILTER = 'card_term_filter';

const initialState = {
    term: '',
    hero: { name: "Mage", id: 637 },
    format: { name: "Standard", id: 2 },
    manaCrystals : { 
                    0: { active: false, value: "0" },
                    1: { active: false, value: "1" },
                    2: { active: false, value: "2" },
                    3: { active: false, value: "3" },
                    4: { active: false, value: "4" },
                    5: { active: false, value: "5" },
                    6: { active: false, value: "6" },
                    7: { active: false, value: "7" },
                    8: { active: false, value: "8" },
                    9: { active: false, value: "9" },
                   },
    expansions: []
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

