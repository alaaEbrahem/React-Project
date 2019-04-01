import React from 'react';
import '../../../../App.scss';
import { Col, Row } from 'react-bootstrap';
import DropdownComponent from '../../../shared/Dropdown/Dropdown';
import Stars from '../../../shared/Stars/Stars';
import './stars.scss';
import './AuthorBook.scss';


const AuthorBook = (props) => (
    <>
     <Col md="12 m-auto">
        <Row>
            <Col md="1" sm="12" className="pr-0 text-center">
            <img src= {props.bookImg} alt="bookname" className="img-fluid pr-0"/>
            </Col>
            <Col md="9" sm="12">
                <p>{props.title}</p>
                <p>{props.authorName} <span className="greyText">(Goodreads Author)</span></p>
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
            </Col>
         
            <Col md="2" className="m-auto">
            <div className="text-center">
            <DropdownComponent></DropdownComponent>
                <p className="greyText">Rate this book</p>
            <Stars/>

            </div>
            </Col>
          
           
        </Row>
        <hr/>
        </Col>
    </>
)
export default AuthorBook;