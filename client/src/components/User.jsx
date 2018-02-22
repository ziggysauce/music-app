import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class User extends Component {
	
  render() {
		return (
			<div>
				<div>
          <p>This is the user profile page!</p>
          <Link to="/">Go back</Link>
				</div>
			</div>
		);
  }
}
