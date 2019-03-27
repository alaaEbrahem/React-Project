import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';


import AuthorProfile from './components/AuthorProfile/AuthorProfile';

import Login from './components/Login/Login';
///////////import admin pages/////////////////////
import Home from './components/Admin/Home/Home.js';

///////////////////User Home page imports///////////////////////////////
import HomePage from './components/Home/Home.js';

///////////////////////////////////////////////////
import BookProfile from './components/BookProfile/BookProfile'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
library.add(faHome);
const App = (props) => (
  
  <Router><>
    <Switch>
    
      <Route exact path="/" component={HomePage}/>
    
      <Route exact path="/author" component={AuthorProfile} />

      <Route exact path="/login" component={Login} />

      <Route exact path="/book" component={BookProfile} />
      ///////////////////////Admin routes//////////////////////
      <Route exact path="/admin" component={Home} />
      /////////////////////////////////////////////////////////

    </Switch></>
  </Router>

);

export default App;
