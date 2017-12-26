import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { firebaseAuth } from '../../firebase/Config';
import _ from 'lodash';
const { shell } = require('electron');

import { signInUser } from '../../redux/actions/userpanel.actions';

class LoginSection extends Component {

    constructor(props) {
        super(props);
        this.logIn = this.logIn.bind(this);
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

        firebaseAuth().
                signInWithEmailAndPassword(email, pass).then((activeUser) => this.props.signInUser(activeUser)).catch(err => console.log(err.message));

    }

    
    render() {

        return(
            <div>
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
            </div>
        );

        }
    }




export default connect(null, { signInUser })(LoginSection);

