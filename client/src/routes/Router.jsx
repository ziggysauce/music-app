import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../components/shared/Navbar.jsx';
import Footer from '../components/shared/Footer.jsx';
import Dashboard from '../components/shared/Dashboard.jsx';

import NotFound from '../components/pages/NotFound.jsx';
import Home from '../components/pages/Home.jsx';
import Playlist from '../components/pages/Playlist.jsx';
import PlaylistPage from '../components/pages/PlaylistPage.jsx';

import Signup from '../components/pages/auth/Signup.jsx';
import Login from '../components/pages/auth/Login.jsx';

import User from '../components/pages/users/User.jsx';

const AppRouter = () => (
  <BrowserRouter>
    <div className="full-page">
      <Navbar />
      <div className="center-page">
        <Dashboard />
        <div className="main-page">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user/:id" component={User} />
            <Route path="/user/profile" component={User} />
            <Route exact path="/playlist" component={Playlist} />
            <Route path="/playlist/:id" component={PlaylistPage} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
)

export default AppRouter;