import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound.jsx';
import Home from '../components/Home.jsx';
import User from '../components/User.jsx';
import Playlist from '../components/Playlist.jsx';
import PlaylistPage from '../components/PlaylistPage.jsx';

const AppRouter = () => (
  <BrowserRouter>
    <div className="main-page">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route exact path="/playlist" component={Playlist} />
        <Route path="/playlist/:id" component={PlaylistPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;