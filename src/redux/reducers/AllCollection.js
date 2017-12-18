export const GET_ALL_COLLECTION = "get_all_collection";
import _ from 'lodash';
import { EXCLUDED_CARD_SETS } from '../../globals/General';

export default function(state = [], action) 
{
    switch(action.type) {
        case GET_ALL_COLLECTION:
        
            let collectionArr = [];

            for(const key in action.payload.data) {
                if(!(_.includes( EXCLUDED_CARD_SETS, key )))
                {
                    for(const k in action.payload.data[key]) {
                        collectionArr.push(action.payload.data[key][k]);
                    }
                }

            }
            
            collectionArr.splice(0,9);

            const collection = _.mapKeys(collectionArr, (value, key) => {
                return value.dbfId;
            });
            return collection;
        default:
            return state;
    }
}