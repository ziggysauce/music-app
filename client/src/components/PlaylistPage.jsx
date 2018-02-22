import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const PlaylistPage = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <p>This is the {props.match.params.id} playlist page!</p>
        <Link to="/playlist">Go back</Link>				
      </div>
    </div>
  );
};

export default PlaylistPage