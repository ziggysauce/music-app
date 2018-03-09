import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class User extends Component {
	state = {
		user: ''
	}

	componentDidMount() {
		console.log('didmount');
		axios.get('/routes/auth')
			.then((response) => {
				this.setState({ user: response.data.user });
			});
	}

	render() {
		console.log('this is from user: ', this.state);

		return (
			<div>
				<div>
					<p>This is {this.state.user.length > 0 ? this.state.user : 'user'}'s profile page!</p>
					<Link to="/">Go back</Link>
				</div>
			</div>
		);
	}
}


export default User;