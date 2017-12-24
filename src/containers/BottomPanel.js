import React, { Component } from 'react';
import { firebaseAuth } from '../firebase/Config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const { shell } = require('electron');

class BottomPanel extends Component {
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

                <div className="login-buttons">
                    <button className="submit-login" onClick={this.logIn}>Sign In</button>
                    <button className="submit-create" onClick={this.openLink('https://github.com/vFujin/HearthLounge')}>Sign Up</button>
                </div>

                <div className="login-inputs">
                    <table>
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td><input name="email" id="email" type="text"/></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td><input name="pass" id="pass" type="password"/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* <div className="login-inputs">
                    <div className="login-input-email"><p>Email</p><input name="email" id="email" type="text"/></div>
                    <div className="login-input-password"><label htmlFor="pass">Password</label><input name="pass" id="pass" type="password"/></div>
                </div> */}


            </div>
        );
    }

    openLink(url) {
        return function(e) {
            shell.openExternal(url);
        }
    }


    logIn(e) {

        const emailInput = document.querySelector('#email');
        const passInput = document.querySelector('#pass');
        const email = emailInput.value;
        emailInput.value = null;
        const pass = passInput.value;
        passInput.value = null;
        
        firebaseAuth().signInWithEmailAndPassword(email, pass).then((activeUser) => console.log(activeUser)).catch(err => console.log(err.message));

    //     firebaseAuth()
    //   .signOut()
    //   .then(() => ({signedOut: true}))
    //   .catch(err => ({err: err.message}))

    }
}

export default BottomPanel;