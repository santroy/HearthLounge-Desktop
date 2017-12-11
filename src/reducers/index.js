import { combineReducers } from 'redux';
import SelectFeatureMenu from './SelectFeatureMenu';
import Logs from './Logs';
import trackButton from './ButtonDeckTracker';
import AllCollection from './AllCollection';
import FoundCollection from './FoundCollection';
import DeckListCreator from './DeckListCreator';

const rootReducer = combineReducers({
    DeckListCreator,
    FoundCollection,
    AllCollection,
    trackButton,
    logs: Logs,
    SelectFeatureMenu
});

export default rootReducer;