import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
	
  render() {
		return (
			<div className="navbar">
				<p>Brand</p>
				<div>
					<NavLink to="/signup">Sign up</NavLink>
					<NavLink to="/login">Log in</NavLink>
					<a href="/routes/logout">Log out</a>
				</div>
			</div>
		);
  }
}
