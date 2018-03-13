import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class User extends Component {
	// componentDidMount() {
	// 	let id = this.props.props.match.params.id;
	// 	axios.get(`routes/user/${id}`)
	// 		.then((results) => {
	// 			console.log('these are the results: ', results);
	// 			this.props.handleLocalLogin(results.data.user.username);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});

	// 		console.log('trying to gt fb auth: ', this.props.user);
	// 		this.props.user ? console.log('its not null') : console.log('its null');
	// }

	handleFbAuth() {
		console.log('===================================');
		console.log('FB AUTHHHHHHH');
		console.log('===================================');
		axios.get('/routes/auth')
			.then((response) => {
				this.props.handleLogin(response.data.user);
			})
			.catch((err) => {
				console.log('Error retrieving user: ', err);
			});
	}

	handleLocalAuth() {
		console.log('===================================');
		console.log('LOCAL AUTHHHHHHH');
		console.log('===================================');
		let id = this.props.props.match.params.id;
		axios.get(`routes/user/${id}`)
			.then((results) => {
				console.log('these are the results: ', results);
				this.props.handleLogin(results.data.user.username);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	componentDidMount() {
		console.log('USER.JSX DID MOUNT, PROPS: ', this.props.props);
		console.log('HASH: ', this.props.props.location);
		if (this.props.props.location.hash.length > 0) {
			// FB AUTH
			this.handleFbAuth();
		} else if (this.props.props.match.params.id !== 'profile') {
			// LOCAL AUTH
			this.handleLocalAuth();
		}
	}

	render() {
		console.log('this is from user: ', this.props);

		return (
			<div>
				<div>
					<p>USER PROFILE PAGE</p>
					<Link to="/">Go back</Link>
				</div>
			</div>
		);
	}
}


export default User;