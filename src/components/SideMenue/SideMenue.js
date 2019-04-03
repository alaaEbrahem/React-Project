import React from 'react';
import { faHome, faBook, faAddressCard, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../App.scss';
import './SideMenue.scss';
import { NavLink } from "react-router-dom";
import { MyContext } from '../../App'

class SideMenue extends React.Component {
  render() {
    
    return (
      <MyContext.Consumer>
      {value => (  
      <header className="header" role="banner">
        <div className="row">
          <h1 className="logo pt-4 col-12">
            <img width="100" height="73" src={value.state.login ?
              require(`../../assets/images/${value.state.login.image}`) : "https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg"}></img>
            <p>{value.state.login ? value.state.login.name : 'Def'}</p>

          </h1>
        </div>
        <div className="nav-wrap">
          <nav className="main-nav" role="navigation">
            <ul className="unstyled list-hover-slide">
              <li className="li">
                <NavLink exact to={{
                  pathname: `/admin`,
                }} 
                ><FontAwesomeIcon icon={faHome} className="ml-5 mr-5 icon" />
                  Dashboard</NavLink> </li>
            
              <li className="li"><NavLink exact to={{
                pathname: `/admin/books`,

              }} user={this.props.user}><FontAwesomeIcon icon={faBook} className="ml-5 mr-5 icon" />  Books</NavLink></li>
              <li className="li"><NavLink exact to={{
                pathname: `/admin/authors`,
                user: this.props.user
              }} ><FontAwesomeIcon icon={faAddressCard} className="ml-5 mr-5 icon" />Authors</NavLink></li>
              <li className="li"><NavLink exact to={{
                pathname: `/admin/categories`,

              }} ><FontAwesomeIcon icon={faAlignJustify} className="ml-5 mr-5 icon" />Categoties</NavLink></li>
            </ul>
          </nav>
          <ul className="social-links list-inline unstyled list-hover-slide">            
            <li><p className="names">Rawan</p></li>
            <li><p className="names">Bassant</p></li>
            <li><p className="names">Mirhan</p></li>
            <li><p className="names">Alaa</p></li>
          </ul>
        </div>
      </header>

)}
</MyContext.Consumer>
);
}
}
export default SideMenue;