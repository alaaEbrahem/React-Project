import React, { Component } from 'react';

import authorImg from '../../../assets/images/author.jpg'
import AuthorInfo from './AuthorInfo/AuthorInfo';
import UserNavbar from '../../Navbar/UserNavbar/UserNavbar'
import AuthorBookList from './AuthorBooks/AuthorBookList'
import { Col, Container } from 'react-bootstrap';
import './AuthorProfile.scss';

class AuthorProfile extends Component {

    state = {
        data: [
            {
                authorImg: authorImg,
                name: 'VERONICA ROTH',
                born: 'in The United States',
                website: 'http://veronicarothbooks.com',
                genre: 'Young Adult, Science Fiction',
            }],
    }
    render() {
        return (
            <>
                <UserNavbar />
                <Container>
                    <AuthorInfo authorImg={authorImg}
                        name={this.state.data[0].name}
                        born={this.state.data[0].born}
                        website={this.state.data[0].website}
                        genre={this.state.data[0].genre}
                    >
                    </AuthorInfo>
                    <Col md="11" className="m-auto">
                        <fieldset>
                            <legend>{this.state.data[0].name}’S BOOKS:</legend>
                            <AuthorBookList></AuthorBookList>
                        </fieldset>
                    </Col>
                </Container>
            </>
        )
    }
}
export default AuthorProfile;