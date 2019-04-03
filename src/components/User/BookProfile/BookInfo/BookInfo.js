import React from 'react';
import './BookInfo.scss';
import DropdownComponent from '../../../shared/Dropdown/Dropdown';
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
                <span className="stars" data-stars="4">
                <svg height="10" width="10" className="star" data-rating="1">
                    <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                2.495,6.313 -0.002,3.878 3.45,3.376 " />
                </svg>
                <svg height="10" width="10" className="star" data-rating="2">
                    <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                2.495,6.313 -0.002,3.878 3.45,3.376 "/>
                </svg>
                <svg height="10" width="10" className="star" data-rating="3">
                    <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                2.495,6.313 -0.002,3.878 3.45,3.376 8"/>
                </svg>
                <svg height="10" width="10" className="star" data-rating="4">
                    <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                2.495,6.313 -0.002,3.878 3.45,3.376 " />
                </svg>
                <svg height="10" width="10" className="star" data-rating="5">
                    <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                2.495,6.313 -0.002,3.878 3.45,3.376 " />
                </svg>
           
            </span>
            </Col>
            <Col md="9">
                <h4>{props.bookName}</h4>
                <p className="my-1">by: {props.authorName}</p>
                <span className="stars" data-stars="4">
                <svg height="10" width="10" className="star" data-rating="1">
                    <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                2.495,6.313 -0.002,3.878 3.45,3.376 " />
                </svg>
                <svg height="10" width="10" className="star" data-rating="2">
                    <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                2.495,6.313 -0.002,3.878 3.45,3.376 "/>
                </svg>
                <svg height="10" width="10" className="star" data-rating="3">
                    <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                2.495,6.313 -0.002,3.878 3.45,3.376 8"/>
                </svg>
                <svg height="10" width="10" className="star" data-rating="4">
                    <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                2.495,6.313 -0.002,3.878 3.45,3.376 " />
                </svg>
                <svg height="10" width="10" className="star" data-rating="5">
                    <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                2.495,6.313 -0.002,3.878 3.45,3.376 " />
                </svg>
           
            </span>
                <span className="greyText">{props.ratingdesc}</span>
                <p className="mt-1">{props.description}</p>
            </Col>
        </Row>
    </Col>
)
export default BookInfo;