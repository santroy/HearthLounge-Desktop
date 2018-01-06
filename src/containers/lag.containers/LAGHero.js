import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectHero } from '../../redux/actions/lag.actions';
import _ from 'lodash';

class LAGHero extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="lag-class-choose">
            <div className="lag-class-info" >Choose a Class</div>
                <table>
                    <tbody>
                        <tr>
                            <td onClick={(e) => this.props.selectHero("Druid") } className="lag-druid" >Druid</td>
                            <td onClick={(e) => this.props.selectHero("Hunter") } className="lag-hunter" >Hunter</td>
                            <td onClick={(e) => this.props.selectHero("Mage") } className="lag-mage" >Mage</td>
                        </tr>

                        <tr>
                            <td onClick={(e) => this.props.selectHero("Paladin") } className="lag-paladin" >Paladin</td>
                            <td onClick={(e) => this.props.selectHero("Priest") } className="lag-priest" >Priest</td>
                            <td onClick={(e) => this.props.selectHero("Rogue") } className="lag-rogue" >Rogue</td>
                        </tr>

                        <tr>
                            <td onClick={(e) => this.props.selectHero("Shaman") } className="lag-shaman" >Shaman</td>
                            <td onClick={(e) => this.props.selectHero("Warlock") } className="lag-warlock" >Warlock</td>
                            <td onClick={(e) => this.props.selectHero("Warrior") } className="lag-warrior" >Warrior</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );

        }
    }



export default connect(null, { selectHero } )(LAGHero);
