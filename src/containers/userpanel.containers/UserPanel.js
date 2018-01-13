import React, { Component } from 'react';
import { firebaseAuth } from '../../firebase/Config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openLink } from '../../utils/General'; 

import LoginSection from './LoginSection';
import UserSection from './UserSection';

class UserPanel extends Component {

    render() {
        return(
            <div className="panel">
                <div className="socials">
                    <ul>
                        <li onClick={() => openLink('https://www.youtube.com/user/PlayHearthstone/videos')}></li>
                        <li onClick={() => openLink('https://www.reddit.com/r/hearthstone/')}></li>
                        <li onClick={() => openLink('https://www.facebook.com/Hearthstonepl/')}></li>
                    </ul>
                </div>
                {_.isEmpty(this.props.User) ? <LoginSection/> : <UserSection user={this.props.User}/> }
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        User : state.User
    }
}

export default connect(mapStateToProps)(UserPanel);