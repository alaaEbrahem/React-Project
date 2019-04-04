import React from 'react';
import './BookInfo.scss';
import DropdownComponent from '../../../shared/Dropdown/Dropdown';
import StaticStars from '../../../shared/StaticStars/StaticStars';
import { Col, Row } from 'react-bootstrap';
const BookInfo = (props) => (
    <Col md="11" className="m-auto py-4">
        <Row>
            <Col md="3" sm="12" className="text-center m-auto "> 
                <div className="fliptextcard m-auto">
                    <div className="fliptextcard__images m-auto">
                        <div className="fliptextcard__frontimg1" style={{ backgroundImage: `url(${props.bookImg})` }}>
                        </div>
                        <div className="fliptextcard__backface" style={{ backgroundImage: `url(${props.bookbackImg})` }}>
                        </div>
                    </div>
                </div>
                <br></br>
                <DropdownComponent></DropdownComponent>
                <p className="greyText mt-1">My rating: </p>
                <StaticStars>5</StaticStars>
            </Col>
            <Col md="9">
                <h4>{props.bookName}</h4>
                <p className="my-1">by: {props.authorName}</p>
                <StaticStars>4</StaticStars>
                <span className="greyText">{props.ratingdesc}</span>
                <p className="mt-1">{props.description}</p>
            </Col>
        </Row>
    </Col>
)
export default BookInfo;