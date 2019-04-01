import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import AuthorProfile from './components/AuthorProfile/AuthorProfile';

import UserNavbar from './components/Navbar/UserNavbar/UserNavbar'

import category from './components/category/category';
import Error from './components/ErrorPage/ErrorPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Login from './components/Login/Login';
///////////import admin pages/////////////////////
import Home from './components/Admin/Home/Home.js';
import Book from './components/Admin/Books/Books';
import Author from './components/Admin/Authors/Author';
import Users from './components/Admin/Users/Users';
import Categories from './components/Admin/Categories/Categories';
import HomePage from './components/Home/Home.js';
import UserProfile from './components/UserProfile/UserProfile';

import BookProfile from './components/BookProfile/BookProfile'
import book1 from '../src/assets/images/book1.jpg';
import book2 from '../src/assets/images/book2.jpg';
import book3 from '../src/assets/images/book3.jpg';
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
  books:
    [{ name: 'alaa Ebrahem', userGroup: 3, deleted: false, id: 1 }
      , { name: 'aya Ebrahem', userGroup: 3, deleted: false, id: 2 },
    { name: 'sara Ebrahem', userGroup: 3, deleted: false, id: 3 }],
  categories:
    [{ name: 'alaa Ebrahem', userGroup: 3, deleted: false, id: 1 }
      , { name: 'aya Ebrahem', userGroup: 3, deleted: false, id: 2 },
    { name: 'sara Ebrahem', userGroup: 3, deleted: false, id: 3 }],
  login: '',
});
class App extends Component {
  state = {
    users:
      [{ name: 'alaa', password: '123456', image: "pexels-photo-614810.jpeg", userGroup: 1, deleted: false, id: 1 }
        , { name: 'aya', password: '123456', userGroup: 1, image: "pexels-photo-736716.jpeg", deleted: false, id: 2 },
      { name: 'sara', password: '123456', userGroup: 2, image: "pexels-photo-614810.jpeg", deleted: false, id: 3 }],
    authors:
      [{ name: 'alaa Ebrahem', userGroup: 3, deleted: false, id: 1 }
        , { name: 'aya Ebrahem', userGroup: 3, deleted: false, id: 2 }
      ],
    books:
      [{ name: 'alaa Ebrahem', userGroup: 3, deleted: false, id: 1 }
        , { name: 'aya Ebrahem', userGroup: 3, deleted: false, id: 2 },
      { name: 'sara Ebrahem', userGroup: 3, deleted: false, id: 3 }],
    categories:
      [{ id: 1, name: "Fantasy", deleted: false }
        , { id: 2, name: "Science Fiction", deleted: false },
      { id: 3, name: "Romance", deleted: false },
      { id: 4, name: "Dystopia", deleted: false }
      ],
    login: false,
    Book: [
      {
          id: 1,
          photo: book1,
          name: "Divergent",
          categoryId: 1,
          authorId: 1,
          deleted: false
      },
      {
          id: 2,
          photo: book2,
          name: "Insergent",
          categoryId: 1,
          authorId: 1,
          deleted: false
      },
      {
          id: 3,
          photo: book3,
          name: "Allegiant",
          categoryId: 1,
          authorId: 1,
          deleted: false
      },
      
  ],
  }
  search = (name, password) => {
    const { users } = this.state;
    for (var i = 0; i < users.length; i++) {
      if (users[i].name === name && users[i].password === password) {
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
  addLogin = (user) => {
    const u = user;

    this.state.login = u;
  }
  addCategory = (category) => {
    const { categories } = this.state;
    this.setState({ categories: categories.concat(category) })
  }
  addBook = (Bk) => {
    const { Book } = this.state;
    this.setState({ Book: Book.concat(Bk) });
  }
  deleteBook = (id)=>{
    this.state.Book.filter(b=>(b.id===id)).map(b=>{b.deleted=true});
    const {Book}=this.state;
    this.setState({Book:Book});
  }
  editBook =(id, edited)=>{
    this.state.Book.filter(b=>(b.id===id)).map(b=>{
      debugger
      if(edited.photo!==''){
        b.photo=edited.photo;
      }
      if(edited.name!==''){
        b.name=edited.name;
      }
      if(edited.categoryId!=='Category'){
        b.categoryId=edited.categoryId;
      }
      if(edited.authorId!=='Author'){
        b.authorId=edited.authorId;
      }

    });
    const {Book}=this.state;

    this.setState({Book:Book});
  }
  searchCategory = (name) => {
    const { categories } = this.state;
    for (var i = 0; i < categories.length; i++) {
      if (categories[i].name.toLowerCase() === name.toLowerCase()) {
        return false;
      }
    }
    return true;
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
      addLogin: this.addLogin,
      doneToDo: this.doneToDo,
      addCategory: this.addCategory,
      addBook:this.addBook,
      deleteBook:this.deleteBook,
      editBook:this.editBook,
      searchCategory: this.searchCategory

    }
    return (
      <MyContext.Provider value={value}>
        <Router><>
          <Switch>
            {/* <Login/> */}
            <Route exact path="/user/:id" component={HomePage} />



            <Route exact path="/profile" component={UserProfile} />

            {/* Just a Temporary route for testing */}
            <Route exact path="/userpage" component={UserNavbar} />


            <Route exact path="/author" component={AuthorProfile} />

            <Route exact path="/" component={Login} />

            <Route exact path="/book" component={BookProfile} />

            <Route exact path="/category" component={category} />
            ///////////////////////Admin routes//////////////////////
            <Route exact path="/admin" component={Home} />
            {/* <Route exact path="/books" component={Books} /> */}
            <Route exact path="/admin/books" component={Book} />
            <Route exact path="/admin/authors" component={Author} />

            <Route exact path="/admin/categories" component={Categories} />
            <Route exact path="/admin/users" component={Users} />
            <Route exact path="/error" component={Error} />
            /////////////////////////////////////////////////////////
            <Route path='*' exact={true} component={ErrorPage} />
          </Switch></>

        </Router>
      </MyContext.Provider>
    );
  }
}

export default App;
