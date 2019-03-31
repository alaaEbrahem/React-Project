import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';


import AuthorProfile from './components/AuthorProfile/AuthorProfile';
import Books from '../src/components/Books/Books';

import category from './components/category/category';


import Login from './components/Login/Login';
///////////import admin pages/////////////////////
import Home from './components/Admin/Home/Home.js';
import Book from './components/Admin/Books/Books';
import Author from './components/Admin/Authors/Author';
import Users from './components/Admin/Users/Users';
import Categories from './components/Admin/Categories/Categories';
import HomePage from './components/Home/Home.js';

////////////////////////End Admin pages///////////////////////////
import BookProfile from './components/BookProfile/BookProfile'

import UserNavbar from './components/Navbar/UserNavbar/UserNavbar';

// import { library } from '@fortawesome/fontawesome-svg-core'
// -----------------------Font Awesome Import-------------------------
import { library } from '@fortawesome/fontawesome-svg-core'

import { faSearch, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faUserCircle, faSignOutAlt)
library.add(faHome);
//--------------------------------------------------------------------

export const MyContext = React.createContext({
  users: [{ name: 'alaa Ebrahem', userGroup: 1, deleted: false, id: 1 }
    , { name: 'aya Ebrahem', userGroup: 1, deleted: false, id: 2 },
  { name: 'sara Ebrahem', userGroup: 2, deleted: false, id: 3 }],
  authors: [{ name: 'alaa Ebrahem', userGroup: 3, deleted: false, id: 1 }
    , { name: 'aya Ebrahem', userGroup: 3, deleted: false, id: 2 },
  { name: 'sara Ebrahem', userGroup: 3, deleted: false, id: 3 }],

});
class App extends Component {
  state = {
    users:
     [{ name: 'alaa',password:'123456',image:"pexels-photo-614810.jpeg", userGroup: 1, deleted: false, id: 1 }
      , { name: 'aya',password:'123456', userGroup: 1,image:"pexels-photo-736716.jpeg", deleted: false, id: 2 },
    { name: 'sara',password:'123456', userGroup: 2,image:"pexels-photo-614810.jpeg", deleted: false, id: 3 }],
    authors:
     [{ name: 'alaa Ebrahem', userGroup: 3, deleted: false, id: 1 }
      , { name: 'aya Ebrahem', userGroup: 3, deleted: false, id: 2 }
   ],
    books:
     [{ name: 'alaa Ebrahem', userGroup: 3, deleted: false, id: 1 }
      , { name: 'aya Ebrahem', userGroup: 3, deleted: false, id: 2 },
    { name: 'sara Ebrahem', userGroup: 3, deleted: false, id: 3 }],
    categories:
     [{ name: 'alaa Ebrahem', userGroup: 3, deleted: false, id: 1 }
      , { name: 'aya Ebrahem', userGroup: 3, deleted: false, id: 2 },
    { name: 'sara Ebrahem', userGroup: 3, deleted: false, id: 3 }],
    login:{}
  };
  search = (name,password) => {
    const { users } = this.state;
    for (var i = 0; i < users.length; i++) {
      if (users[i].name === name && users[i].password === password ) {
        return users[i];
      }
    }
    return name;
  }
 
  deleteToDo = (id) => {
    const index = id;
    const newArray = this.state.data.map((item) => (
      item.id == index ? { ...item, deleted: !item.deleted } : item
    ))
    this.setState({ data: newArray });

  }
  doneToDo = (id) => {
    const index = id;

    const newArray = this.state.data.map((item) => (
      item.id == index ? { ...item, completed: !item.completed } : item
    ))
    this.setState({ data: newArray });
  }
  render() {
    const value = {
      state: this.state,
      search: this.search,
      deleteToDo: this.deleteToDo,
      doneToDo: this.doneToDo,
    
    }
    return (
      <MyContext.Provider value={value}>
        <Router><>
          <Switch>
            {/* <Login/> */}
            <Route exact path="/user/:id" component={HomePage} />

            {/* Just a Temporary route for testing */}
            <Route exact path="/userpage" component={UserNavbar} />

            <Route exact path="/author" component={AuthorProfile} />

            <Route exact path="/" component={Login} />

            <Route exact path="/book" component={BookProfile} />

            <Route exact path="/category" component={category} />
            ///////////////////////Admin routes//////////////////////
            <Route exact path="/admin/:id/:name/:image" component={Home} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/admin/books/:id/:name/:image" component={Book} />
            <Route exact path="/admin/authors/:id/:name/:image" component={Author} />
    
            <Route exact path="/admin/categories/:id/:name/:image" component={Categories} />
            <Route exact path="/admin/users/:id/:name/:image" component={Users} />
          /////////////////////////////////////////////////////////

          </Switch></>

        </Router>
      </MyContext.Provider>
    );
  }
}

export default App;
