import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Dashboard extends Component {
	
  render() {
		return (
      <div className="dashboard">
        <div className="dash-top">
          <p>Brand</p>
          <input placeholder="search for music..."/>
          <NavLink to="/profile">Profile</NavLink>
        </div>
				<div className="dash-bottom">
          <a className="link footer__link" href="#">Link 1</a>
          <a className="link footer__link" href="#">Link 2</a>
          <a className="link footer__link" href="#">Link 3</a>
				</div>
			</div>
		);
  }
}
