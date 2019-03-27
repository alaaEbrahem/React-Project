import React from 'react';
import { Table } from 'react-bootstrap';
import edit from '../../../assets/images/edit.png';
import del from '../../../assets/images/del.png';

const BookDesc = (props) => (
    <>
     <Table striped bordered hover size="sm">
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
                        <td>{props.id}</td>
                        <td><img class="book" src={props.photo}/></td>
                        <td>{props.name}</td>
                        <td>{props.catId}</td>
                        <td>{props.authId}</td>
                        <td><span>
                            <img class="edit" src={edit}/>
                            <img class= "del" src={del}/>
                            </span></td>
                    </tr>
                </tbody>
            </Table>

    </>
)

export default BookDesc;