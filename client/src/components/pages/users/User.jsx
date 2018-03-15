import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ConnectAuth from './ConnectAuth.jsx';

class User extends Component {
	handleAuth() {
		console.log('===================================');
		console.log('SOCIAL MEDIA AUTHHHHHHH');
		console.log('===================================');
		axios.get('/routes/auth')
			.then((response) => {
				console.log(response.data);
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
				this.props.handleLogin(results.data.user);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	componentDidMount() {
		console.log('USER.JSX DID MOUNT, PROPS: ', this.props.props);
		console.log('HASH: ', this.props.props.location.hash);
		// Only call if user is not already logged in
		if (!this.props.user) {
			if (this.props.props.match.params.id === 'profile') {
				// AUTH
				console.log('THIS SHOULD BE HIT');
				this.handleAuth();
			} else if (this.props.props.match.params.id !== 'profile') {
				// LOCAL AUTH
				this.handleLocalAuth();
			}
		}
	}

	render() {
		console.log('this is from user: ', this.props);

		return (
			<div>
				<div>
					<p>USER PROFILE PAGE</p>
					{this.props.user ? <ConnectAuth /> : null}
					<Link to="/">Go back</Link>
				</div>
			</div>
		);
	}
}


export default User;