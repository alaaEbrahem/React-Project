import React from 'react';
import { faHome, faUsers, faBook, faAddressCard, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../App.scss';
import './SideMenue.scss';
import { NavLink } from "react-router-dom";


class SideMenue extends React.Component {
  render() {
    return (
      <header className="header" role="banner">
        <div className="row">
          <h1 className="logo pt-4 col-12">
            <img width="100" height="73" src={this.props.image ?
              require(`../../assets/images/${this.props.image}`) : "https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg"}></img>
            <p>{this.props.name ? this.props.name : 'Def'}</p>

          </h1>
        </div>
        <div className="nav-wrap">
          <nav className="main-nav" role="navigation">
            <ul className="unstyled list-hover-slide">
              <li className="li">
                <NavLink exact to={{
                  pathname: `/admin/${this.props.id}/${this.props.name}/${this.props.image}`,
                }} href="#"><FontAwesomeIcon icon={faHome} className="ml-5 mr-5 icon" />
                  Dashboard</NavLink> </li>
              <li className="li"><NavLink exact to={{
                pathname: `/admin/users/${this.props.id}/${this.props.name}/${this.props.image}`,
              }}><FontAwesomeIcon icon={faUsers} className="ml-5 mr-5 icon" /> Users</NavLink></li>
              <li className="li"><NavLink exact to={{
                pathname: `/admin/books/${this.props.id}/${this.props.name}/${this.props.image}`,

              }} user={this.props.user}><FontAwesomeIcon icon={faBook} className="ml-5 mr-5 icon" />  Books</NavLink></li>
              <li className="li"><NavLink exact to={{
                pathname: `/admin/authors/${this.props.id}/${this.props.name}/${this.props.image}`,
                user: this.props.user
              }} ><FontAwesomeIcon icon={faAddressCard} className="ml-5 mr-5 icon" />Authors</NavLink></li>
              <li className="li"><NavLink exact to={{
                pathname: `/admin/categories/${this.props.id}/${this.props.name}/${this.props.image}`,

              }} ><FontAwesomeIcon icon={faAlignJustify} className="ml-5 mr-5 icon" />Categoties</NavLink></li>
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