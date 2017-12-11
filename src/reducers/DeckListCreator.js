import _ from 'lodash';

export default function(state = [], action) 
{
    switch(action.type) {

        case 'ADD_CARD_TO_DECK_LIST':

        console.log(state);
            if(!action.payload.count) {
                action.payload.count = 1;
                //return {...state, [action.payload.dbfId] : action.payload};
                
                return [...state, action.payload];
            }    

            if(action.payload.count < 2 && action.payload.rarity != "Legendary") {
                action.payload.count++;
            }

            //return {...state, [action.payload.dbfId] : action.payload};
            return [...state, action.payload];
            

        case 'DELETE_CARD_FROM_DECK_LIST':
            
            console.log(action.payload);
            if(action.payload.count >= 2) {
                action.payload.count--;
                return {...state, [action.payload.dbfId] : action.payload};

            } else 

            {
                action.payload.count = 0;
                return _.omit(state, action.payload.dbfId);
        
            }
            

        default:
            return state;
    }
}

function sortState(a,b) {

}