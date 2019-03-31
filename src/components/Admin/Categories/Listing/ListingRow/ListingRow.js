import React from 'react';
import { faEdit, faTrash, faBook, faAddressCard, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


 

class ListingRow extends React.Component {
    state = {
        data: [
            {
                id: 1,
                name: "Fantasy",
                deleted: false
            },
            {
                id: 2,
                name: "Science Fiction",
                deleted: false
            },
            {
                id: 3,
                name: "Romance",
                deleted: false
            },
            {
                id: 4,
                name: "Dystopia",
                deleted: false
            },
        ],
    };
    render() {
        return (
            this.state.data.map(R => (<tr>
                <td>{R.id}</td>
                <td>{R.name}</td>
                <td>
                <FontAwesomeIcon icon={faEdit} className="icon mr-3" />
                <FontAwesomeIcon icon={faTrash} className="icon" />
                
                </td>
            </tr>
            )
            )
        )
    }
}
export default ListingRow;