import React from 'react';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { MyContext } from '../../../../../App';



class ListingRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
            ID: ''
        };
    }
    handleClose() {
        this.setState({ show: false });
    }
    handleShow = (e) => {
        e.preventDefault();
        debugger
        const id = e.target.dataset.id;
        this.setState({ show: true, ID: id });
    }
    del = (deleteBook) => (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;
        deleteBook(+id);
    }
    edit = (EditBook) => (e) => {
        e.preventDefault();
        // const id=e.target.dataset.id;
        const img=this.Image.value.substring(12);
        console.log(img);
        const editBook = {
            // photo: `../src/assets/images/${img}`,
            photo:'',
            name: this.bookName.value,
            categoryId: this.catID.value,
            authorId: this.authID.value,
        }
        debugger
        EditBook(+this.state.ID, editBook);
        this.setState({ show: false });
    }
    render() {
        return (

            <MyContext.Consumer>
                {

                    value => (
                        value.state.Book.filter(R => (R.deleted === false)).map(R => (<tr>
                            <td>{R.id}</td>
                            <td><img src={R.photo} alt="bookimg" /></td>

                            <td>{R.name}</td>
                            <td>{R.categoryId}</td>
                            <td>{R.authorId}</td>
                            <td>
                                {/* <FontAwesomeIcon icon={faEdit} onClick={this.handleShow} className="icon mr-3" /> */}
                                <button data-id={R.id} onClick={this.handleShow}>Edit</button>
                                <button data-id={R.id} onClick={this.del(value.deleteBook)}>Delete</button>
                                {/* <FontAwesomeIcon icon={faTrash} className="icon" data-id={R.id} onClick={this.del(value.deleteBook)}/> */}
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit Book</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group as={Col} controlId="formBasicbook">
                                                <Form.Control type="text" ref={element => this.bookName = element} placeholder="Edit book Name" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Control as="select" ref={element => this.catID = element}>
                                                    <option>Category</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>...</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Control as="select" ref={element => this.authID = element}>
                                                    <option>Author</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>...</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group as={Col} >
                                                <Form.Control type="file" ref={element => this.Image = element}/>
                                            </Form.Group>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={this.handleClose}>
                                                    Cancel
                              </Button>
                                                <Button variant="success" onClick={this.edit(value.editBook)}>
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
            </MyContext.Consumer>
        )
    }
}
export default ListingRow;