import _ from 'lodash';

export const ADD_TO_LAG_DECK_LIST = "add_to_lag_deck_list";
export const CLEAR_LAG_DECK_LIST = "clear_lag_deck_list";
export const DELETE_FROM_LAG_DECK_LIST = "delete_from_lag_deck_list";

export default function(state = [] , action) 
{   
    switch(action.type) {

        case ADD_TO_LAG_DECK_LIST:

        const newCard = _.find(state, { dbfId: action.payload.dbfId });

        if( sumCards(state) < 30 ) 
        {
            if(_.isEmpty(newCard)) {
                action.payload.count = 1;
                return _.sortBy([...state, action.payload], ['cost','name']);
            } else {
                newCard.count++;
                return _.sortBy(state, ['cost','name']);
            }

        } return state;

        case CLEAR_LAG_DECK_LIST:
            return state = [];

        case DELETE_FROM_LAG_DECK_LIST:

            if(action.payload.count >= 2) {
                action.payload.count--;
                return _.sortBy(state, ['cost','name']);
            }

            if(action.payload.count <= 1) {
                let deckListOmittedCard = [...state];
                _.remove(deckListOmittedCard, (value) => value.dbfId == action.payload.dbfId );
                delete action.payload.count;
                return deckListOmittedCard;
        }

        default:
            return state;
    }
    
}

function sumCards(deck) {

   let deckListAmountCards = _.sumBy(deck, (value) => value.count);
   return deckListAmountCards;
}
