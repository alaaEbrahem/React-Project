import React from 'react';
import { Row, Container } from 'react-bootstrap';
import List from './List/List';
import UserNavbar from '../../Navbar/UserNavbar/UserNavbar';
import PaginationComponent from '../../shared/pagination/pagination';
const authorsPage = (props) => (
    <>
    <UserNavbar />
    <Container >
        <a className="navbar-brand text-center">Authors<span className="font-weight-bold"></span></a>
        <Row className="text-center m-auto justify-content-between">
        <List ></List>        
        </Row>
       <PaginationComponent></PaginationComponent>
    </Container>
    </>
)
export default authorsPage;