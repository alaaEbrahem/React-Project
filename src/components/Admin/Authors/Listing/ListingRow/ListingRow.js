import React from 'react';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, Button, Form, Col } from 'react-bootstrap';

import { MyContext } from '../../../../../App';



class ListingRow extends React.Component {

    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
            newFN: this.props.R.FN,
            newLN: this.props.R.LN,


        };
    }
    handleChange = (e) => {
        const value = e.target.value;
        if (e.target.dataset.id === 'FN') {
            this.setState({ newFN: value, error: '' });
        }
        else {
            this.setState({ newLN: value, error: '' });
        }
    }
 
    handleClose() {
        this.setState({ show: false });
    }
    handleShow() {
        this.setState({ show: true });
    }
    handleDelete = (value) => (e) => {
        const id = this.props.R._id;
        value.deleteAuthor(id); 
    }
    handleEdit = (value) => (e) => {
        // *
        e.preventDefault();
        const id = this.props.R._id;
      //  const img=this.Image.value.substring(12);
        
      const editAuthor = {
            FN: this.state.newFN,
            LN:this.state.newLN,
            DOB: this.DOB.value,
        }
        value.editAuthor(id, editAuthor);
        this.setState({ show: false });
    }
    render() {
        return (
            <MyContext.Consumer>
                {
                    value => (
                        <tr>
                            <td>{this.props.R.id}</td>
                            <td><img src={this.props.R.image} alt="Author" width="70px" /></td>

                            <td>{this.props.R.FN}</td>
                            <td>{this.props.R.LN}</td>
                            <td>{this.props.R.DOB}</td>
                            <td>
                                <FontAwesomeIcon icon={faEdit} onClick={this.handleShow} className="icon mr-3" />
                                <FontAwesomeIcon onClick={this.handleDelete(value)} icon={faTrash} className="icon" />
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit Author Info</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group as={Col} controlId="formBasicbook">
                                                <Form.Control onChange={this.handleChange} value={this.state.newFN} type="text" data-id="FN" placeholder="Edit Author FirstName" />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formBasicbook">
                                                <Form.Control onChange={this.handleChange} value={this.state.newLN} type="text" data-id="LN" placeholder="Edit Author LastName" />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formBasicbook">
                                                {this.props.R.DOB}
                                                <Form.Control ref={element => this.DOB = element} type="date" />
                                            </Form.Group>
                                            <Form.Group as={Col} >
                                                <Form.Control type="file" ref={element => this.image = element} />
                                            </Form.Group>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={this.handleClose}>
                                                    Cancel
                              </Button>
                                                <Button variant="success" onClick={this.handleEdit(value)} data-id={this.props.R.id} >
                                                    Edit Author
                              </Button>
                                            </Modal.Footer>
                                        </Form>
                                    </Modal.Body>
                                </Modal>
                            </td>
                        </tr>


                    )
                }
            </MyContext.Consumer>
        )
    }
}
export default ListingRow;