import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class User extends Component {
	componentDidMount() {
		let id = this.props.props.match.params.id;
		axios.get(`routes/user/${id}`)
			.then((results) => {
				console.log('these are the results: ', results);
				this.props.handleLocalLogin(results.data.user.username);
			})
			.catch((err) => {
				console.log(err);
			});
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