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

import ReactUploadImage from './components/imagetest';


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
// import { getAuthorID } from './API/Author';
// import { getCategoryID } from './API/Category';

import { getAuthors } from './API/Authors';
import { editAuthor } from './API/Authors';
import { deleteAuthor } from './API/Authors';
import { addAuthor } from './API/Authors';


import { getCategories } from './API/Categories';
import { deleteCategory } from './API/Categories';
import { EditCategory } from './API/Categories';
import { addCategory } from './API/Categories';

import { getUsers } from './API/user';
// import { EditUser } from './API/user';
// import { deleteUser } from './API/user';
import { addUser } from './API/user';
import { addLogin } from './API/user';


import { getProfile } from './API/profile';
import { editProfile } from './API/profile';
import {addProfile}from './API/profile';

////////////////////////End Admin pages///////////////////////////

import BookProfile from './components/User/BookProfile/BookProfile'
// import book1 from '../src/assets/images/book1.jpg';
// import book2 from '../src/assets/images/book2.jpg';
// import book3 from '../src/assets/images/book3.jpg';
// import author from '../src/assets/images/author.jpg';
// import author2 from '../src/assets/images/author2.jpg';
// import author3 from '../src/assets/images/author3.jpg';
// import author4 from '../src/assets/images/author4.jpg';
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

    users: [],

    authors: [],
    categories: [],

    login: false,
    Book: [],
    profileBooks: [],
    searchValue: ''
  }

  componentDidMount() {

    getBooks()
      .then(res => {
        const Book = res;
        this.setState({ Book })
      }).catch(err => {
        // debugger
      });

    getCategories().then(res => {
      const categories = res;
      this.setState({ categories })
    }).catch(err => {
    })
    getUsers().then(res => {
      const users = res;
      this.setState({ users })
    }).catch(err => {
    })
    getAuthors().then(res => {
      const authors = res;
      this.setState({ authors })
    }).catch(err => {
    });

    getProfile()
      .then(res => {
        debugger
        const profileBooks = res;
        this.setState({ profileBooks })
      }).catch(err => {
        debugger
      });

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
  addLoginContext = (user) => {
    const u = user;
    this.setState({ login: u });
  }
  logout = () => {
    this.setState({ login: false });
  }
  addUser = (u) => {
    debugger
    addUser(u)
      .then(res => {
        debugger
        getUsers()
          .then(res => {
            debugger
            const users = res;
            this.setState({ users })
          }).catch(err => {
            debugger
          })
      })
      .catch(err => {
        debugger
      })
  }
  Login = (u) => {
    addLogin(u).then(res => { })
    .catch(err => {
    })
  }
  //category function
  addCategory = (ca) => {
    addCategory(ca).then(res => {
      getCategories()
      .then(res => {
        const categories = res;
        this.setState({ categories })
      }).catch(err => {
      })
    })
    .catch(err => {

    })
  }


  deleteCategory = (id) => {
    deleteCategory(id)
      .then(res => {
        debugger
        getCategories()
          .then(res => {
            debugger
            const categories = res;
            this.setState({ categories })
          }).catch(err => {
            debugger
          })
      })
      .catch(err => {
        debugger
      })
  }
  editCategory = (edited) => {
    EditCategory(edited)
      .then(res => {
        getCategories()
          .then(res => {
      
            const categories = res;
            this.setState({ categories })
          }).catch(err => {
           
          })

      }).catch(err => {
      
      })
  }
  addBook = (Bk) => {
    addBook(Bk)
      .then(res => {
        getBooks().then(data => {
          const Book = data;
          this.setState({ Book })
        }).catch(err => {
        })
      }).catch(err => {
      })
  }

  editProfile = (pro) => {
    debugger
    editProfile(pro)
      .then(res => {
        debugger
        getProfile()
          .then(res => {
            debugger
            const profileBooks = res;
            this.setState({ profileBooks })
          }).catch(err => {
            debugger
          });
      }).catch(err => {
      })
  }


  addProfile = (pro) => {
    debugger
    addProfile(pro)
      .then(res => {
        debugger
        getProfile()
          .then(res => {
            debugger
            const profileBooks = res;
            this.setState({ profileBooks })
          }).catch(err => {
            debugger
          });
      }).catch(err => {
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
    EditBook(edited).then(res => {
      getBooks().then(res => {
        const Book = res;
        this.setState({ Book })
      }).catch(err => {
      })
    }).catch(err => {

    })
  }
  searchCategory = (name) => {
    const { categories } = this.state;
    const result = categories.filter(c => c.Name.toLowerCase() === name.toLowerCase() && !(c.deleted));
    if (result.length > 0) {
      return false;
    }
    else {
      return true;
    }

  }


  getCurrentBook = (id) => {

    const BookCurrstate = this.state.Book.filter(b => (b.id === id));
    // const {BookCurrstate}=this.state;
    this.setState({ BookCurrstate });
    this.state.BookCurrstate = BookCurrstate;
    console.log(this.state.BookCurrstate);
  }
  //////////////////////////////////////

  addAuthor = (a) => {
    debugger;
    addAuthor(a)
      .then(res => {
        getAuthors().then(data => {
          debugger;
          const authors = data;
          this.setState({ authors })
        }).catch(err => {
          debugger;

        })
      }).catch(err => {
      })
  }
  deleteAuthor = (id) => {
    deleteAuthor(id)
      .then(res => {
        getAuthors()
          .then(res => {
            const authors = res;
            this.setState({ authors })
          }).catch(err => {
          })
      })
      .catch(err => {
      })
  }
  editAuthor = (edited) => {

    editAuthor(edited)
      .then(res => {
        getAuthors()
          .then(res => {
            debugger
            const authors = res;
            this.setState({ authors })
          }).catch(err => {
          })
      }).catch(err => {
        debugger
      })
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
      addLoginContext: this.addLoginContext,
      addBook: this.addBook,
      deleteBook: this.deleteBook,
      editBook: this.editBook,
      editProfile:this.editProfile,
      addProfile:this.addProfile,
      addCategory: this.addCategory,
      searchCategory: this.searchCategory,

      addCategory: this.addCategory,
      searchCategory: this.searchCategory,
      deleteCategory: this.deleteCategory,
      editCategory: this.editCategory,
      getCurrentBook: this.getCurrentBook,
      // BookCurrstate:this.BookCurrstate,

      addAuthor: this.addAuthor,
      deleteAuthor: this.deleteAuthor,
      editAuthor: this.editAuthor,
      logout: this.logout,
      addUser: this.addUser,
      Search: this.Search,
      Login: this.Login

    }
    return (
      <MyContext.Provider value={value}>
        <Router><>

          <Switch>
          

          <Route exact path="/image" component={ReactUploadImage} />

            <Route exact path="/user" component={HomePage} />

            <Route exact path="/profile" component={UserProfile} />
            <Route exact path="/author" component={AuthorProfile} />
            <Route exact path="/admin/home" component={Home} />
            <Route exact path="/admin" component={Login} />
            {/* //////////////////// user category routes/////////////////////  */}
            <Route exact path="/category/:id" component={category} />
            <Route exact path="/categories" component={CategorisList} />
            <Route exact path="/book/:id" component={BookProfile} />
            <Route exact path="/author/:id" component={AuthorProfile} />
            <Route exact path="/authorsPage" component={authorsPage} />
            <Route exact path="/BookPage" component={BookPage} />

            <Route exact path="/aboutus" component={aboutus} />
            <Route exact path="/termsandconditions" component={termsandconditions} />


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
