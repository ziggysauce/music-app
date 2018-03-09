import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends Component {
	
  render() {
		return (
			<div>
				<div>
          <form action="/routes/signup" method="post">
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
