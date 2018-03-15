import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PlaylistPage = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <h1>This is the {props.match.params.id} playlist page!</h1>
        <Link to="/playlist">Go back</Link>				
      </div>
    </div>
  );
};

export default PlaylistPage;