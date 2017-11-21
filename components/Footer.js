import React, { Component } from 'react';
import { ipcRenderer } from 'electron';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            platformName: "Gathering..."
        };

        ipcRenderer.send('os:platform');

        ipcRenderer.on('os:platform-reply', (event, data) => this.setState({platformName: data}));

    }

    render() {
        const style = {
            color: "#C77966"
        }
        return(
            <div className="footer">
                HearthLounge ⓒ 2017 <br/>
                Works on: <span style={style}> {this.state.platformName} </span>
            </div>
        );
    }
}



export default Footer;