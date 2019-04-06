import React, { Component } from 'react'
import UserNavbar from '../Navbar/UserNavbar/UserNavbar';
import './UserProfile.scss';
import { NavLink } from "react-router-dom";
import Stars from '../shared/Stars/Stars';
import DropdownComponent from '../shared/Dropdown/Dropdown';
import PaginationComponent from '../shared/pagination/pagination';
import TempData from './TempData';
import { MyContext } from '../../App'

class BooksData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query:false,
            TempData: this.props.TempData,
            filterData: this.props.TempData,
        }
    }
    render() {
        return (
            <MyContext.Consumer>
                {(value) => (
                 
                    <table className="t-1">
                        <thead>
                            <tr>
                                <th>Cover</th>
                                <th>Name</th>
                                <th>Author</th>
                                <th>Avg Rating</th>
                                <th>Rating</th>
                                <th>Shelve</th>
                            </tr>
                        </thead>

                        {  
                            value.state.searchValue.trim() !== "" && this.state.query==false?
                            this.setState(prevState => {
                                const filterData = prevState.TempData.filter(element => {
                                    if( element.name.toLowerCase().includes(value.state.searchValue.toLowerCase()))
                                    {
                                        return element;
                                    }
                                });
                                if(filterData.length!==0){
                                    return {
                                    filterData,
                                    query:true
                                };
                                }
                               
                            }):
                            this.state.query==true && value.state.searchValue.trim() == ""?
                            this.setState({filterData:this.state.TempData,query:false})
                            
                            :this.state.filterData.map((book) => {
                                 this.state.query=false

                                    if (book.status === this.props.val) {
                                        return (
                                            <tbody>
                                                <tr key={book.id}>
                                                    <td><img src={book.cover} height="100" alt="cover" /></td>
                                                    <td><NavLink exact to={{ pathname: `/book/1`, }}>{book.name}</NavLink></td>
                                                    <td><NavLink exact to={{ pathname: `/author/1`, }}>{book.author}</NavLink></td>
                                                    <td><Stars /></td>
                                                    <td><Stars /></td>
                                                    <td><DropdownComponent>{book.status}</DropdownComponent></td>
                                                </tr>
                                            </tbody>
                                        )
                                    }
                                    else if (this.props.val === "all") {
                                        return (
                                            <tbody>
                                                <tr key={book.id}>

                                                    <td><img src={book.cover} height="100" alt="cover" /></td>
                                                    <td><NavLink exact to={{ pathname: `/book/1`, }}>{book.name}</NavLink></td>
                                                    <td><NavLink exact to={{ pathname: `/author/1`, }}>{book.author}</NavLink></td>
                                                    <td><Stars /></td>
                                                    <td><Stars /></td>
                                                    <td><DropdownComponent>{book.status}</DropdownComponent></td>
                                                </tr>
                                            </tbody>
                                        )
                                    }
                                })
                        }
                        
                    </table>
                )}
            </MyContext.Consumer>
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
                                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><BooksData val="all" TempData={TempData} /><PaginationComponent></PaginationComponent></div>
                                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><BooksData TempData={TempData} val="already read" /><PaginationComponent></PaginationComponent></div>
                                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><BooksData TempData={TempData} val="want to read" /><PaginationComponent></PaginationComponent></div>
                                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><BooksData TempData={TempData} val="currently reading" /><PaginationComponent></PaginationComponent></div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>

                        : this.props.history.push(`/user`))}
            </MyContext.Consumer>
        );
    }
}

export default UserProfile