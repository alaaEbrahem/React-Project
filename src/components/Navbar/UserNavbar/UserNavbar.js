import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user2 from '../../../assets/images/user2.jpg';
import { Image } from 'react-bootstrap';
import './UserNavbar.scss';

class UserNavbar extends Component {
    render() {
        return (

            <div className="nav-wrap">
                <nav className="user-nav navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" >good<span className="font-weight-bold">reads</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item mr-4">
                                <a className="nav-link" >Home</a>
                            </li>
                            <li className="nav-item mr-4">
                                <a className="nav-link" href="#">Categories</a>
                            </li>
                            <li className="nav-item mr-4">
                                <a className="nav-link" href="#">Books</a>
                            </li>
                            <li className="nav-item mr-4">
                                <a className="nav-link" href="#">Authors</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0 m-auto">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"><FontAwesomeIcon icon="search" /></button>
                        </form>
                        <div className="fontIcon ml-auto align-content-center">
                            <Image src={user2} roundedCircle alt="user-img" />
                            <span className="px-3">User Name</span>
                            <FontAwesomeIcon icon="sign-out-alt" className="ml-5" />
                        </div>
                    </div>
                </nav>
                <hr className="m-0"></hr>
            </div>
        )
    }
}

export default UserNavbar