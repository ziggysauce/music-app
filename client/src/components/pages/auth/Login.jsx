import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
	
  render() {
		return (
			<div>
        <div>
          <form action="/login" method="post">
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <input type="submit"/>
          </form>
          <Link to="/">Go back</Link>				
        </div>
			</div>
		);
  }
}
