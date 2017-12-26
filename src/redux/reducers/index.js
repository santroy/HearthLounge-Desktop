import { combineReducers } from 'redux';

import SelectFeatureMenu from './SelectFeatureMenu';
import Logs from './decktracker.reducers/Logs';
import DeckTrackerPanel from './decktracker.reducers/DeckTrackerPanel';
import AllCollection from './AllCollection';
import FoundCollection from './deckcreator.reducers/FoundCollection';
import DeckListCreator from './deckcreator.reducers/DeckListCreator';
import GameInfo from './GameInfo';
import CurrentDeck from './decktracker.reducers/CurrentDeck';
import CardBacks from './CardBacks';
import LAGDeckList from './lag.reducers/LAGDeckList';
import DTErrors from './decktracker.reducers/DTErrors';

const rootReducer = combineReducers({
    DTErrors,
    LAGDeckList,
    CardBacks,
    CurrentDeck,
    GameInfo,
    DeckListCreator,
    FoundCollection,
    AllCollection,
    DeckTrackerPanel,
    logs: Logs,
    SelectFeatureMenu
});

export default rootReducer;