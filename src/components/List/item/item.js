import React from 'react';
import { Card } from 'react-bootstrap';
import './item.scss';

const item = (props) => (

    <Card className="cardUp" style={{ width: '18rem' }}>

        <Card.Img className="item__img " variant="top" src={props.itemImage} alt="book" />
        <div className="item__layout">
            <h2 className="text-center text-info font-weight-bold">View Book</h2>
            </div>
        <Card.Body>
            <Card.Title>{props.itemTitle}</Card.Title>
            <Card.Text>
                {props.itemSubTitle}
            </Card.Text>
        </Card.Body>
    </Card>
)
export default item;