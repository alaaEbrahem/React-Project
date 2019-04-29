import React, { Component } from 'react';
import '../../../../../App.scss';
import { Col, Row } from 'react-bootstrap';
import DropdownComponent from '../../../../shared/Dropdown/Dropdown';
import Stars from '../../../../shared/Stars/Stars';
import './stars.scss';
import './AuthorBook.scss';
import { Dropdown } from 'react-bootstrap';
import { MyContext } from '../../../../../App';

class AuthorBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                readingState: [
                    "Want to read",
                    "currently reading",
                    "already read"
                ],
            },
            "Want to read": this.props.children === "want to read" ? true : false,
            "currently reading": this.props.children === "currently reading" ? true : false,
            "already read": this.props.children === "already read" ? true : false
        };
        // this.handleDropdown = this.handleDropdown.bind(this);
    }
    handleDropdown=(addProfile,bookName,authorName)=>(e)=>{
        debugger
        var state="";
        if (e === "1") {
            state="want to read";
            this.setState({
                "Want to read":true,
                "currently reading":false,
                "already read":false
            })
        }
        else if (e === "2") {
            state="currently reading";
            this.setState({
                "Want to read":false,
                "currently reading":true,
                "already read":false
            })
        }
        else if (e === "3") {
            state="already read";
            this.setState({
                "Want to read":false,
                "currently reading":false,
                "already read":true
            })
        }
        const addPro={
            Name:bookName,
            Author:authorName,
            AvgRating:"0",
            Rating:"0",
            Shelve:state
        }
        addProfile(addPro)
    }



    render() {
        const { data } = this.state;
        return (
            <>
                <MyContext.Consumer>
                    {(value) => (
                        <Col md="12 m-auto">
                            <Row>
                                <Col md="1" sm="12" className="pr-0 text-center">
                                    <img src={this.props.bookImg} alt="bookname" className="img-fluid pr-0" />
                                </Col>
                                <Col md="9" sm="12">
                                    <p>{this.props.title}</p>
                                    <p> <span className="greyText">(Goodreads Author)</span></p>

                                    <span className="greyText">{this.props.ratingdesc}</span>
                                </Col>

                                <Col md="2" className="m-auto">
                                    <div className="text-center">
                                        {/* <DropdownComponent></DropdownComponent> */}
                                        <Dropdown onSelect={this.handleDropdown(value.addProfile, this.props.title)}>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                                {this.state["Want to read"] ? "want to read" : (this.state["currently reading"] ? "currently reading" : "already read")}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item eventKey="1" onChange={this.handleDropdown}> {data.readingState[0]}</Dropdown.Item>
                                                <Dropdown.Item eventKey="2" onChange={this.handleDropdown}> {data.readingState[1]}</Dropdown.Item>
                                                <Dropdown.Item eventKey="3" onChange={this.handleDropdown}> {data.readingState[2]}</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <p className="greyText">Rate this book</p>
                                        <Stars />

                                    </div>
                                </Col>
                            </Row>
                            <hr />
                        </Col>
                    )}
                </MyContext.Consumer>
            </>
        )
    }
}
export default AuthorBook;