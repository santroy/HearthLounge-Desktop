import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { firebaseAuth } from '../../firebase/Config';

import { signOutUser } from '../../redux/actions/userpanel.actions';
import { goHome } from '../../redux/actions';



class UserSection extends Component {

    constructor(props) {
        super(props);
        this.signOutUser = this.signOutUser.bind(this);
    }

    signOutUser() {
        firebaseAuth().signOut().then(() => this.props.signOutUser()).catch(err => ({err: err.message}));
        this.props.goHome();
    }

    
    render() {

        return(
            <div>
                <div className="user-buttons">
                    <button onClick={this.signOutUser} className="submit-singout">Sign Out</button>
                </div>

                <div className="user-name">
                    Logged as&nbsp;<span style={{color: "rgb(0,169,156)"}}>{this.props.user.username}</span>
                </div>

            </div>

        );

        }
    }



export default connect(null, { signOutUser, goHome })(UserSection);