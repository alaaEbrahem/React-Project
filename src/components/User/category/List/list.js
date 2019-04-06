import React from 'react';
import Item from '../../../shared/item/item';
import { MyContext } from '../../../../App';
const list = (props) => (
    <>
      
        <MyContext.Consumer>
            {

                value => (
                    value.state.Book.filter(i => (i.categoryId == props.id)).map(i => (<Item itemImage={i.photo} id={i.id} book={i} itemTitle={i.name}
                      
                        itemSubTitle={
                            value.state.authors.filter(a => (a.id == i.authorId))[0]
                        } key={i.id}></Item>))
                )
            }
        </MyContext.Consumer>
    </>

)
export default list;