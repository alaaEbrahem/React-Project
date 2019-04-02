import React, { Component } from 'react';
import BookReview from './BookReview.js/Bookreview'
import user1 from '../../../../assets/images/user1.jpg';
import user2 from '../../../../assets/images/user2.jpg';



class BookReviewList extends Component {

    state = {
        data: [
            {
                id: 1,
                username: "Rick Riordan",
                userImg: user1,
                ratingdesc: 4,
                reviewDate: "oct 19,2011",
                reviewdesc: 'I definitely enjoyed it. At first, I had trouble convincing my older son to read it, because he was convinced that every dystopian novel is a Hunger Games but he read it on a recent plane trip and we had a great in-depth discussion about the characters and their motivations.'
            },
            {
                id: 2,
                username: "K.D. Absolutely",
                userImg: user2,
                ratingdesc: 1,
                reviewDate: "Jun 05,2010",
                reviewdesc: 'This book is just not for me. I should not have borrowed this. I should have ignored this book even if this is this months read for our book club. I have no intention of attracting attention by disliking this popular book. I am just being honest to myself.'
            },

        ],
    }

    render() {
        return (
            this.state.data.map(B => (<BookReview key={B.id} username={B.username}
                reviewdesc={B.reviewdesc} reviewDate={B.reviewDate} id={B.id} ratingdesc={B.ratingdesc}
                userImg={B.userImg}
            />
            )
            )
        )
    }
}
export default BookReviewList;