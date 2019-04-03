import React from 'react';
import UserNavbar from '../../Navbar/UserNavbar/UserNavbar';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import catImg from '../../../assets/images/Essential-Books.jpg';
import catImg from '../../../assets/images/slider.png';
import { MyContext } from '../../../App';
import { NavLink } from "react-router-dom";
import './CategoryList.scss';

export default class CategorisList extends React.Component {
    render() {
        return (
            <>
                <UserNavbar />
                <MyContext.Consumer>
                    {
                        value => (
                           
                            <Card className="category__Card">
                                <Card.Img variant="top" src={catImg} className="category__Img"/>
                                <Card.Body className="bg-success">
                                    <Card.Title ><h3 className="category__Card__text bg-success p-0">Categories</h3></Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    {value.state.categories.map(cat => (<ListGroupItem key={cat.id} className="Category__Listing"><h1  key={cat.id}>
                                    <NavLink className="text-success" exact to={{
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