import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import UserNavbar from '../../Navbar/UserNavbar/UserNavbar';
import terms from '../../../assets/images/terms.png';

import './TermsAndConditions.scss';

const TermsAndConditions = (props) => (
    <>
        <UserNavbar />
        <div className="terms">
            <Container className="mt-5 ">
                <Row>
                    <Col md-4>
                        <h1 className="title">Terms <span className="font-weight-bold">& Conditions</span></h1>
                        <p className="mt-3">Lorem ipsum dolor sit amet conse ctetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, qused do eiusmod
                            elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. enim ad minim veniam, qused do eiusmod</p>
                    </Col>
                    <Col md-8 className="terms__images">
                        <img src={terms} className="terms__img1" alt="img" />
                    </Col>
                </Row>
            </Container>
        </div>
    </>
)


export default TermsAndConditions;