import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Playlist extends Component {
	
  render() {
		return (
			<div>
				<div>
          <h1>This is the playlist page!</h1>
          <p><Link to="/playlist/1">Playlist One</Link></p>
          <p><Link to="/playlist/2">Playlist Two</Link></p>
          <p><Link to="/">Go back to homepage</Link></p>				
        </div>
			</div>
		);
  }
}
