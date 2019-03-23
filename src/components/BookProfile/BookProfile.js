import React, { Component } from 'react';

import bookImg from '../../assets/images/d.jpg'
import BookInfo from './BookInfo/BookInfo';

import { Container } from 'react-bootstrap';


class BookProfile extends Component {

    state = {
        data: [
            {
                bookImg: bookImg,
                bookName: 'Divergent',
                authorName: 'VERONICA ROTH',
                description: 'In Beatrice Priors dystopian Chicago world, society is divided into five factions, each dedicated to the cultivation of a particular virtue—Candor (the honest), Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful), and Erudite (the intelligent). ',
                ratingdesc: "4.21 avg rating — 2,562,026 ratings—published 2011"
            }],
    }

    render() {
        return (
            <Container>
                <BookInfo bookImg={bookImg}
                    bookName={this.state.data[0].bookName}
                    authorName={this.state.data[0].authorName}
                    description={this.state.data[0].description}
                    ratingdesc={this.state.data[0].ratingdesc}
                >
                </BookInfo>
            </Container>
        )
    }
}
export default BookProfile;