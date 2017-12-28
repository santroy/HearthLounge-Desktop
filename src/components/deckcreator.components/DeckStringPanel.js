import React, { Component } from 'react';
import { clipboard } from 'electron';
import deckObjectBuilder from '../../utils/deckstrings/DeckObjectBuilder';
import encodeDeck from '../../utils/deckstrings/DeckEncoder';
import { firestore, ref, refParent } from '../../firebase/Config';
import _ from 'lodash';


class DeckStringPanel extends Component {
    constructor(props) {
        super(props);
    }

    getDeckstring() {
        return encodeDeck(deckObjectBuilder(this.props.data.deckList, this.props.data.hero, this.props.data.format.id));
    }

    savePrivateDeck(deckstring, deckName) {

        if(this.props.data.User.uid && deckstring) {

            const deckId = ref.child(`decks`).push().key;

            const privateDeck = {
                name: deckName.length ? deckName.normalize() : "Custom Deck",
                deckstring: deckstring
            }
                refParent(`user-private-decks/${this.props.data.User.uid}/${deckId}`).update({ ...privateDeck }).then(() => console.log("Success")).catch(err => console.log(err));

        } else console.error("Generic upload deck error");

    }

//<div className="deck-name-window">
//     <div className="deck-name-window-center">
//         Enter deck name<br/>
//     <input type="text"/>
//     <br/>
//     <div className="deck-name-window-buttons">
//         <div className="deck-name-window-button-submit">OK</div>
//         <div className="deck-name-window-button-cancel">Cancel</div>
//     </div>
//     </div>
// </div>

    setUpDeckNameWindow() {

        const content = document.querySelector('.content');
        const deckWindowFragment = document.createDocumentFragment();

        const deckNameWindowBG = document.createElement('div');
        deckNameWindowBG.classList.add('deck-name-window');
        deckNameWindowBG.style.display = "block";
        deckWindowFragment.appendChild(deckNameWindowBG);

        const deckNameWindowContent = document.createElement('div');
        deckNameWindowContent.classList.add('deck-name-window-center');
        deckNameWindowBG.appendChild(deckNameWindowContent);

        const message = document.createTextNode("Enter deck name");
        const newLine = document.createElement('br');
        const deckNameInput = document.createElement('input');
        deckNameInput.setAttribute('type', 'text');
        deckNameInput.setAttribute('placeholder', 'Custom Deck');

        deckNameWindowContent.appendChild(message);
        deckNameWindowContent.appendChild(newLine);
        deckNameWindowContent.appendChild(deckNameInput);      

        const deckNameWindowButtons = document.createElement('div');
        deckNameWindowButtons.classList.add('deck-name-window-buttons');

        deckNameWindowContent.appendChild(deckNameWindowButtons);
        
        const deckNameWindowSubmit = document.createElement('div');
        deckNameWindowSubmit.classList.add('deck-name-window-button-submit');
        deckNameWindowSubmit.textContent = 'OK';
        const deckNameWindowCancel = document.createElement('div');
        deckNameWindowCancel.classList.add('deck-name-window-button-cancel');
        deckNameWindowCancel.textContent = 'Cancel';

        deckNameWindowButtons.appendChild(deckNameWindowSubmit);
        deckNameWindowButtons.appendChild(deckNameWindowCancel);

        deckWindowFragment.appendChild(deckNameWindowBG);
        content.appendChild(deckWindowFragment);

        deckNameWindowCancel.onclick = () => content.removeChild(deckNameWindowBG);
        deckNameWindowSubmit.onclick = () => {
            this.savePrivateDeck(this.getDeckstring(), deckNameInput.value);
            content.removeChild(deckNameWindowBG);
        };

    }

        render() {
            return(    
                <div className="deck-creator-deck-string">
                        <div className="deck-creator-deck-copy-button" onClick={() => { clipboard.writeText(this.getDeckstring()) }} >
                        
                            <div className="tooltiptext">Copy deck</div>

                        </div><div className="deck-creator-deck-upload-button" onClick={() => { this.setUpDeckNameWindow() }} >
                                
                            <div className="tooltiptext">Upload deck</div>
                        
                        </div>

                </div>)
        }

    }



export default DeckStringPanel;