import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


/**
 * Internal Components
 */

import ProfileWidget from './ProfileWidget';
import DashBoard from './DashBoard';

 /**
 * Internal CSS components
 */

import './Home.css';


/**
* Store operations
 */

import { getUserData, setUserData } from '../../Store/Actions';


function mapStateToProps(props) {
    return {
        usersList: props.usersList,
    };
}

const mapDispatchToProps = {
	getUserData,
	setUserData
}



class Home extends Component {

	componentDidMount() {
		this.fetchUsers();
	}

	fetchUsers = () => {
		console.log(this.props)
		this.props.getUserData()
		.then(response => {
			if(response.status === 200) {
				this.props.setUserData(response.data.results);
			}
		})
		.catch(error => {
			console.log(error);
		})	
	}

	render() {
		return (
			<div id= "home">
				<div className= "container">
					<div className= "columns is-gapless">
						<div className= "column is-3">
							<ProfileWidget />
						</div>
						<div className= "column">
							<DashBoard usersList = { this.props.usersList } match = {this.props.match} />
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default connect( mapStateToProps, mapDispatchToProps )(Home);