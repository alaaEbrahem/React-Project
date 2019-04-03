import React, { Component } from 'react';

import authorImg from '../../../assets/images/author.jpg'
import AuthorInfo from './AuthorInfo/AuthorInfo';
import UserNavbar from '../../Navbar/UserNavbar/UserNavbar'
import AuthorBookList from './AuthorBooks/AuthorBookList'
import { Col, Container } from 'react-bootstrap';
import './AuthorProfile.scss';
import { MyContext } from '../../../App';

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
            <MyContext.Consumer>
            {value => (
                
            <>
                <UserNavbar />
                <Container>
                    <AuthorInfo authorImg={authorImg}
                        name={this.props.location.author.FN}
                        born={this.state.data[0].born}
                        website={this.state.data[0].website}
                        genre={this.state.data[0].genre}
                    >
                    </AuthorInfo>
                    <Col md="11" className="m-auto">
                        <fieldset>
                       
                            <legend>{this.state.data[0].name}’S BOOKS:</legend>
                            {value.state.Book.filter(b=>(b.authorId==this.props.match.params.id)).map(b=>(<AuthorBookList book={b} authorName={this.props.location.author.FN}></AuthorBookList>))
                            }
                            
                        </fieldset>
                    </Col>
                </Container>
            </>
        )}
        </MyContext.Consumer>
        );
      }
    }
export default AuthorProfile;