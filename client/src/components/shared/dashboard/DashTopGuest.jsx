import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DashTopGuest extends Component {
  render() {
		return (
      <div className="dash-wrapper">
        <div className="dash-welcome">
          <p>Welcome, </p>
          <p>Cybernaut</p>
        </div>
        <NavLink to="/signup" className="nav-link">Sign up</NavLink>
        <NavLink to="/login" className="nav-link">Log in</NavLink>
			</div>
		);
  }
}