import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { openLink, limitChars } from '../../utils/General';


class TwitchSection extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    componentWillMount() {

            const clientKey = 'w1q9ccadgoe5cmjvbugwio2b3hltr9';
            const limit = 4;

            const instance = axios.create({
                method: 'get',
                baseURL: `https://api.twitch.tv/helix/streams?first=${limit}&game_id=138585`,
                headers: {'Client-ID': clientKey,
                          'Accept' : 'application/json'
            }
              });
        
            instance.request().then(response => {

                this.setState({ streams: response.data });
                
                }).catch(err => console.log(err));

        
    }

    renderStreamList() {

        if(this.state.streams) {

            const streamList = _.map(this.state.streams.data, (value) => {

                const username = /https:\/\/.*_user_(.*)-{width.*/.exec(value.thumbnail_url)[1];

                return(<div onClick={() => openLink(`https://twitch.tv/${username}`)} key={value.user_id} className="streamer-item" >

                    <div className="streamer-item-thumb" style={{ backgroundImage: `url(${value.thumbnail_url.replace("{width}x{height}","135x76")})` } } >
                        <div className="streamer-item-viewers">{value.viewer_count}</div>
                    </div>
                    <div className="streamer-item-title">{limitChars(value.title, 60)}</div>

                </div>);


            });

            return(
                <div>
                    <p>Top Livestreams Now</p>
                    {streamList}
                </div>
            );

        } else return <div className="waiting"></div>;

    }

    render() {
        return(
            <div className="twitch-section">

                {this.renderStreamList()}


            </div>
        );
    }
    
}

export default TwitchSection;