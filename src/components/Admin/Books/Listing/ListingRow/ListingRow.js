import React from 'react';
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/react-fontawesome'
import { FontAwesome } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import book1 from '../../../../../assets/images/book1'


class ListingRow extends React.Component {
    state = {
        data: [
            {
                id: 1,
                photo: book1,
                name: "Fantasy",
                categoryId: 1,
                authorId: 1,
                deleted: false
            },
            {
                id: 2,
                photo: book1,
                name: "Fantasy",
                categoryId: 1,
                authorId: 1,
                deleted: false
            },


        ],
    };
    render() {
        return (
            this.state.data.map(R => (<tr>
                <td>{R.id}</td>
                <td>{R.name}</td>
                <td><a>edit </a><a>delete</a>

                    <FontAwesomeIcon icon="igloo" />
                    
                </td>
            </tr>
            )
            )
        )
    }
}
export default ListingRow;