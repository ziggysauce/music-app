import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Navbar extends Component {
	
  render() {
		return (
			<div className="navbar">
				<p>Brand</p>
				<div>
					<button>Sign up</button>
					<button>Log in</button>
				</div>
			</div>
		);
  }
}
