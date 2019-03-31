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
            GooD Reads
    </div>
          <input id="menu-toggle" type="checkbox" />
          <label className='menu-button-container' >
            <div className='menu-button'></div>
          </label>
          <ul className="menu">
            <li><NavLink exact to={{
                pathname: `/admin`,
             
            }}>Home</NavLink></li>
            <li ><NavLink to={{
                 pathname: `/admin/books`,
              user: this.props.user 
            }}>Books</NavLink></li>
            <li ><NavLink to={{
                pathname: `/admin/authors`,
              user: this.props.user 
            }}>Authors</NavLink></li>
            <li ><NavLink to={{
                pathname: `/admin/categories`,
              user: this.props.user 
            }}>Categories</NavLink></li>
            <li ><NavLink to={{
                pathname: `/admin/users`,
              user: this.props.user 
            }}>Users</NavLink></li>
          </ul>
        </section>
      </div>
    );
  }
}
export default Navbar;