import React from 'react';
import { faHome ,faUsers,faBook,faAddressCard,faAlignJustify} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../App.scss';
import './SideMenue.scss';

class SideMenue extends React.Component {
    render() {
        return (
          

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
        <li className="li"><a href="#"><FontAwesomeIcon icon={faHome} className="ml-5 mr-5 icon" />  Dashboard</a> </li>
        <li className="li"><a href="#"><FontAwesomeIcon icon={faUsers} className="ml-5 mr-5 icon" /> Users</a></li>
        <li className="li"><a href="#"><FontAwesomeIcon icon={faBook} className="ml-5 mr-5 icon" />  Books</a></li>
        <li className="li"><a href="#"><FontAwesomeIcon icon={faAddressCard} className="ml-5 mr-5 icon" />Authors</a></li>
        <li className="li"><a href="#"><FontAwesomeIcon icon={faAlignJustify} className="ml-5 mr-5 icon" />Categoties</a></li>
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

        );
    }
   }
 export default SideMenue;