import React from 'react';
import UserNavbar from '../../Navbar/UserNavbar/UserNavbar';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import catImg from '../../../assets/images/Essential-Books.jpg';
import { MyContext } from '../../../App';
import { NavLink } from "react-router-dom";

export default class CategorisList extends React.Component {
    render() {
        return (
            <>
                <UserNavbar />
                <MyContext.Consumer>
                    {
                        value => (
                            <Card style={{ width: '100rem', margin: 'auto', backgroundColor: '#32AD3C' }}>
                                <Card.Img variant="top" src={catImg} style={{ height: '35rem' }} />
                                <Card.Body>
                                    <Card.Title ><h3 style={{ color: 'black', textAlign: 'center' }}>Categories</h3></Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    {value.state.categories.map(cat => (<ListGroupItem key={cat.id} style={{ border: 'inset', backgroundColor: 'burlywood', cursor: 'pointer', padding: '0px' }}><h1 key={cat.id}><NavLink exact to={{
                                        pathname: `/category/${cat.id}`,
                                    }}>{cat.name}</NavLink></h1></ListGroupItem>))}
                                </ListGroup>
                            </Card>
                        )
                    }

                </MyContext.Consumer>
            </>
        )
    }

}