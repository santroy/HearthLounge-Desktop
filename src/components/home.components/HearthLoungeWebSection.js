import React, { Component } from 'react';
import { openLink } from '../../utils/General';


const HearthLoungeWebSection = (props) => {

        return(
            <div className="hearth-lounge-web-section">

                <div className="hearth-lounge-decks">
                    <div onClick={() => { openLink('https://vfujin.github.io/HearthLounge') }} className="hearth-lounge-decks-content">Explore best decks</div>
                </div>
                <div className="hearth-lounge-cards">
                    <div onClick={() => { openLink('https://vfujin.github.io/cards') }} className="hearth-lounge-cards-content">Look at cards</div>
                </div>
                <div className="hearth-lounge-dlc">
                    <div className="hearth-lounge-expansions">
                        <div onClick={() => { openLink('https://vfujin.github.io/expansions') }} className="hearth-lounge-expansions-content">Expansions</div>
                    </div>
                    <div className="hearth-lounge-adventures">
                        <div onClick={() => { openLink('https://vfujin.github.io/adventures') }} className="hearth-lounge-adventures-content">Adventures</div>
                    </div>
                </div>

            </div>
        );
    
    }

export default HearthLoungeWebSection;