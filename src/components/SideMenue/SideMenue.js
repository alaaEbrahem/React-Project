import React from 'react';

import '../../App.scss';
import './SideMenue.scss';




class SideMenue extends React.Component {
    render() {
        return (
          
<div className="container no-gutters">
<div className="col-sm-3 col-3">
<header className="header" role="banner">
<div className="row">
  <h1 className="logo pt-4 col-12">
  <img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg"></img>
  <h2>John D.</h2>
   
    {/* <a href="#">Team <span>Four</span></a> */}
  </h1>
  </div>
  <div className="nav-wrap">
    <nav className="main-nav" role="navigation">
      <ul className="unstyled list-hover-slide">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Users</a></li>
        <li><a href="#">Books</a></li>
        <li><a href="#">Authors</a></li>
        <li><a href="#">Categoties</a></li>
      </ul>
    </nav>
    <ul className="social-links list-inline unstyled list-hover-slide">
      <li><a href="#">Alaa</a></li>
      <li><a href="#">Rawan</a></li>
      <li><a href="#">Bassant</a></li>
      <li><a href="#">Mirhan</a></li>
    </ul>
  </div>
</header>
</div>
</div>
        );
    }
   }
 export default SideMenue;