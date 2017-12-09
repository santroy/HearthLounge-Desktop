import { combineReducers } from 'redux';
import SelectFeatureMenu from './SelectFeatureMenu';
import Logs from './Logs';
import trackButton from './ButtonDeckTracker';
import AllCollection from './AllCollection';

const rootReducer = combineReducers({
    AllCollection,
    trackButton,
    logs: Logs,
    SelectFeatureMenu
});

export default rootReducer;