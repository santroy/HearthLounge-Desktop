import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { getYsera } from '../actions/index';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
 
class Content extends Component {

    componentDidMount() {
        this.props.getYsera();
    }

    renderYsera() {

        if(_.isEmpty(this.props.ys)) {
            console.log(path.resolve("assets/loading.gif"));
            return <div><img src={path.resolve("assets/loading.gif")}/></div>
        }

        return(<div><img className="card-image" src={this.props.ys.imgGold}/></div>);
    }

    render() {

        return(
            <div className="content">
                {this.renderYsera()}
                <div className="contentPlaceholder">
                    <div className="contentPlaceholderMessage">Welcome to our App!<br/>Please sign in and choose feature!</div>
                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getYsera }, dispatch);
}

function mapStateToProps(state) {
    return {
        ys: state.Ysera
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);