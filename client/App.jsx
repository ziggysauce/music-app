import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './src/components/Navbar.jsx';
import Footer from './src/components/Footer.jsx';


export default class App extends Component {
  state = {}
	
  render() {
		return (
			<div>
        <Navbar />
        <Footer />
			</div>
		);
  }
}
