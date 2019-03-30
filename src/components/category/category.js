import React from 'react';
import { Row, Container, Pagination } from 'react-bootstrap';
import List from '../List/list';
const category = (props) => (
    <Container >
        <a className="navbar-brand text-center">Adventure<span className="font-weight-bold"></span></a>
        <Row className="text-center m-auto justify-content-between">
        <List></List>        
        </Row>
        <Pagination className="justify-content-center mt-5">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item >{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    </Container>
)


export default category;