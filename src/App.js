import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import AuthorProfile from './components/User/AuthorProfile/AuthorProfile';

import category from './components/User/category/category';
import Error from './components/ErrorPage/ErrorPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Login from './components/Login/Login';
import BookPage from './components/User/BookProfile/ListPage';
import authorsPage from './components/User/AuthorProfile/ListPage';

import aboutus from './components/User/AboutUs/AboutUs';

import termsandconditions from './components/User/TermsAndConditions/TermsAndCondition';
///////////import admin pages/////////////////////
import Home from './components/Admin/Home/Home.js';
import Book from './components/Admin/Books/Books';
import Author from './components/Admin/Authors/Author';
import Categories from './components/Admin/Categories/Categories';
import HomePage from './components/Home/Home.js';
import UserProfile from './components/User/UserProfile';
import { getBooks } from './API/Books';
import { deleteBook } from './API/Books';
import { EditBook } from './API/Books';
import { addBook } from './API/Books';

////////////////////////End Admin pages///////////////////////////

import BookProfile from './components/User/BookProfile/BookProfile'
import book1 from '../src/assets/images/book1.jpg';
import book2 from '../src/assets/images/book2.jpg';
import book3 from '../src/assets/images/book3.jpg';
import author from '../src/assets/images/author.jpg';
import author2 from '../src/assets/images/author2.jpg';
import CategorisList from '../src/components/User/CategoryList/CategoryList';
// -----------------------Font Awesome Import-------------------------
import { library } from '@fortawesome/fontawesome-svg-core'

import { faSearch, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faUserCircle, faSignOutAlt)
library.add(faHome);
//--------------------------------------------------------------------

export const MyContext = React.createContext();
class App extends Component {
  state = {
    users:
      [{ name: 'alaa', password: '123456', image: "pexels-photo-614810.jpeg", userGroup: 1, deleted: false, id: 1 }
        , { name: 'aya', password: '123456', userGroup: 1, image: "pexels-photo-736716.jpeg", deleted: false, id: 2 },
      { name: 'sara', password: '123456', userGroup: 2, image: "pexels-photo-614810.jpeg", deleted: false, id: 3 }],
    authors:
      [{ FN: 'alaa', LN: 'Ebrahim', DOB: '1/1/2010', image: author, deleted: false, id: '1' }
        , { FN: 'aya', LN: 'Ebrahim', DOB: '2/1/2012', image: author2, deleted: false, id: '2' }
      ],

    categories:
      [{ id: '1', name: "Fantasy", deleted: false }
        , { id: '2', name: "Science Fiction", deleted: false },
      { id: '3', name: "Romance", deleted: false },
      { id: '4', name: "Dystopia", deleted: false }
      ],
    login: false,
    Book: [],
    BookCurrstate: [],
    searchValue: ''
  }

  componentDidMount() {
    debugger
    getBooks()
      .then(res => {
        debugger
        const Book = res;
        this.setState({ Book })
      }).catch(err => {
        debugger
      })

  }
  search = (name, password) => {
    const { users } = this.state;
    const result = users.filter(u => u.name === name && u.password === password);
    if (result.length > 0) {
      return result[0];
    }
    else {
      return name;
    }

  }
  addLogin = (user) => {
    const u = user;
    this.setState({ login: u });
  }
  logout = () => {
    this.setState({ login: false });
  }
  addUser = (user) => {
    const { users } = this.state;
    this.setState({ users: users.concat(user) })
  }
  //categoru function
  addCategory = (category) => {
    const { categories } = this.state;
    this.setState({ categories: categories.concat(category) })
  }
  addBook = (Bk) => {
    addBook(Bk)
      .then(res => {
        debugger
        getBooks()
          .then(res => {
            debugger
            const Book = res;
            this.setState({ Book })
          }).catch(err => {
            debugger
          })
      })
      .catch(err => {
        debugger
      })
  }

  deleteBook = (id) => {
    deleteBook(id)
      .then(res => {
        debugger
        getBooks()
          .then(res => {
            debugger
            const Book = res;
            this.setState({ Book })
          }).catch(err => {
            debugger
          })
      })
      .catch(err => {
        debugger
      })
  }
  editBook = (edited) => {
    EditBook(edited)
      .then(res => {
        getBooks()
          .then(res => {
            debugger
            const Book = res;
            this.setState({ Book })
          }).catch(err => {
            debugger
          })

      }).catch(err => {
        debugger
      })
  }
  searchCategory = (name) => {
    const { categories } = this.state;
    const result = categories.filter(c => c.name.toLowerCase() === name.toLowerCase() && !(c.deleted));
    if (result.length > 0) {
      return false;
    }
    else {
      return true;
    }

  }

