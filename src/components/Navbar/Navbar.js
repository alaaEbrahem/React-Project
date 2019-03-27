import React from 'react';
import './Navbar.scss'
import '../../App.scss'


class Navbar extends React.Component {
    render() {
        return (
            <div className="container-fluid no-gutters">
          <section className="top-nav">
    <div className="ml-5 pl-5">
     React Team-4
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' for="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
    <li className="active">Home</li>
      <li >books</li>
      <li >autors</li>
      <li >categories</li>
    </ul>
  </section>
 </div>
  );
        }
       }
           export default Navbar;