import React, { Component } from 'react';
import HearthLoungeWebSection from './HearthLoungeWebSection';
import IncomingEventsSection from './IncomingEventsSection';
import RedditSection from './RedditSection';
import TwitchSection from './TwitchSection';

class Home extends Component {

    render() {
        return(
            <div className="content">

            <div className="home-content" >
                <HearthLoungeWebSection/>
                <IncomingEventsSection/>
                <RedditSection/>
                <TwitchSection/>
            </div>

            </div>
        );
    }
    
}

export default Home;