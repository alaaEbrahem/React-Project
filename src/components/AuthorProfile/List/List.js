import React, { Component } from 'react';
import author from '../../../assets/images/author.jpg';
import Item from '../../shared/item/item';
class list extends Component {
    state = {
        data: [
            {
                id: 1,
                authorName: "VERONICA ROTH",
                itemSubTitle:"author of divergent",
                itemImg:author
            },
            {
                id: 2,
                authorName: "VERONICA ROTH",
                itemSubTitle:"author of divergent",
                itemImg:author
            },
            {
                id: 3,
                authorName: "VERONICA ROTH",
                itemSubTitle:"author of divergent",
                itemImg:author
            },
            {
                id: 4,
                authorName: "VERONICA ROTH",
                itemSubTitle:"author of divergent",
                itemImg:author
            },
        ],
    }
    render() {
        return (
            this.state.data.map(i => (<Item itemImage={i.itemImg} itemTitle={i.authorName} itemSubTitle={i.itemSubTitle} key={i.id}></Item>))
        )
    }

}
export default list;