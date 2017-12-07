import { combineReducers } from 'redux';
import Ysera from './ShowCard';
import SelectFeatureMenu from './SelectFeatureMenu';
import DrewCards from './DrewCards';

const rootReducer = combineReducers({
    DrewCards,
    SelectFeatureMenu,
    Ysera
});

export default rootReducer;