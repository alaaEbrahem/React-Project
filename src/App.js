import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';


import AuthorProfile from './components/AuthorProfile/AuthorProfile';
import Books from '../src/components/Books/Books';
<<<<<<< HEAD
import category from './components/category/category';
=======
>>>>>>> c61a026644f104ceb591b7593b9d4ed0952b93a4

import Login from './components/Login/Login';
///////////import admin pages/////////////////////
import Home from './components/Admin/Home/Home.js';

import HomePage from './components/Home/Home.js';

///////////////////////////////////////////////////
import BookProfile from './components/BookProfile/BookProfile'

import UserNavbar from './components/Navbar/UserNavbar/UserNavbar';

// import { library } from '@fortawesome/fontawesome-svg-core'
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
    <Route exact path="/category" component={category}/>
      <Route exact path="/" component={HomePage}/>

      {/* Just a Temporary route for testing */}
      <Route exact path="/userpage" component={UserNavbar}/>

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
