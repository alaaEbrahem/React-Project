import React from 'react';
import { Table } from 'react-bootstrap';
import ListingRow from './ListingRow/ListingRow'

const Listing = (props) => (

    <Table striped bordered hover className="text-center mt-4">
    <thead>
      <tr>
        <th>ID</th>
        <th>photo</th>
        <th>Name</th>
        <th>CategoryId</th>
        <th>AuthorId</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    
      <ListingRow></ListingRow>
    
    </tbody>
  </Table>

)
export default Listing;