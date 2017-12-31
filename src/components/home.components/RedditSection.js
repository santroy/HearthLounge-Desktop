import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { openLink, limitChars } from '../../utils/General';
import moment from 'moment';

class RedditSection extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    componentWillMount() {

        const limit = 7;

        axios.get(`https://www.reddit.com/r/hearthstone/hot/.json?limit=${limit}`).then((response) => {

            this.setState({ postsList: response.data })

        }).catch(err => console.log(err));

    }

    renderRedditPosts() {

        if(this.state.postsList) {


            const postsList = _.map(this.state.postsList.data.children, (post) => {

                return (<div key={post.data.id} className="reddit-post-item" onClick={() => openLink(`https://reddit.com${post.data.permalink}`)}> 
                            <div className="reddit-post-item-score">{post.data.score}</div>
                            <div className="reddit-post-item-comments">{post.data.num_comments}</div>
                            <div className="reddit-post-item-title">{post.data.title}</div>
                            <div className="reddit-post-item-author">by {post.data.author}, {moment.utc(post.data.created_utc * 1000).fromNow()}</div>
                </div>);
            });

            return(
                <div>
                    <p>Hot Reddit Threads</p>
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