import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DashTopUser extends Component {	
  render() {
		return (
      <div className="dash-wrapper">
        <p>Hello, </p>
        <p>{this.props.user}</p>
        <NavLink to="/user/profile" className="nav-link">Profile</NavLink>
        <a href="/routes/logout" className="nav-link">Log out</a>
      </div>
		);
  }
}