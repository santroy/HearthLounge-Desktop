import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { openLink, limitChars } from '../../utils/General';

class RedditSection extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    componentWillMount() {

        const limit = 5;

        axios.get(`https://www.reddit.com/r/hearthstone/hot/.json?limit=${limit}`).then((response) => {

            this.setState({ postsList: response.data })

        }).catch(err => console.log(err));

    }

    renderRedditPosts() {

        if(this.state.postsList) {



            const postsList = _.map(this.state.postsList.data.children, (post) => {

                console.log(post);

                return (<div className="reddit-post-item"> 
                            <div className="reddit-post-item-title">{post.data.title}</div>
                            <div className="reddit-post-item-author">{post.data.author}</div>
                </div>);
            });

            return(
                <div>
                    <p>Top Reddit Threads</p>
                    {postsList}
                </div>
            );

        } else return <div className="waiting"></div>;

    }

    render() {
        return(
            <div className="reddit-section">

                {this.renderRedditPosts()}

            </div>
        );
    }
    
}

export default RedditSection;