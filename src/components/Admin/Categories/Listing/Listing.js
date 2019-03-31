import React from 'react';
import { Table } from 'react-bootstrap';
import ListingRow from './ListingRow/ListingRow'

const Listing = (props) => (

    <Table striped bordered hover className="text-center mt-4">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    
      <ListingRow></ListingRow>
    
    </tbody>
  </Table>

)
export default Listing;