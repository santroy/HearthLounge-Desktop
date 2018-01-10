import _ from 'lodash';

export const ADD_CARD_TO_DECK_LIST = "add_card_to_deck_list";
export const DELETE_CARD_FROM_DECK_LIST = "delete_card_from_deck_list";
export const CLEAR_CREATOR_DECK_LIST = "clear_creator_deck_list";

export default function(state = [], action) 
{
    switch(action.type) {
        case ADD_CARD_TO_DECK_LIST:

            if( sumCards(state) < 30 ) 
            {

                const newCard = _.find(state, { dbfId: action.payload.dbfId });

                if(_.isEmpty(newCard)) {
                    action.payload.count = 1;
                    return _.sortBy([...state, action.payload], ['cost','name']);
                }

                if(newCard.count < 2 && newCard.rarity != "Legendary") {
                   newCard.count++;
                   return _.sortBy(state, ['cost','name']);
                }

                if((newCard.count >= 2 || newCard.rarity == "Legendary")) {
                    return state;
                }

            } return state;


        case DELETE_CARD_FROM_DECK_LIST:

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

        case CLEAR_CREATOR_DECK_LIST: 
            return state = [];
            
        
        default:
            return state;
    }
}

function sumCards(deck) {

   let deckListAmountCards = _.sumBy(deck, (value) => value.count);
   return deckListAmountCards;
}