export const GET_ALL_COLLECTION = "get_all_collection";
import _ from 'lodash';

export default function(state = [], action) 
{
    switch(action.type) {
        case GET_ALL_COLLECTION:

            let collectionArr = [];

            for(const key in action.payload.data) {
                if(!(_.includes( excludedSet, key )))
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


const excludedSet = ["Hero Skins", 
                    "Tavern Brawl", 
                    "Debug", 
                    "System", 
                    "Credits", 
                    "Missions", 
                    "Promo"];