import React, { Component } from 'react';
import { ipcRenderer } from 'electron';

class TitleBar extends Component {
    constructor(props) {
        super(props);
    }

    closeApp() {
        ipcRenderer.send('closeApp');
    };

    minimizeApp() {
        ipcRenderer.send('minimizeApp');
    };

    render() {
        return(
            <div className="title-bar">
                <div className="logo-title-bar"></div>
                HearthLounge
                <div onClick={this.closeApp} className="close"></div>
                <div onClick={this.minimizeApp} className="minimize"></div>
            </div>
        );
    }
}



export default TitleBar;