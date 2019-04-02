import React from 'react';
import '../../../../../App.scss';
import { Col, Row } from 'react-bootstrap';

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
                    <span className="stars mr-auto" data-stars={props.ratingdesc}>
                    <svg height="10" width="10" className="star" data-rating="1">
                        <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                    2.495,6.313 -0.002,3.878 3.45,3.376 " ></polygon>
                    </svg>
                    <svg height="10" width="10" className="star" data-rating="2">
                        <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                    2.495,6.313 -0.002,3.878 3.45,3.376 " ></polygon>
                    </svg>
                    <svg height="10" width="10" className="star" data-rating="3">
                        <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                    2.495,6.313 -0.002,3.878 3.45,3.376 8" ></polygon>
                    </svg>
                    <svg height="10" width="10" className="star" data-rating="4">
                        <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                    2.495,6.313 -0.002,3.878 3.45,3.376 "  ></polygon>
                    </svg>
                    <svg height="10" width="10" className="star" data-rating="5">
                        <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                    2.495,6.313 -0.002,3.878 3.45,3.376 "  ></polygon>
                    </svg>
                </span>
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