import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class Playlist extends Component {
	
  render() {
		return (
			<div>
				<div>
          <p>This is the playlist page!</p>
          <Link to="/playlist/1">Playlist One</Link>
          <Link to="/playlist/2">Playlist Two</Link>
          <Link to="/">Go back</Link>				
        </div>
			</div>
		);
  }
}
