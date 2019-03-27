import React from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import edit from '../../../assets/images/edit.png';
import del from '../../../assets/images/del.png';
import './BookDesc.scss';

export default class BookDesc extends React.Component {

    state = {
        show: false,
    };
    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }
    render() {
        return (
            <>
                <Table striped hover size="sm" class="BGC">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>CategoryId</th>
                            <th>AuthorId</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.id}</td>
                            <td><img class="book" src={this.props.photo} /></td>
                            <td>{this.props.name}</td>
                            <td>{this.props.catId}</td>
                            <td>{this.props.authId}</td>
                            <td><span>
                                <img class="edit" src={edit} onClick={this.handleShow} />
                                <img class="del" src={del} />
                            </span></td>
                        </tr>
                    </tbody>
                </Table>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>EDIT BOOK</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <h6>ID: <input type="text" ref={element => this.bookName = element}></input></h6>
                        <h6>Photo: <input type="text" ref={element => this.bookName = element}></input></h6>
                        <h6>Name: <input type="text" ref={element => this.Category = element}></input></h6>
                        <h6>CategoryId: <input type="text" ref={element => this.Author = element}></input></h6>
                        <h6>AuthorId: <input type="text" ref={element => this.Image = element}></input></h6>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
              </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Edit
              </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}