  deleteCategory = (id) => {
    const index = id;
    const newArray = this.state.categories.map((item) => (
      item.id === index ? { ...item, deleted: !item.deleted } : item
    ))

    this.setState({ categories: newArray });
  }
  editCategory = (id, name) => {
    const index = id;

    const newArray = this.state.categories.map((item) => (
      item.id === index ? { ...item, name: name } : item
    ))

    this.setState({ categories: newArray });
  }
  getCurrentBook = (id) => {

    const BookCurrstate = this.state.Book.filter(b => (b.id === id));
    // const {BookCurrstate}=this.state;
    this.setState({ BookCurrstate });
    this.state.BookCurrstate = BookCurrstate;
    console.log(this.state.BookCurrstate);
  }
  //////////////////////////////////////


  //author Functions
  addAuthor = (author) => {

    const { authors } = this.state;
    this.setState({ authors: authors.concat(author) });

  }
  deleteAuthor = (id) => {
    this.state.authors.filter(a => (a.id === id)).map(b => { b.deleted = true });
    const { authors } = this.state;
    this.setState({ authors: authors });
  }
  editAuthor = (id, edited) => {
    this.state.authors.filter(a => (a.id === id)).map(a => {

      if (edited.image !== '') {
        a.Image = edited.Image;
      }
      if (edited.FN !== '') {
        a.FN = edited.FN;
      }
      if (edited.LN !== '') {
        a.LN = edited.LN;
      }
      if (edited.DOB !== '') {
        a.DOB = edited.DOB;
      }

    });
    const { authors } = this.state;

    this.setState({ authors: authors });
  }
  Search = (text) => {
    this.state.searchValue = text;
    this.setState({ searchValue: text });
    console.log(this.state.searchValue)
  }
  //////////////////////////////////////

  render() {
    const value = {
      state: this.state,
      search: this.search,
      addLogin: this.addLogin,
      addBook: this.addBook,
      deleteBook: this.deleteBook,
      editBook: this.editBook,

      addCategory: this.addCategory,
      searchCategory: this.searchCategory,

      addCategory: this.addCategory,
      searchCategory: this.searchCategory,
      deleteCategory: this.deleteCategory,
      editCategory: this.editCategory,
      getCurrentBook: this.getCurrentBook,
      // BookCurrstate:this.BookCurrstate,

      deleteCategory: this.deleteCategory,
      editCategory: this.editCategory,

      addAuthor: this.addAuthor,
      deleteAuthor: this.deleteAuthor,
      editAuthor: this.editAuthor,
      logout: this.logout,
      addUser: this.addUser,
      Search: this.Search


    }
    return (
      <MyContext.Provider value={value}>
        <Router><>
          <Switch>


            <Route exact path="/user" component={HomePage} />

            <Route exact path="/profile" component={UserProfile} />
            <Route exact path="/author" component={AuthorProfile} />
            <Route exact path="/" component={Login} />

            {/* //////////////////// user category routes/////////////////////  */}
            <Route exact path="/category/:id" component={category} />
            <Route exact path="/categories" component={CategorisList} />
            <Route exact path="/book/:id" component={BookProfile} />
            <Route exact path="/author/:id" component={AuthorProfile} />
            <Route exact path="/authorsPage" component={authorsPage} />
            <Route exact path="/BookPage" component={BookPage} />

            <Route exact path="/aboutus" component={aboutus} />
            <Route exact path="/termsandconditions" component={termsandconditions} />

            <Route exact path="/admin" component={Home} />
            {/* <Route exact path="/books" component={Books} /> */}

            <Route exact path="/admin/books" component={Book} />
            <Route exact path="/admin/authors" component={Author} />
            <Route exact path="/admin/categories" component={Categories} />
            <Route exact path="/error" component={Error} />

            <Route path='*' exact={true} component={ErrorPage} />
          </Switch></>

        </Router>
      </MyContext.Provider>
    );
  }
}

export default App;
