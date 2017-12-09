export const GET_ALL_COLLECTION = "get_all_collection";
import _ from 'lodash';

export default function(state = [], action) 
{
    switch(action.type) {
        case GET_ALL_COLLECTION:

            const collection = _.mapKeys(action.payload.data['Basic'], (value, key) => {
                return value.dbfId;
            });
            
            // for(const prop in action.payload.data) {
            //     console.log(prop);
            // }

            return collection;
        default:
            return state;
    }
}
