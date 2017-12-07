import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, MemoryRouter} from 'react-router-dom'
import promise from 'redux-promise';
import rootReducers from './reducers';

import TitleBar from './components/TitleBar';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';
import BottomPanel from './components/BottomPanel';
import DeckCreator from './components/DeckCreator';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducers)}>
            <div>
                <TitleBar/>
                <Menu/>
                <Content/>
                <BottomPanel/>
                <Footer/>
            </div>
    </Provider>
    , document.querySelector('#root'));