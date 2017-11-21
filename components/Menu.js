import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="menu">
                <ul>
                    <li>Sync Collection</li>
                    <li>Explore Cards</li>
                    <li>Deck Tracker</li>
                    <li>Coming Soon</li>
                </ul>
            </div>
        );
    }
}

export default Menu;