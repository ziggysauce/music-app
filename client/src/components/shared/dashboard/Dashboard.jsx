import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DashTopUser from './DashTopUser.jsx';
import DashTopGuest from './DashTopGuest.jsx';

export default class Dashboard extends Component {
  render() {
    console.log('from dashboard: ', this.props);
		return (
      <div className="dashboard">
        <div className="dash-top">
          <p className="brand">Plaze</p>
          {this.props.user ? <DashTopUser user={this.props.user}/> : <DashTopGuest/>}
          <div className="dash-nav">
            <NavLink to="/" className="nav-link">Listen</NavLink>
            <div className="dash-nav__additional">
              <NavLink to="/about" className="nav-link">About</NavLink>
              <NavLink to="/privacy_policy" className="nav-link">Privacy Policy</NavLink>
            </div>
          </div>
        </div>
        <div className="dash-bottom">
          <span>Follow us!</span>
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
				</div>
			</div>
		);
  }
}


