import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DashTopUser from './DashTopUser.jsx';
import DashTopGuest from './DashTopGuest.jsx';

export default class Dashboard extends Component {
  render() {
    // console.log('from dashboard: ', this.props);
		return (
      <div className="dashboard">
        <div className="dash-top">
          <p>Brand</p>
          {this.props.user ? <DashTopUser user={this.props.user}/> : <DashTopGuest/>}
        </div>
				<div className="dash-bottom">
          Social Media Links
				</div>
			</div>
		);
  }
}


