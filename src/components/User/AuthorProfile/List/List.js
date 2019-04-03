import React, { Component } from 'react';
import author from '../../../../assets/images/author.jpg';
import Item from '../../../shared/item/item';
import { MyContext } from '../../../../App'
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
            <MyContext.Consumer>
            {value => ( 
               
           value.state.authors.map(a => (<Item itemImage={a.image} itemTitle={a.FN} itemSubTitle={a.LN} key={a.id} id={a.id}></Item>))
           
           )}
            </MyContext.Consumer>
        );
    }

};
export default list;