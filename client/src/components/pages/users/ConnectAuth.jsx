import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ConnectAuth extends Component {
	render() {
		return (
			<div className="connect-auth">
        <a href="routes/connect/google" className="profile-connect google-button"><span className="auth-icon"><i className="fab fa-google-plus-g"></i></span> Connect with Google</a>
        <a href="routes/connect/facebook" className="profile-connect facebook-button"><span className="auth-icon"><i className="fab fa-facebook"></i></span> Connect with Facebook</a>
        <a href="routes/connect/twitter" className="profile-connect twitter-button"><span className="auth-icon"><i className="fab fa-twitter"></i></span> Connect with Twitter</a>
			</div>
		);
	}
}

export default ConnectAuth;