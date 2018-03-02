import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/shared/Navbar.jsx';
import Footer from '../components/shared/Footer.jsx';
import NotFound from '../components/pages/NotFound.jsx';
import Home from '../components/pages/Home.jsx';
import User from '../components/pages/User.jsx';
import Playlist from '../components/pages/Playlist.jsx';
import PlaylistPage from '../components/pages/PlaylistPage.jsx';
import Signup from '../components/pages/auth/Signup.jsx';
import Login from '../components/pages/auth/Login.jsx';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <div className="main-page">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route exact path="/playlist" component={Playlist} />
          <Route path="/playlist/:id" component={PlaylistPage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
)

export default AppRouter;