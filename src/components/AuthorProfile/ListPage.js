import React from 'react';
import { Row, Container } from 'react-bootstrap';
import List from './List/List';
import PaginationComponent from '../shared/pagination/pagination';
const authorsPage = (props) => (
    <Container >
        <a className="navbar-brand text-center">Author<span className="font-weight-bold"></span></a>
        <Row className="text-center m-auto justify-content-between">
        <List></List>        
        </Row>
       <PaginationComponent></PaginationComponent>
    </Container>
)


export default authorsPage;