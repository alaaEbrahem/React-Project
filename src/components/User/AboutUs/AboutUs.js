import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import UserNavbar from '../../Navbar/UserNavbar/UserNavbar';
import about1 from '../../../assets/images/about1.png';
import about2 from '../../../assets/images/about2.png';
import about3 from '../../../assets/images/about3.png';
import './AboutUs.scss';

const AboutUs = (props) => (
    <>
        <UserNavbar />
        <div className="aboutus">
            <Container className="mt-5 ">
                <Row>
                    <Col md-4>
                        <h1 className="title">About <span className="font-weight-bold">Us</span></h1>
                        <p className="mt-3">Lorem ipsum dolor sit amet conse ctetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, qused do eiusmod
                            elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. enim ad minim veniam, qused do eiusmod</p>
                    </Col>
                    <Col md-8 className="aboutUs__images">

                        <img src={about1} className="aboutus__img1" alt="img" />
                        <img src={about2} className="aboutus__img2" alt="img" />
                        <img src={about3} className="aboutus__img3" alt="img" />
                    </Col>
                </Row>

            </Container>
        </div>
    </>
)


export default AboutUs;