import React, { Component } from 'react';
import book1 from '../../../assets/images/d.jpg';
import Item from '../../shared/item/item';
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
    
        this.state.data.map(i => (<Item itemImage={i.itemImg} itemTitle={i.itemTitle} itemSubTitle={i.itemSubTitle} key={i.id}></Item>))

        )
    }

}
export default list;