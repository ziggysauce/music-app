import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends Component {
	
  render() {
		return (
			<div className="page">
        <h1>Discover new music to fall in love with.</h1>
        <h2>Try it now!</h2>
        <div className="auth-buttons-wrapper">
          <form className="auth-form" action="/routes/auth/google" method="get">
            <button className="button google-button"><span className="auth-icon"><i className="fab fa-google-plus-g"></i></span> Sign up with Google</button>
          </form>
          <form className="auth-form" action="/routes/auth/facebook" method="get">
            <button className="button facebook-button"><span className="auth-icon"><i className="fab fa-facebook"></i></span> Sign up with Facebook</button>
          </form>
          <form className="auth-form" action="/routes/auth/twitter" method="get">
            <button className="button twitter-button"><span className="auth-icon"><i className="fab fa-twitter"></i></span> Sign up with Twitter</button>
          </form>
        </div>

        <div className="divider">
          <strong className="divider-title">Or</strong>
        </div>

        <form action="/routes/signup" method="post">
          <input type="text" name="username" placeholder="username"/>
          <input type="password" name="password" placeholder="password"/>
          <input className="button" type="submit"/>
        </form>
        <Link to="/">Go back</Link>				
			</div>
		);
  }
}
