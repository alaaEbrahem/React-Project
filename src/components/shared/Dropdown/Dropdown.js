import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

class DropdownComponent extends Component {
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
            "Want to read": this.props.children === "want to read"? true : false,
            "currently reading":  this.props.children === "currently reading" ? true : false,
            "already read":  this.props.children === "already read"? true : false
        };
        this.handleDropdown = this.handleDropdown.bind(this);
    }
    handleDropdown(e) {
        if (e === "1") {
            this.setState({
                "Want to read": true,
                "currently reading": false,
                "already read": false
            });
        }
        else if (e === "2") {
            this.setState({
                "Want to read": false,
                "currently reading": true,
                "already read": false
            });
        }
        else if (e === "3") {
            this.setState({
                "Want to read": false,
                "currently reading": false,
                "already read": true
            });
        }
    }
    render() {
        const { data } = this.state;
        return (
            <Dropdown onSelect={(e) => this.handleDropdown(e)}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" >
                    {this.state["Want to read"] ? "want to read" :(this.state["currently reading"] ?"currently reading" : "already read")}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="1" onChange={this.handleDropdown}> {data.readingState[0]}</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onChange={this.handleDropdown}> {data.readingState[1]}</Dropdown.Item>
                    <Dropdown.Item eventKey="3" onChange={this.handleDropdown}> {data.readingState[2]}</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
export default DropdownComponent;