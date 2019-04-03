import React, { Component } from 'react'
import UserNavbar from '../Navbar/UserNavbar/UserNavbar';
import './UserProfile.scss';
import { NavLink } from "react-router-dom";
import Stars from '../shared/Stars/Stars';
import  DropdownComponent  from '../shared/Dropdown/Dropdown';
import PaginationComponent from '../shared/pagination/pagination';
import TempData from './TempData';
import { MyContext } from '../../App'

class BooksData extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <table className="t-1">
            <tr>
                <th>Cover</th>
                <th>Name</th> 
                <th>Author</th>
                <th>Avg Rating</th>
                <th>Rating</th>
                <th>Shelve</th>
            </tr>
            { 
                this.props.TempData.map((book) => {
                     if(book.status === this.props.val){
                        return(
                            <tr key={book.id}>
                                <td>{book.cover}</td>
                                <td><NavLink exact to={{pathname: `/book`,}}>{book.name}</NavLink></td>
                                <td><NavLink exact to={{pathname: `/author`,}}>{book.author}</NavLink></td>
                                <td><Stars/></td>
                                <td><Stars/></td>
                                {/* <td>
                                <Dropdown className="m-auto text-center" as={ButtonGroup}>
                                    <Button variant="success">{book.status}</Button>
                                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                                    <Dropdown.Menu>
                                        <Dropdown.Item hred="#/action-1">Want to read</Dropdown.Item>
                                        <Dropdown.Item hred="#/action-1">Already read</Dropdown.Item>
                                        <Dropdown.Item hred="#/action-2">Currently reading</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </td> */}
                                <td><DropdownComponent/></td>
                            </tr>
                        )
                    }
                    else if(this.props.val === "all")
                    {
                        return(
                            <tr key={book.id}>
                                <td>{book.cover}</td>
                                <td><NavLink exact to={{pathname: `/book`,}}>{book.name}</NavLink></td>
                                <td><NavLink exact to={{pathname: `/author`,}}>{book.author}</NavLink></td>
                                <td><Stars/></td>
                                <td><Stars/></td>
                                {/* <td><Dropdown className="m-auto text-center" as={ButtonGroup}>
                                    <Button variant="success">{book.status}</Button>
                                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                                    <Dropdown.Menu>
                                        <Dropdown.Item hred="#/action-1">Want to read</Dropdown.Item>
                                        <Dropdown.Item hred="#/action-1">Already read</Dropdown.Item>
                                        <Dropdown.Item hred="#/action-2">Currently reading</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown></td> */}
                                <td><DropdownComponent/></td>
                            </tr>
                        )
                    }
                    
                    }
                    )
            }
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr> 
            </table>
        )
    }
}

class UserProfile extends Component {
    render() {
        return (
            <MyContext.Consumer>
        {value => (
          value.state.login ?
            <React.Fragment>
                <UserNavbar />
                <div className="row no-gutters m-4 tab-wrapper">
                <div className="col-md-3 p-3">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">All</a>
                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Already Read</a>
                    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Want to read</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Currently reading</a>
                    </div>
                </div>
                <div className="col-md-9 p-3">
                    <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><BooksData val="all" TempData={TempData}/><PaginationComponent></PaginationComponent></div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><BooksData TempData={TempData} val="already read"/><PaginationComponent></PaginationComponent></div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><BooksData TempData={TempData} val="want to read"/><PaginationComponent></PaginationComponent></div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><BooksData TempData={TempData} val="currently reading"/><PaginationComponent></PaginationComponent></div>
                    </div>
                </div>
                </div>
                </React.Fragment> : this.props.history.push(`/`)

)}
</MyContext.Consumer>
);
}
}

export default UserProfile