import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Dashboard extends Component {
	
  render() {
		return (
      <div className="dashboard">
        <div className="dash-top">
          <p>Brand</p>
          <input placeholder="search for music..."/>
          <NavLink to="/profile" className="nav-link">Profile</NavLink>
        </div>
				<div className="dash-bottom">
          <NavLink to="/signup" className="nav-link">Sign up</NavLink>
          <NavLink to="/login" className="nav-link">Log in</NavLink>
          <a href="/logout" className="nav-link">Log out</a>
				</div>
			</div>
		);
  }
}
