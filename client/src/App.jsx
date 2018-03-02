import React, { Component } from 'react';
import Router from './routes/Router.jsx';


export default class App extends Component {
  state = {}
	
  render() {
		return (
			<div>
        <Router />
			</div>
		);
  }
}
