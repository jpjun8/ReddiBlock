import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './components/navigation';
import BlockchainPage from './components/blockchain';
import SignInPage from './components/signin';
import HomePage from './components/home';
import AccountPage from './components/account';
import RedditPage from './components/Reddit_bot';

import * as ROUTES from './components/routes';

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Navigation />
          <hr />
          <Route exact path={ROUTES.BLOCKCHAIN} component={BlockchainPage} />
          <Route exact path={ROUTES.REDDIT} component={RedditPage} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        </div>
      </Router>
    )
  }
}