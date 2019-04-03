import React, { Component } from 'react';
import AuthorBook from './AuthorBook/AuthorBook';
import book1 from '../../../../assets/images/book1.jpg';
import book2 from '../../../../assets/images/book2.jpg';
import book3 from '../../../../assets/images/book3.jpg';


class AuthorBookList extends Component {

    state = {
        data: [
            {
                id: 1,
                title: "Divergent (Divergent, #1)",
                authorName: "by Veronica Roth",
                bookImg: book1,
                ratingdesc: "4.21 avg rating — 2,562,026 ratings—published 2011"
            },
            {
                id: 2,
                title: "Insurgent (Divergent, #2)",
                authorName: "by Veronica Roth",
                bookImg: book2,
                ratingdesc: "4.05 avg rating — 1,035,194 ratings — published 2012 — 186"
            },
            {
                id: 3, title: "Allegiant (Divergent, #3)",
                authorName: "by Veronica Roth",
                bookImg: book3,
                ratingdesc: "3.63 avg rating — 734,581 ratings — published 2013 — 175 editions"
            },
        ],
    }

    render() {
        return (
           <AuthorBook key={this.props.book.id} title={this.props.book.name}
                id={this.props.book.id} 
                //ratingdesc={B.ratingdesc}
                bookImg={this.props.book.photo}
            />
            
            )
        
    }
}
export default AuthorBookList;