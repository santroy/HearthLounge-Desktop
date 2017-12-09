import React, { Component } from 'react';
const path = require('path');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllCollection } from '../actions';
import _ from 'lodash';
 
class DeckCreator extends Component {

    componentDidMount() {
        if(_.isEmpty(this.props.allCollection)) {
            this.props.getAllCollection();
        }
    }

    renderBasic() {
        if(!(_.isEmpty(this.props.allCollection)))
        {
            return _.map(this.props.allCollection, value => 
                {
                    return(<img onClick={() => console.log(value)} className="card-image" src={value.img}/>)
                });

        }

    }

    disableInputs() {
        return !_.isEmpty(this.props.allCollection) ? false : true;
    }

    render() {

        return(
            <div className="content">
            
                <div className="deck-creator-card-search">
                    <p>Search</p>

                    <div className="deck-creator-search-inputs">
                        <label htmlFor="card-name">Card Name</label>
                        <input type="text" name="card-name" id="card-name" disabled={this.disableInputs()} />
                    </div>


                </div>
                <div className="deck-creator-card-results">      
                        {this.renderBasic()}
                </div>

                <div className="deck-creator-deck-choices">
                    Deck

                </div>
                {/* <div className="contentPlaceholder">
                    <div className="contentPlaceholderMessage">Do your best!<br/>Craft the best deck!</div>
                </div> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allCollection: state.AllCollection
    }
}

export default connect(mapStateToProps, { getAllCollection })(DeckCreator);