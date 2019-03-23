import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import AuthorProfile from './components/AuthorProfile/AuthorProfile';
import BookProfile from './components/BookProfile/BookProfile'
const App = (props) => (

  <Router><>
      <Switch>
          <Route exact path="/author" component={AuthorProfile} />
          <Route exact path="/book" component={BookProfile} />
      </Switch></>
  </Router>

);

export default App;
