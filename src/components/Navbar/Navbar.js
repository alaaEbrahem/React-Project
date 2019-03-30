import React from 'react';
import '../../App.scss'
import './Navbar.scss';
import {NavLink } from "react-router-dom";



class Navbar extends React.Component {
  render() {
    return (
      <div className="container-fluid no-gutters">
        <section className="top-nav">
          <div className="ml-5  logo">
            GooD Reades
    </div>
          <input id="menu-toggle" type="checkbox" />
          <label className='menu-button-container' for="menu-toggle">
            <div className='menu-button'></div>
          </label>
          <ul className="menu">
            <li><NavLink exact to="/admin">Home</NavLink></li>
            <li ><NavLink to="/admin/books">Books</NavLink></li>
            <li ><NavLink to="/admin/authors">Authors</NavLink></li>
            <li ><NavLink to="/admin/categories">Categories</NavLink></li>
            <li ><NavLink to="/admin/users">Users</NavLink></li>
          </ul>
        </section>
      </div>
    );
  }
}
export default Navbar;