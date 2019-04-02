import React from 'react';
import { Row, Container } from 'react-bootstrap';
import List from './List/list';
import UserNavbar from '../../Navbar/UserNavbar/UserNavbar';
import PaginationComponent from '../../shared/pagination/pagination';
const category = (props) => (
    <>
            <UserNavbar />
    <Container >
        <a className="navbar-brand text-center">Adventure<span className="font-weight-bold"></span></a>
        <Row className="text-center m-auto justify-content-between">
        <List></List>        
        </Row>
       <PaginationComponent></PaginationComponent>
    </Container>
    </>
)


export default category;