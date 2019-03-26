import React from 'react';
import './Navbar.scss'
import '../../App.scss'


class Navbar extends React.Component {
    render() {
        return (
            <div className="container-fluid no-gutters">
          <section class="top-nav">
    <div>
     React Team-4
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
    
      <li>books</li>
      <li>autors</li>
      <li>categories</li>
     
    </ul>
  </section>
            </div>
            );
        }
       }
           export default Navbar;