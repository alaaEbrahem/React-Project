import React, {Component} from 'react'
import UserNavbar from '../Navbar/UserNavbar/UserNavbar';
import SideNav from '../Navbar/SideNav/SideNav';

class UserProfile extends Component{
    render(){
        return(
            <>
            <UserNavbar/>
            <SideNav />
            </>
        )
    }
}

export default UserProfile