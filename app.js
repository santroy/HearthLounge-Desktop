import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IpcRenderer } from 'electron';
import TitleBar from './components/TitleBar';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';
import Panel from './components/Panel';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TitleBar/>
                <Menu/>
                <Content/>
                <Panel/>
                <Footer/>
                {/* <OS/> */}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));