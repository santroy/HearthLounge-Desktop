import React from 'react';
import { clipboard } from 'electron';
import deckObjectBuilder from '../../utils/deckstrings/DeckObjectBuilder';
import encodeDeck from '../../utils/deckstrings/DeckEncoder';

const DeckStringPanel = (props) => {

    return(    
        <div className="deck-creator-deck-string">
        Deckstring
            <div className="deck-creator-deck-string-control">
                <table>
                <tbody>
                    <tr>
                        <td><input id="dck" type="text" onChange={() => {return;}} value={encodeDeck(deckObjectBuilder(props.data.deckList, props.data.hero, props.data.format.id))}/></td>
                        <td><button className="deck-creator-deck-copy-button" onClick={() => { clipboard.writeText(document.querySelector("#dck").value) }} ></button></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>)


    
}

export default DeckStringPanel;