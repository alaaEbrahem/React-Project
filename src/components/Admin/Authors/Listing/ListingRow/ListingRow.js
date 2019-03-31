import React from 'react';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, Button, Form, Col } from 'react-bootstrap';
import author from '../../../../../assets/images/author.jpg'
import author2 from '../../../../../assets/images/author2.jpg'



class ListingRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
            data: [
                {
                    id: 1,
                    photo: author,
                    firstName: "Veronica",
                    lastName: "Roth",
                    DateOfBirth: 'August 19, 1988',
                    deleted: false
                },
                {
                    id: 2,
                    photo: author2,
                    firstName: "Ahmed",
                    lastName: "Khairy El-omary",
                    DateOfBirth: 'January 01, 1970',
                    deleted: false
                },
               
                
            ],
        };
    }
    handleClose() {
        this.setState({ show: false });
    }
    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            this.state.data.map(R => (<tr>
                <td>{R.id}</td>
                <td><img src={R.photo} alt="bookimg" width="70px"/></td>

                <td>{R.firstName}</td>
                <td>{R.lastName}</td>
                <td>{R.DateOfBirth}</td>
                <td>
                    <FontAwesomeIcon icon={faEdit} onClick={this.handleShow} className="icon mr-3" />
                    <FontAwesomeIcon icon={faTrash} className="icon" />
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Author Info</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group as={Col} controlId="formBasicbook">
                                    <Form.Control type="text" placeholder="Edit Author FirstName" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicbook">
                                    <Form.Control type="text" placeholder="Edit Author LastName" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicbook">
                                    <Form.Control type="date"/>
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Control type="file" />
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Cancel
                              </Button>
                                    <Button variant="success" onClick={this.handleClose}>
                                        Edit Name
                              </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </td>
            </tr>
            )
            )
        )
    }
}
export default ListingRow;