import { combineReducers } from 'redux';
import Ysera from './ShowCard';
import SelectFeatureMenu from './SelectFeatureMenu';
import Logs from './Logs';
import trackButton from './ButtonDeckTracker';

const rootReducer = combineReducers({
    trackButton,
    logs: Logs,
    SelectFeatureMenu,
    Ysera
});

export default rootReducer;