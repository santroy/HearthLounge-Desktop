import React, { Component } from 'react';
import { heroes, heroesDropdown } from '../../globals/Heroes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchHero, clearCreatorDeckList } from '../../redux/actions/deckcreator.actions';
import _ from 'lodash';

class HeroesList extends Component {

    constructor(props) {
        super(props);
    }
    

    render() {

        const heroesList =  _.map(heroes, (hero) => {
                return( <option key={hero.name}>{hero.name}</option> );
        } );
    
        return(
            <div>
                <label htmlFor="hero-name">Hero</label>
                <select value={this.props.data.name} onChange={(e) => 
                    { 
                        this.props.searchHero(e.target.value);
                        this.props.clearCreatorDeckList();
                    }
                    } id="hero-name" name="hero-name">
                    {heroesList}
                </select>
            </div>
        );
        }
    }



export default connect(null, { searchHero, clearCreatorDeckList })(HeroesList);

