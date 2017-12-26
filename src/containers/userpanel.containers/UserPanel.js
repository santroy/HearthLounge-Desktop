import React, { Component } from 'react';
import { firebaseAuth } from '../../firebase/Config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const { shell } = require('electron');

import LoginSection from './LoginSection';
import UserSection from './UserSection';

class UserPanel extends Component {

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
                {_.isEmpty(this.props.User) ? <LoginSection/> : <UserSection user={this.props.User}/> }
            </div>
        );
    }

    openLink(url) {
        return function(e) {
            shell.openExternal(url);
        }
    }

}

function mapStateToProps(state) {
    return {
        User : state.User
    }
}

export default connect(mapStateToProps)(UserPanel);