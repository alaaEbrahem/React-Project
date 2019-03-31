import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';


import AuthorProfile from './components/AuthorProfile/AuthorProfile';
import Books from '../src/components/Books/Books';

import Login from './components/Login/Login';
///////////import admin pages/////////////////////
import Home from './components/Admin/Home/Home.js';

import HomePage from './components/Home/Home.js';
import UserProfile from './components/UserProfile/UserProfile';

import BookProfile from './components/BookProfile/BookProfile'

// -----------------------Font Awesome Import-------------------------
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserCircle, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch,faUserCircle,faSignOutAlt)
library.add(faHome);
//--------------------------------------------------------------------


const App = (props) => (
  
  <Router><>
    <Switch>
    
      <Route exact path="/" component={HomePage}/>

      {/* Just a Temporary route for testing */}
      <Route exact path="/profile" component={UserProfile}/>

      <Route exact path="/author" component={AuthorProfile} />

      <Route exact path="/login" component={Login} />

      <Route exact path="/book" component={BookProfile} />
      ///////////////////////Admin routes//////////////////////
      <Route exact path="/admin" component={Home} />
      <Route exact path="/books" component={Books} />
      /////////////////////////////////////////////////////////

    </Switch></>

  </Router>

);

export default App;
