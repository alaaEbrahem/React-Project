import React from 'react';
import '../../../../../App.scss';
import { Col, Row } from 'react-bootstrap';
import DropdownComponent from '../../../../shared/Dropdown/Dropdown';
import Stars from '../../../../shared/Stars/Stars';
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
                <p> <span className="greyText">(Goodreads Author)</span></p>

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