import React, { Component } from 'react';
import TopDecksSection from './TopDecksSection';
import IncomingEventsSection from './IncomingEventsSection';
import RedditSection from './RedditSection';
import TwitchSection from './TwitchSection';

class Home extends Component {

    render() {
        return(
            <div className="content">

                <TopDecksSection/>
                <IncomingEventsSection/>
                <RedditSection/>
                <TwitchSection/>

            </div>
        );
    }
    
}

export default Home;