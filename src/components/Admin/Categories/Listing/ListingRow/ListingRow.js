import React from 'react';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, Button, Form } from 'react-bootstrap';

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
                    name: "Fantasy",
                    deleted: false
                },
                {
                    id: 2,
                    name: "Science Fiction",
                    deleted: false
                },
                {
                    id: 3,
                    name: "Romance",
                    deleted: false
                },
                {
                    id: 4,
                    name: "Dystopia",
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
                <td>{R.name}</td>
                <td>
                    <FontAwesomeIcon icon={faEdit} onClick={this.handleShow} className="icon mr-3" />
                    <FontAwesomeIcon icon={faTrash} className="icon" />
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="enter new name"/>
                                   
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