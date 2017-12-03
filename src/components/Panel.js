import React, { Component } from 'react';
const {shell} = require('electron');

class Panel extends Component {
    render() {
        return(
            <div className="panel">
                <div className="socials">
                    <ul>
                        <li onClick={this.openLink('http://www.youtube.com/')}></li>
                        <li onClick={this.openLink('http://www.reddit.com/')}></li>
                        <li onClick={this.openLink('http://www.facebook.com/')}></li>
                    </ul>
                </div>
                <form className="login-form">
                    <button className="submit-login" onClick={this.logIn} type="submit">Sign In</button>
                    <button className="submit-create" onClick={this.logIn} type="submit">Sign Up</button>
                </form>
            </div>
        );
    }

    openLink(url) {
        return function(e) {
            shell.openExternal(url);
        }
    }


    logIn(e) {
        e.preventDefault();
    }
}

export default Panel;