import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/shared/Navbar.jsx';
import Footer from '../components/shared/Footer.jsx';
import Dashboard from '../components/shared/dashboard/Dashboard.jsx';

import NotFound from '../components/pages/NotFound.jsx';
import Home from '../components/pages/Home.jsx';
import Playlist from '../components/pages/Playlist.jsx';
import PlaylistPage from '../components/pages/PlaylistPage.jsx';
import About from '../components/pages/About.jsx';
import PrivacyPolicy from '../components/pages/PrivacyPolicy.jsx';

import Signup from '../components/pages/auth/Signup.jsx';
import Login from '../components/pages/auth/Login.jsx';

import Profile from '../components/pages/users/Profile.jsx';

class AppRouter extends Component {
  state = {
    user: null
  }

  componentDidMount() {
		// console.log('didmount');
		// axios.get('/routes/auth')
		// 	.then((response) => {
		// 		this.setState({ user: response.data.user });
		// 	})
		// 	.catch((err) => {
		// 		console.log('Error retrieving user: ', err);
		// 	});
  }
  
  handleLogin = (user) => {
    this.setState({ user: user });
  }


  render() {
    return (
      <BrowserRouter>
      <div className="full-page">
        <Navbar user={this.state.user} />
        <div className="center-page">
          <Dashboard user={this.state.user} />
          <div className="main-page">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route 
                path="/user/:id" 
                render={(props) => (<Profile
                  props={props}
                  user={this.state.user}
                  handleLogin={this.handleLogin}
                />)} 
              />
              <Route exact path="/playlist" component={Playlist} />
              <Route path="/playlist/:id" component={PlaylistPage} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/about" component={About} />
              <Route path="/privacy_policy" component={PrivacyPolicy} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    );
  }
}


export default AppRouter;