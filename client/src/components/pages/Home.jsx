import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <p>This is the homepage</p>
    <div>
      <h3>Navigation Links</h3>
      <Link to="/user">Profile</Link>
      <Link to="/playlist">Playlists</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </div>
  </div>
);

export default Home;