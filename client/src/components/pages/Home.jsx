import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>This is the homepage</h1>
    <div>
      <h3>Navigation Links</h3>
      <Link to="/playlist">Playlists</Link>
    </div>
  </div>
);

export default Home;

// <Link to="/users">Profile</Link>
