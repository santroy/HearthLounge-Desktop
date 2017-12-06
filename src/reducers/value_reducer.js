export default function(state = '', action) 
{
    switch(action.type) 
    {
        case 'VALUE_ACTION': 
            return `${action.payload}`;
        default: 
            return state;
    };

}
