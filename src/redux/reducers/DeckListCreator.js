import _ from 'lodash';

export default function(state = [], action) 
{
    switch(action.type) {

        case 'ADD_CARD_TO_DECK_LIST':


            const oldState = [...state];

            if( sumCards(state) < 30 ) 
            {
                if(!action.payload.count) {
                    action.payload.count = 1;
                    return _.sortBy([...state, action.payload], ['cost','name']);
                }

                if(action.payload.count < 2 && action.payload.rarity != "Legendary") {
                    action.payload.count++;
                    _.remove(oldState, (value) => value.dbfId == action.payload.dbfId);
                    return _.sortBy([...oldState, action.payload], ['cost','name']);
                }

                if((action.payload.count >= 2 || action.payload.rarity == "Legendary")) {
                    return state;
                }
            } return [...state];


        case 'DELETE_CARD_FROM_DECK_LIST':
            
            const oldStateD = [...state];

            if(action.payload.count >= 2) {
                action.payload.count--;
                _.remove(oldStateD, (value) => value.dbfId == action.payload.dbfId );
                return _.sortBy([...oldStateD, action.payload], ['cost','name']);
            }
            
            if(action.payload.count <= 1) {
                _.remove(oldStateD, (value) => value.dbfId == action.payload.dbfId );
                delete action.payload.count;
            }

            return oldStateD;
            

        default:
            return state;
    }
}

function sumCards(deck) {

   let x = _.sumBy(deck, (value) => value.count);
   return x;
}