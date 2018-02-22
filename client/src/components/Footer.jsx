import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
	
  render() {
		return (
			<div className="footer">
				<div>
					<p>Brand</p>
					<a className="link footer__link" href="#">Link 1</a>
					<a className="link footer__link" href="#">Link 2</a>
					<a className="link footer__link" href="#">Link 3</a>
				</div>
			</div>
		);
  }
}

