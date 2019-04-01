import React, {Component} from 'react';
import { Dropdown } from 'react-bootstrap';



class DropdownComponent extends Component{
    render() {
        return (
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Want to read
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">currently reading</Dropdown.Item>
                <Dropdown.Item href="#/action-2">read</Dropdown.Item>
                <Dropdown.Item href="#/action-3">want to read</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        )
    }

   
}

export default DropdownComponent;