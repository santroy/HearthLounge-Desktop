import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import promise from 'redux-promise';
import rootReducers from './redux/reducers';

import TitleBar from './components/TitleBar';
import Menu from './containers/Menu';
import Content from './containers/Content';
import Footer from './components/Footer';
import UserPanel from './containers/userpanel.containers/UserPanel';
import DeckCreator from './containers/deckcreator.containers/DeckCreator';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducers)}>
            <div>
                <TitleBar/>
                <Menu/>
                <Content/>
                <UserPanel/>
                <Footer/>
            </div>
    </Provider>
    , document.querySelector('#root'));