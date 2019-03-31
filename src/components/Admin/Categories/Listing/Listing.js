import React from 'react';
import { Table } from 'react-bootstrap';
import ListingRow from './ListingRow/ListingRow'
import { MyContext } from '../../../../App'

const Listing = (props) => (
  <MyContext.Consumer>
  {value => (
    <Table striped bordered hover className="text-center mt-4">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    
      <ListingRow value={value}></ListingRow>
    
    </tbody>
  </Table>

)}
</MyContext.Consumer>
);


export default Listing;