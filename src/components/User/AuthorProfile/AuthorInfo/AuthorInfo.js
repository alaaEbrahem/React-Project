import React from 'react'
import { Col, Row } from 'react-bootstrap';
import '../../../../App.scss'
const AuthorInfo = (props) => (


    <Col md="11" className="m-auto py-4">
        <Row>
            <Col md="3" className="text-center"> <img src={props.authorImg} alt="authorimg"
                className="img-fluid text-center img-thumbnail"></img>
            </Col>
            <Col md="9">
                <h5>{props.name}</h5>
                <hr />
                <p>Born: <span className="greyText"><b>{props.born}</b></span></p>
                <p>Website: <span className="greyText"><b>{props.website}</b></span></p>
                <p>Genre: <span className="greyText"><b>{props.genre}</b></span></p>
            </Col>
        </Row>
    </Col>

)
export default AuthorInfo;