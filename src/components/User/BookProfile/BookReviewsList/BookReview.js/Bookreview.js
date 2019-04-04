import React from 'react';
import '../../../../../App.scss';
import { Col, Row } from 'react-bootstrap';
import StaticStars from '../../../../shared/StaticStars/StaticStars';

const Bookreview = (props) => (
    <>
    <Col md="12 m-auto">
        <Row>
            <Col md="1" sm="6" className="pr-0">
                <img src= {props.userImg} alt="bookname" className="img-fluid pr-1"/>
            </Col>
            <Col md="11">
                <Row>
                    <Row>
                    <p className="ml-4 mr-2 text-success">{props.username} </p>
                    <span className="mr-3"> rated it</span>
                    <StaticStars>{props.ratingdesc}</StaticStars> 
                </Row>
                <p className="greyText ml-auto">{props.reviewDate}</p>
                <p>{props.reviewdesc}</p>
                </Row>    
            </Col>  
        </Row>
    
        <hr/>
    </Col>
    </>
)
export default Bookreview;