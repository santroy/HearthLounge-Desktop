import { combineReducers } from 'redux';
import SelectFeatureMenu from './SelectFeatureMenu';
import Logs from './Logs';
import trackButton from './ButtonDeckTracker';
import AllCollection from './AllCollection';
import FoundCollection from './FoundCollection';
import DeckListCreator from './DeckListCreator';
import GameInfo from './GameInfo';

const rootReducer = combineReducers({
    GameInfo,
    DeckListCreator,
    FoundCollection,
    AllCollection,
    trackButton,
    logs: Logs,
    SelectFeatureMenu
});

export default rootReducer;