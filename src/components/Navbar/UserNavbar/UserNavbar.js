import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user2 from '../../../assets/images/user2.jpg';
import { Image } from 'react-bootstrap';
import './UserNavbar.scss';
import { NavLink } from "react-router-dom";
import { MyContext } from '../../../App'
import { withRouter } from "react-router";


class UserNavbar extends Component {
    handleLogOut = (value) => (e) => {
        value.logout();
        this.props.history.push(`/user`);
    }
    handleChange=(Search)=>(e)=>{
        const val=e.target.value;
        Search(val);
    }
    render() {
        return (
            <MyContext.Consumer>
                {value => (
                   
                        <div className="nav-wrap user-NavBar">
                            <nav className="user-nav navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" >good<span className="font-weight-bold">reads</span></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item mr-4">
                                            <NavLink exact to={{
                                                pathname: `/user`,
                                            }}>Home</NavLink>
                                        </li>
                                        <li className="nav-item mr-4">
                                        {value.state.login?  <NavLink exact to={{
                                                pathname: `/profile`,
                                            }}>Profile</NavLink>:""}
                                        </li>
                                        <li className="nav-item mr-4">
                                            <NavLink exact to={{
                                                pathname: `/categories`,
                                            }}>Categories</NavLink>
                                        </li>
                                        <li className="nav-item mr-4">
                                            <NavLink exact to={{
                                                pathname: `/BookPage`,
                                            }}>Books</NavLink>
                                        </li>
                                        <li className="nav-item mr-4">
                                            <NavLink exact to={{
                                                pathname: `/authorsPage`,
                                            }}>Authors</NavLink>
                                        </li>
                                    </ul>
                                    <form className="form-inline my-2 my-lg-0 m-auto">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange(value.Search)} />

                                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"><FontAwesomeIcon icon="search" /></button>
                                    </form>
                                    <div className="fontIcon ml-auto align-content-center">
                                        <Image width="73" height="73" src={value.state.login.image!==''&&value.state.login ? require(`../../../assets/images/${value.state.login.image}`) : user2} roundedCircle alt="user-img" />
                                        <span className="px-3">{value.state.login ? value.state.login.name : 'User Name'}</span>
                                       {value.state.login?<FontAwesomeIcon onClick={this.handleLogOut(value)} icon="sign-out-alt" className="ml-5" />:''} 
                                    </div>
                                </div>
                            </nav>
                            <hr className="m-0"></hr>
                        </div>
                        
                )}
            </MyContext.Consumer>
        );
    }
}
export default withRouter(UserNavbar);
