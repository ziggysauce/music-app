import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
	
  render() {
		return (
			<div className="page">
        <h1>Welcome back!</h1>
        <div className="auth-buttons-wrapper">
          <form className="auth-form" action="/routes/auth/google" method="get">
            <button className="button google-button"><span className="auth-icon"><i className="fab fa-google-plus-g"></i></span> Log in with Google</button>
          </form>
          <form className="auth-form" action="/routes/auth/facebook" method="get">
            <button className="button facebook-button"><span className="auth-icon"><i className="fab fa-facebook"></i></span> Log in with Facebook</button>
          </form>
          <form className="auth-form" action="/routes/auth/twitter" method="get">
            <button className="button twitter-button"><span className="auth-icon"><i className="fab fa-twitter"></i></span> Log in with Twitter</button>
          </form>
        </div>

        <div className="divider">
          <strong className="divider-title">Or</strong>
        </div>

        <form action="/routes/login" method="post">
          <input type="text" name="username" placeholder="username"/>
          <input type="password" name="password" placeholder="password"/>
          <input className="button" type="submit"/>
        </form>
        <Link to="/">Go back</Link>				
			</div>
		);
  }
}
