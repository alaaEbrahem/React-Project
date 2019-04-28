import React from 'react';
import { Container, Modal, Button, Form, Col } from 'react-bootstrap';
import '../../../App.scss';
import { MyContext } from '../../../App'
import Navbar from '../../Navbar/Navbar';
import SideMenue from '../../SideMenue/SideMenue';
import Listing from './Listing/Listing'


class Autor extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseADD = this.handleCloseADD.bind(this);
    this.state = {
      show: false,
      error: ''
    };
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ author: value, error: '' });
  }


  handleCloseADD = (addAuthor) => (e) => {
    e.preventDefault();
    // const img = this.Image.value.substring(12);
    const author = {
      // Photo: img,
      FN: this.FN.value,
      LN: this.LN.value,
      DOB: this.DOB.value,
    }
    addAuthor(author);
    this.setState({ show: false });
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
          value.state.login && value.state.login.userGroup == 1 ?
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
                        <Modal.Title as={Col}>Add Author</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group as={Col} controlId="formBasicbook">
                            <h3>{this.state.error}</h3>
                            <Form.Control ref={element => this.FN = element} type="text" placeholder="Enter Author FirstName" />
                          </Form.Group>
                          <Form.Group as={Col} controlId="formBasicbook">
                            <Form.Control ref={element => this.LN = element} type="text" placeholder="Enter Author LastName" />
                          </Form.Group>
                          <Form.Group as={Col} controlId="formBasicbook">
                            <Form.Control ref={element => this.DOB = element} type="date" />
                          </Form.Group>
                          <Form.Group as={Col} >
                            <Form.Control type="file" ref={element => this.image = element} />
                          </Form.Group>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                              Cancel
                              </Button>
                            <Button variant="success" onClick={this.handleCloseADD(value.addAuthor)}>
                              Add Author
                              </Button>
                          </Modal.Footer>
                        </Form>
                      </Modal.Body>
                    </Modal>
                    <Container>
                      <div className="text-right mt-4">
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
export default Autor;