import React, { Component } from 'react';
import { heroes, heroesDropdown } from '../../globals/Heroes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchHero, selectManaCrystal } from '../../redux/actions/deckcreator.actions';
import _ from 'lodash';

class ManaCrystals extends Component {

    constructor(props) {
        super(props);
    }

    renderManaCrystals() {

        const manaCrystalList = _.map(this.props.data, (value) => {
            return <li className={value.active ? "active-mana-crystal" : null} onClick={(e) => {this.props.selectManaCrystal(_.cloneDeep(this.props.data), _.cloneDeep(value))}} key={value.value}>{value.value}</li>
        });

        return manaCrystalList;
    }

    render() {
        

        return(
            <div>
                <label htmlFor="mana-crystals">Cost</label>
                <div className="mana-crystals-container">
                    <ul id="mana-crystals">
                        {this.renderManaCrystals()}
                    </ul>
                </div>
            </div>
        );
    }
}



export default connect(null, { selectManaCrystal })(ManaCrystals);

