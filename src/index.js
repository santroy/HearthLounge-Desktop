import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route} from 'react-router-dom'
import promise from 'redux-promise';

import TitleBar from './components/TitleBar';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';
import Panel from './components/Panel';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={TitleBar}/>
            <Route path="/" component={Menu}/>
            <Route path="/" component={Content}/>
            <Route path="/" component={Panel}/>
            <Route path="/" component={Footer}/>
        </div>
    </BrowserRouter>
    , document.querySelector('#root'));