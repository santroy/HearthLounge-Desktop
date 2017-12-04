import { combineReducers } from 'redux';
import Ysera from './show_cards';
import SelectComponent from './select_component'


const rootReducer = combineReducers({
    SelectComponent,
    Ysera
});

export default rootReducer;