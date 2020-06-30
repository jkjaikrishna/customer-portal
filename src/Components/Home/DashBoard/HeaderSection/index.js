import React, { Component } from 'react';
import { connect } from 'react-redux';


/**
* Store operations
 */

import { searchUser } from '../../../../Store/Actions';


const mapDispatchToProps = {
    searchUser
}

class HeaderSection extends Component {

    constructor(props) {
        super(props);
        this.state= {
            searchTag: ''
        }
    }

    handleChange = (e) => {
        this.setState({ searchTag: e.target.value });
        this.props.searchUser(e.target.value);
    }


    render() {
        return (
            <div className= "header">
                <div>
                    <p className= "title is-5 is-pulled-left font-color-dark">Team Members 
                        <span className= " content subtitle is-6 is-block font-color-light" >102 members</span>
                    </p>
                    <p className= "title is-6 is-pulled-right font-color-medium">14 Available Now
                        <span className= "content subtitle is-6 is-block font-color-primary is-uppercase" >Search members</span>	
                    </p>
                    <input 
                        className= "search-field" 
                        type= "text" 
                        placeholder= "search here..." 
                        value= { this.state.searchTag}
                        onChange= { (e) => this.handleChange(e) }
                    />
                </div>
            </div>
        )
    };
}

export default connect(null, mapDispatchToProps)(HeaderSection);