import React from 'react';
import Item from '../../../shared/item/item';
import { MyContext } from '../../../../App';
const list = (props) => (
    <>
      
        <MyContext.Consumer>
            {

                value => (
                    value.state.Book.filter(i => (i.CategoryID == props.id)).map(i => (<Item itemImage={i.photo} id={i._id} book={i} itemTitle={i.Name}
                      
                        itemSubTitle={
                            
                            value.state.authors.filter(a => (a._id == i.AuthorID))[0]
                        } key={i._id}></Item>))
                )
            }
        </MyContext.Consumer>
    </>

)
export default list;