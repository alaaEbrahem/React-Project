import React from 'react';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, Button, Form, Col } from 'react-bootstrap';
import book1 from '../../../../../assets/images/book1.jpg'
import book2 from '../../../../../assets/images/book2.jpg'
import book3 from '../../../../../assets/images/book3.jpg'


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
                    photo: book1,
                    name: "Divergent",
                    categoryId: 1,
                    authorId: 1,
                    deleted: false
                },
                {
                    id: 2,
                    photo: book2,
                    name: "Insergent",
                    categoryId: 1,
                    authorId: 1,
                    deleted: false
                },
                {
                    id: 3,
                    photo: book3,
                    name: "Allegiant",
                    categoryId: 1,
                    authorId: 1,
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
                <td><img src={R.photo} alt="bookimg" /></td>

                <td>{R.name}</td>
                <td>{R.categoryId}</td>
                <td>{R.authorId}</td>
                <td>
                    <FontAwesomeIcon icon={faEdit} onClick={this.handleShow} className="icon mr-3" />
                    <FontAwesomeIcon icon={faTrash} className="icon" />
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Book</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group as={Col} controlId="formBasicbook">
                                    <Form.Control type="text" placeholder="Edit book Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Control as="select">
                                        <option>Category</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Control as="select">
                                        <option>Author</option>
                                        <option>...</option>
                                    </Form.Control>
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