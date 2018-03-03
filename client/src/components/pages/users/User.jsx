import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class User extends Component {
	componentWillMount() {
		console.log('willmount');
		axios.get('/routes/users/daniel')
			.then((response) => {
				console.log('this is the respons: ', response);
			});
	}

	componentDidMount() {
		console.log('didmount');
	}

	render() {
		console.log('this is from user');

		return (
			<div>
				<div>
					<p>This is asdasd's profile page!</p>
					<Link to="/">Go back</Link>
				</div>
			</div>
		);
	}
}


export default User;