import React, { Component } from 'react';
import book1 from '../../../../assets/images/d.jpg';
import Item from '../../../shared/item/item';
import { MyContext } from '../../../../App'
class list extends Component {
    state = {
        data: [
            {
                id: 1,
                itemTitle: "Divergent",
                itemImg: book1,
                itemSubTitle: "VERONICA ROTH"
            },
            {
                id: 2,
                itemImg: book1,
                itemTitle: "Divergent",
                itemSubTitle: "VERONICA ROTH"
            },
            {
                id: 3,
                itemImg: book1,
                itemTitle: "Divergent",
                itemSubTitle: "VERONICA ROTH"
            },
            {
                id: 4,
                itemImg: book1,
                itemTitle: "Divergent",
                itemSubTitle: "VERONICA ROTH"
            },
        ],
    }
    render() {
        return (
            <MyContext.Consumer>
            {value => (
        value.state.Book.map(b => (<Item itemImage={b.photo} itemTitle={b.name}  key={b.id} id={b.id}book={b}
            itemSubTitle={
                value.state.authors.filter(a => (a.id == b.authorId))[0]
            } key={b.id}></Item>))

        )}
        </MyContext.Consumer>
    );
}

};
export default list;