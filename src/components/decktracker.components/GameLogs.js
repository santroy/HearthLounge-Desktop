import React, { Component } from 'react';

import _ from 'lodash';

class GameLogs extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return _.map(this.props.data, log => {
            
                        const timeStamp = <span style={{ color: "#e6e6e6" }}>[{log.timeStamp.hours}:{log.timeStamp.minutes}:{log.timeStamp.seconds}] </span>;
            
                        switch(log.label) {
                            case "players":
                                return(
                                    <li key={log.id}>
                                    {timeStamp}
                                    A game between ({log.data[1].sideText}) <span style={log.data[1].styles}>{log.data[1].playerName}</span> as {log.data[1].heroName} and ({log.data[0].sideText}) <span style={log.data[0].styles}>{log.data[0].playerName}</span> as {log.data[0].heroName} is started.</li> 
                                );
                            break;
                            case "drew_card":
                                return(
                                    <li key={log.id}>{timeStamp}
                                    <span style={{color: "#4dff4d"}}>You</span> drew <span style={{color: "#d9b38c"}} >{log.data}</span> to your hand.</li>
                                );
                            break;
                            case "hero_power":
                                return( 
                                    <li key={log.id}>{timeStamp}
                                    <span style={log.data.player.styles}>{log.data.player.sideText}</span> used Hero Power (<span style={{color: "#d9b38c"}}>{log.data.heroPowerName}</span>).</li>
                                );    
                            break;
                            case "card_played":
                                return( 
                                    <li key={log.id}>{timeStamp}
                                    <span style={log.data.player.styles}>{log.data.player.sideText}</span> played <span style={{color: "#d9b38c"}}>{log.data.name}</span>.</li> 
                                ); 
                            break;
                            case "card_shuffled":
                                return( 
                                    <li key={log.id}>{timeStamp}
                                    <span style={{color: "#d9b38c"}}>{log.data}</span> shuffled to <span style={{color: "#4dff4d"}}>your</span> deck.</li> 
                                );  
                            break;
                            case "card_burned":
                                return( 
                                    <li key={log.id}>{timeStamp}
                                    <span style={{color: "#d9b38c"}}>{log.data}</span> burned from <span style={{color: "#4dff4d"}}>your</span> deck.</li> 
                                );    
                            break;
                            case "game_over":
                                return(
                                    <li key={log.id}>{timeStamp}
                                    <span style={{color: "#ccddff"}}>The game is over.</span></li> 
                                );   
                            break;
                            case "player_won":
                                return( 
                                    <li key={log.id}>{timeStamp}
                                    <span style={{color: "#ccddff"}}>{log.data} won.</span></li>
                                );  
                            break;
                            case "player_conceded":
                            return( 
                                <li key={log.id}>{timeStamp}
                                <span style={{color: "#ccddff"}}>{log.data} conceded.</span></li>
                            );  
                            break;
                            case "player_tied":
                            return( 
                                <li key={log.id}>{timeStamp}
                                <span style={{color: "#ccddff"}}>{log.data} tied.</span></li>
                            );  
                            break;
                            default: return;
                        }
             
                    });
    }

}

export default GameLogs;