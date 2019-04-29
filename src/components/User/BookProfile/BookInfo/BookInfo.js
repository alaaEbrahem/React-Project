import React, { Component } from 'react';
import './BookInfo.scss';
// import DropdownComponent from '../../../shared/Dropdown/Dropdown';
import StaticStars from '../../../shared/StaticStars/StaticStars';
import { Col, Row } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { MyContext } from '../../../../App';

class BookInfo extends Component {
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
            <MyContext.Consumer>
            {(value) => (
            <Col md="11" className="m-auto py-4">
                <Row>
                    <Col md="3" sm="12" className="text-center m-auto ">
                        <div className="fliptextcard m-auto">
                            <div className="fliptextcard__images m-auto">
                                <div className="fliptextcard__frontimg1" style={{ backgroundImage: `url(${this.props.bookImg})` }}>
                                </div>
                                <div className="fliptextcard__backface" style={{ backgroundImage: `url(${this.props.bookbackImg})` }}>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        {/* <DropdownComponent></DropdownComponent> */}
                        <Dropdown onSelect={this.handleDropdown(value.addProfile, this.props.bookName,this.props.authorName)}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                {this.state["Want to read"] ? "want to read" : (this.state["currently reading"] ? "currently reading" : "already read")}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="1" onChange={this.handleDropdown}> {data.readingState[0]}</Dropdown.Item>
                                <Dropdown.Item eventKey="2" onChange={this.handleDropdown}> {data.readingState[1]}</Dropdown.Item>
                                <Dropdown.Item eventKey="3" onChange={this.handleDropdown}> {data.readingState[2]}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <p className="greyText mt-1">My rating: </p>
                        <StaticStars>5</StaticStars>
                    </Col>
                    <Col md="9">
                        <h4>{this.props.bookName}</h4>
                        <p className="my-1">by: {this.props.authorName}</p>
                        <StaticStars>4</StaticStars>
                        <span className="greyText">{this.props.ratingdesc}</span>
                        <p className="mt-1">{this.props.description}</p>
                    </Col>
                </Row>
            </Col>
            )}
            </MyContext.Consumer>
        )
    }
}
export default BookInfo;