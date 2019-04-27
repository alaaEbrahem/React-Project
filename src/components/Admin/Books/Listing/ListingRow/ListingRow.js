import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { MyContext } from '../../../../../App';
import edit from '../../../../../assets/images/edit-solid.png';
import remove from '../../../../../assets/images/trash-solid.png';
import '../../Book.scss';
import Options from './Options';
class ListingRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
            currPhoto:'',
            curr_id: '',
            currName: '',
            currCatID: '',
            currAuthID: ''
        };
    }

    handleClose() {
        this.setState({ show: false });
    }
    handleShow = (val) => (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;
        debugger
        const currentBook = val.state.Book.filter(b => b._id === id)
        this.setState({ show: true,currPhoto:currentBook[0].Photo, curr_id: currentBook[0]._id, currName: currentBook[0].Name, currCatID: currentBook[0].CategoryID, currAuthID: currentBook[0].AuthorID });
    }
    del = (deleteBook) => (e) => {
        e.preventDefault();
        debugger
        const id = e.target.dataset.id;
        deleteBook(id);
    }
    edit = (editBook) => (e) => {
        e.preventDefault();
        debugger
        const img=this.Image.value.substring(12);
        const editedBook = {
            Photo:img,
            _id: this.state.curr_id,
            Name: this.state.currName,
            CategoryID: this.catID.value,
            AuthorID: this.authID.value,
        }
        editBook(editedBook);
        this.setState({ show: false });
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ currName: value });
    }
    render() {
        debugger
        
        return (

            <MyContext.Consumer>
                {
                    value => (
                        value.state.Book.map(R => (<tr>
                            <td>{R._id}</td>
                            <td><img src={require(`../../../../../assets/images/${R.Photo}`)} alt="bookimg" /></td>
                            {/* <td><img src={edit} alt="bookimg" /></td> */}
                            <td>{R.Name}</td>
                            <td>{R.CategoryID}</td>
                            <td>{R.AuthorID}</td>
                            <td class="td">
                                {/* <FontAwesomeIcon icon={faEdit} onClick={this.handleShow} className="icon mr-3" /> */}
                                <img class="B" src={edit} data-id={R._id} onClick={this.handleShow(value)}></img>
                                <img class="B" src={remove} data-id={R._id} onClick={this.del(value.deleteBook)}></img>
                                {/* <FontAwesomeIcon icon={faTrash} className="icon" data-id={R.id} onClick={this.del(value.deleteBook)}/> */}
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit Book</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group as={Col} controlId="formBasicbook">

                                                <Form.Control type="text" ref={element => this.bookName = element} placeholder="Edit book Name" value={this.state.currName} onChange={this.handleChange}></Form.Control>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Control as="select" ref={element => this.catID = element}>
                                                    <option>{this.state.currCatID}</option>
                                                    <Options options={value.state.categories}/>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Control as="select" ref={element => this.authID = element}>
                                                    <option>{this.state.currAuthID}</option>
                                                    <Options options={value.state.authors}/>
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