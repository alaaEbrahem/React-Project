import React, { Component } from 'react';
import AuthorBookList from './AuthorBooks/AuthorBookList'
import { Col, Row, Container } from 'react-bootstrap';

class AuthorProfile extends Component {

    state = {
        data: [],
    }

    render() {
        return (

            <Container>
                <Row>
                    <Col md="8"><AuthorBookList></AuthorBookList>
                    </Col>
                </Row>
            </Container>

        )
    }
}
export default AuthorProfile;