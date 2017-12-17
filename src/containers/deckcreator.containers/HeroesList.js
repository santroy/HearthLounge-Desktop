import React, { Component } from 'react';
import { heroes } from '../../globals/Heroes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { heroSearch } from '../../redux/actions/index';
import _ from 'lodash';

class HeroesList extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        
        const heroesList =  _.map(heroes, (hero) => {
                return( <option selected={_.eq(this.props.data.name, hero.name)} key={hero.name}>{hero.name}</option> );
        } );
    
        return(
            <div>
                <label htmlFor="hero-name">Hero</label>
                <select onChange={(e) => this.props.heroSearch(e.target.value)} id="hero-name" name="hero-name">
                    {heroesList}
                </select>
            </div>
        );
        }
    }



export default connect(null, { heroSearch })(HeroesList);