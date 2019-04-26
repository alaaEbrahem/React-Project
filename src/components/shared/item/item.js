import React from 'react';
import { Card } from 'react-bootstrap';
import './item.scss';
import { NavLink } from "react-router-dom";

const item = (props) => (

    <Card className="cardUp" style={{ width: '18rem' }}>

        <Card.Img className="item__img " variant="top" src={props.itemImage} alt="book" />
        <div className="item__layout">
            <h2 className="text-center text-success font-weight-bold">Click to view</h2>
        </div>
        <Card.Body>
            <Card.Title>
                {props.book ?
                    <NavLink exact to={{ pathname: `/book/${props.id}`, book: props.book, author: props.itemSubTitle }}>
                        {props.itemTitle}</NavLink>
                    :
                    <NavLink exact to={{ pathname: `/author/${props.id}`, book: props.book, author: props.itemSubTitle }}>
                        {props.itemTitle}</NavLink>
                }
            </Card.Title>
            <Card.Text>
                {props.book ?
                    <NavLink exact to={{
                        pathname: `/author/${props.itemSubTitle.id}`
                    }}>{props.itemSubTitle.FN}</NavLink>
                    :props.itemSubTitle  }
            </Card.Text>
        </Card.Body>
    </Card>
)
export default item;