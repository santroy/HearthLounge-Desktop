import { combineReducers } from 'redux';
import Ysera from './ShowCard';
import SelectFeatureMenu from './SelectFeatureMenu';
import DrewCards from './DrewCards';
import trackButton from './ButtonDeckTracker';

const rootReducer = combineReducers({
    trackButton,
    DrewCards,
    SelectFeatureMenu,
    Ysera
});

export default rootReducer;