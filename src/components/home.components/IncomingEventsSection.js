import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { openLink } from '../../utils/General';
import moment from 'moment'

class IncomingEventsSection extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {

        const calendarID = "7r1k7pimcm86o7cevk29tdmhg8qfdh94%40import.calendar.google.com";
        const maxResults = 7;
        const apiKey = "AIzaSyAurwWKeT_RaxCe-T0nfh264Lr2x4O-OFk";

        const nowDate = moment().toISOString();
        
        axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?maxResults=${maxResults}&orderBy=startTime&singleEvents=true&timeMin=${nowDate}&key=${apiKey}`).
        then(response => {

            this.setState( { events: response.data } )

        }).catch(err => console.log(err));

    }

    renderEventsList() {

        if(this.state.events) {

            const eventsList = _.map(this.state.events.items, (event) => {

                const eventDate = moment(event.start.dateTime).format('DD.MM, HH:mm');

                return (<div key={event.id} className="incoming-event-item" onClick={() => openLink(event.htmlLink)}> 
                            <div className="incoming-event-item-name">{event.summary}</div>
                            <div className="incoming-event-item-date">Starts {eventDate}</div>
                </div>);

            });
            

            return(
                <div>
                    <p>Incoming {this.state.events.summary}</p>
                    {eventsList}
                </div>
            );

        } else return <div className="waiting"></div>;
        
    }

    render() {
        return(

            <div className="incoming-events-section">

            {this.renderEventsList()}

            </div>
        );
    }
    
}

export default IncomingEventsSection;