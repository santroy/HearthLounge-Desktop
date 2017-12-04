import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    toggleMenu(event) {
        let content = document.querySelector(".menu");

        if(content.classList.contains('hidden')) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    }

    render() {
        return (
            <div>
                <div className="menu">
                    <ul>
                        <li>Create Deck</li>
                        <li>Deck Tracker</li>
                        <li>LAG</li>
                    </ul>
                </div>
                <div onClick={this.toggleMenu} className="toggle-menu"></div>
            </div>
        );
    }
}

export default Menu;