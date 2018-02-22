import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Router from './routes/Router.jsx';


export default class App extends Component {
  state = {}
	
  render() {
		return (
			<div>
        <Navbar />
        <Router />
        <Footer />
			</div>
		);
  }
}
