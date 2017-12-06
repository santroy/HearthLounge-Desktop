import { combineReducers } from 'redux';
import Ysera from './show_cards';
import SelectComponent from './select_component';
import ValueReducer from './value_reducer';


const rootReducer = combineReducers({
    ValueReducer,
    SelectComponent,
    Ysera
});

export default rootReducer;