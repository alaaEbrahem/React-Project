import React from 'react';
import { Table } from 'react-bootstrap';
import ListingRow from './ListingRow/ListingRow'
import { MyContext } from '../../../../App';
const Listing = (props) => (
  <MyContext.Consumer>
  {value => (
    <Table striped bordered hover className="text-center mt-4">
    <thead>
      <tr>
        <th>ID</th>
        <th>photo</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>DateOfBirth</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    
    {value.state.authors.filter(R => !(R.deleted)).map(R => (
      <ListingRow  key={R.id} R={R}></ListingRow>
      
    ))}
    
    </tbody>
  </Table>

)}
</MyContext.Consumer>
);
export default Listing;