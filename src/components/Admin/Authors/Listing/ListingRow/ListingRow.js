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
        this.handleShow2 = this.handleShow2.bind(this);
        this.handleClose2 = this.handleClose2.bind(this);
        this.state = {
            show: false,
            newFN: this.props.R.FN,
            newLN: this.props.R.LN,
            DOB: "2018-10-19",
            show2: false,

        };
    }
    handleClose2() {
        this.setState({ show2: false });
    }
    handleShow2 = () => {

        this.setState({ show2: true });

    }
    handleDateChange = (e) => {
        this.setState({ DOB: this.DOB.value })
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
        e.preventDefault();
        const editedAuthor = {
            _id: e.target.dataset.id,
            FN: this.state.newFN,
            LN: this.state.newLN,
            DOB: this.DOB.value,
        }
        if(editedAuthor.FN==''||!(isNaN)(editedAuthor.FN)){
            this.setState({errors:'first name can not be empty or number'})
          }
          else if(editedAuthor.LN==''||!(isNaN)(editedAuthor.LN)){
            this.setState({errors:'lastname can not be empty or number'})    }
         else if(editedAuthor.DOB==''||!(isNaN)(editedAuthor.DOB)){
          this.setState({errors:'date can not be empty or number'})    }
          else{
        value.editAuthor(editedAuthor);
        this.setState({ show: false });}
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
                                <FontAwesomeIcon onClick={this.handleShow2} icon={faTrash} className="icon" />
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit Author Info</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                        {this.state.errors ? 
                                        <div class="alert alert-danger mt-3 " role="alert">
                                          {this.state.errors}
                                          </div>:""}
                                            <Form.Group as={Col} controlId="formBasicbook">
                                                <Form.Control onChange={this.handleChange} value={this.state.newFN} type="text" data-id="FN" placeholder="Edit Author FirstName" />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formBasicbook">
                                                <Form.Control onChange={this.handleChange} value={this.state.newLN} type="text" data-id="LN" placeholder="Edit Author LastName" />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formBasicbook">
                                               
                                                <Form.Control ref={element => this.DOB = element} onChange={this.handleDateChange} value={this.state.DOB} type="date" />
                                            </Form.Group>
                                            <Form.Group as={Col} >
                                                <Form.Control type="file" ref={element => this.image = element} />
                                            </Form.Group>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={this.handleClose}>
                                                    Cancel
                              </Button>
                                                <Button variant="success" onClick={this.handleEdit(value)} data-id={this.props.R._id} >
                                                    Edit Author
                              </Button>
                                            </Modal.Footer>
                                        </Form>
                                    </Modal.Body>
                                </Modal>
                                <Modal show={this.state.show2} onHide={this.handleClose2}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Delete Author</Modal.Title>
                                    </Modal.Header>

                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleClose2}>
                                            Cancel
                              </Button>
                                        <Button variant="success" data-id={this.props.R._id} onClick={this.handleDelete(value)}>
                                            Delete
                              </Button>
                                    </Modal.Footer>


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