import React, { Component } from 'react';

import bookImg from '../../../assets/images/d.jpg';
import bookbackImg from '../../../assets/images/db.jpg'
import UserNavbar from '../../Navbar/UserNavbar/UserNavbar'
import BookInfo from './BookInfo/BookInfo';
import BookReview from './BookReviewsList/BookReviewList'
import { Container, Col } from 'react-bootstrap';


class BookProfile extends Component {

    state = {
        data: [
            {
                bookImg: bookImg,
                bookbackImg: bookbackImg,
                bookName: 'Divergent',
                authorName: 'VERONICA ROTH',
                description: 'In Beatrice Priors dystopian Chicago world, society is divided into five factions, each dedicated to the cultivation of particular virtue—Candor (the honest), Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful), and Erudite (the intelligent). ',
                ratingdesc: "4.21 avg rating — 2,562,026 ratings—published 2011"
            }],
    }

    render() {
        return (
            this.props.location.book?
            <>
                <UserNavbar />
                <Container>
                    <BookInfo bookImg={this.props.location.book.photo}
                        bookbackImg={this.props.location.book.photo}
                        bookName={this.props.location.book.name}
                        authorName={this.props.location.author.FN+" "+this.props.location.author.LN}
                        description={this.state.data[0].description}
                        ratingdesc={this.state.data[0].ratingdesc}
                    >
                    </BookInfo>
                    <Col md="11" className="m-auto">
                        <fieldset>
                            <legend>COMMUNITY REVIEW</legend>
                            <BookReview></BookReview>
                        </fieldset>
                    </Col>

                </Container>
            </>:""

        )
    }
}
export default BookProfile;