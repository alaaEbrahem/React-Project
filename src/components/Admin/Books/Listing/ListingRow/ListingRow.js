import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { MyContext } from '../../../../../App';
import edit from '../../../../../assets/images/edit-solid.png';
import remove from '../../../../../assets/images/trash-solid.png';
import '../../Book.scss';



class ListingRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
            ID: '',
            name: '',
            catID: '',
            authID: ''
        };
    }
    handleClose() {
        this.setState({ show: false });
    }
    handleShow = (val) => (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;
        debugger
        val.getCurrentBook(id);
        // console.log(val.state.BookCurrstate[0].name);
        this.setState({ show: true, ID: id });
        this.state.name = val.state.BookCurrstate[0].name;
        this.state.catID = val.state.BookCurrstate[0].categoryId;
        this.state.authID = val.state.BookCurrstate[0].authorId;
        // console.log(this.state)
    }
    del = (deleteBook) => (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;
        deleteBook(id);
    }
    edit = (EditBook) => (e) => {
        e.preventDefault();
        // const id=e.target.dataset.id;
        const img = this.Image.value.substring(12);
        console.log(img);
        const editBook = {
            // photo: `../src/assets/images/${img}`,
            photo: '',
            name: this.bookName.value,
            categoryId: this.catID.value,
            authorId: this.authID.value,
        }
        debugger
        EditBook(this.state.ID, editBook);
        this.setState({ show: false });
    }
    handleChange = (e) => {

        const value = e.target.value;
        this.setState({ name: value });
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
                            <td class="td">
                                {/* <FontAwesomeIcon icon={faEdit} onClick={this.handleShow} className="icon mr-3" /> */}
                                <img class="B" src={edit} data-id={R.id} onClick={this.handleShow(value)}></img>
                                <img class="B" src={remove} data-id={R.id} onClick={this.del(value.deleteBook)}></img>
                                {/* <FontAwesomeIcon icon={faTrash} className="icon" data-id={R.id} onClick={this.del(value.deleteBook)}/> */}
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit Book</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group as={Col} controlId="formBasicbook">

                                                <Form.Control type="text" ref={element => this.bookName = element} placeholder="Edit book Name" value={this.state.name} onChange={this.handleChange}></Form.Control>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Control as="select" ref={element => this.catID = element}>
                                                    <option>{this.state.catID}</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>...</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Control as="select" ref={element => this.authID = element}>
                                                    <option>{this.state.authID}</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>...</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group as={Col} >
                                                <Form.Control type="file" ref={element => this.Image = element} />
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