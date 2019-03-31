import React from 'react';
import { Container, Modal, Button, Form, Col } from 'react-bootstrap';
import '../../../App.scss';
import { MyContext } from '../../../App'
import Navbar from '../../Navbar/Navbar';
import SideMenue from '../../SideMenue/SideMenue';
import Listing from './Listing/Listing'


class Book extends React.Component {

  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
    };
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  render() {

    return (
      <MyContext.Consumer>
        {value => (
          value.state.login ?
            <React.Fragment>

              <Navbar />

              <div className="container-fluid no-gutters">
                <div className="row no-gutters">
                  <div className="col-12 y">
                    <div className="col-lg-2  col-md-3 col-4 no-gutters">
                      <SideMenue />
                    </div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title as={Col}>Add Book</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group as={Col} controlId="formBasicbook">
                            <Form.Control type="text" placeholder="Enter book Name" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select">
                              <option>Category</option>
                              <option>...</option>
                            </Form.Control>
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select">
                              <option>Author</option>
                              <option>...</option>
                            </Form.Control>
                          </Form.Group>
                          <Form.Group as={Col} >          
                            <Form.Control type="file" />
                          </Form.Group>

                          <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                              Cancel
                              </Button>
                            <Button variant="success" onClick={this.handleClose}>
                              Add Book
                              </Button>
                          </Modal.Footer>
                        </Form>
                      </Modal.Body>
                    </Modal>
                    <Container>
                      <div class="text-right mt-4">
                        <Button variant="success" onClick={this.handleShow}>
                          Add
                        </Button>
                      </div>
                      <Listing ></Listing>

                    </Container>
                  </div>


                </div>
              </div>


            </React.Fragment> : this.props.history.push(`/`)


        )}
      </MyContext.Consumer>
    );
  }
}
export default Book;