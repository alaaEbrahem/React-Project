import React from 'react';
import BookDesc from './BookDesc/BookDesc';
import book1 from '../../assets/images/book4.jpg';
import book2 from '../../assets/images/book2.jpg';


export default class BookList extends React.Component {

    state = {
        data: [
            {
                ID: 1,
                photo: book1,
                Name: 'Harrypotter',
                CategoryId: 2,
                AuthorId: 5
            },
            {
                ID: 2,
                photo: book2,
                Name: 'Insurgenttt',
                CategoryId: 9,
                AuthorId: 4
            }
        ]
    }
    render() {
        return (
            this.state.data.map(obj => (<BookDesc key={obj.ID} id={obj.ID} photo={obj.photo} name={obj.Name}
            catId={obj.CategoryId} authId={obj.AuthorId} />))
        )
    }
}