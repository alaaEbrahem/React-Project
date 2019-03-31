import React from 'react';
import { Container, Modal, Button, Form } from 'react-bootstrap';

import '../../../App.scss';
import { MyContext } from '../../../App'
import '../../../App.scss';
import Navbar from '../../Navbar/Navbar';
import SideMenue from '../../SideMenue/SideMenue';
import Listing from './Listing/Listing';

class Categories extends React.Component {

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
    const { id, name, image } = this.props.match.params
    return (
      <MyContext.Consumer>
        {value => (
          value.state.login ?
            <React.Fragment>
              <Navbar id={id} name={name} image={image} />
              <div className="container-fluid no-gutters">
                <div className="row no-gutters">
                  <div className="col-12 y">
                    <div className="col-lg-2  col-md-3 col-4 no-gutters">
                      <SideMenue id={id} name={name} image={image} />
                    </div>
                    <div>

                      <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Add Category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Control type="text" placeholder="Enter category Name" />
                            </Form.Group>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={this.handleClose}>
                                Cancel
                              </Button>
                              <Button variant="success" onClick={this.handleClose}>
                                Add Category
                              </Button>
                            </Modal.Footer>
                          </Form>
                        </Modal.Body>
                      </Modal>
                    </div>
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
        </React.Fragment>:this.props.history.push(`/`)


        )}
      </MyContext.Consumer>
    );
  }
}
export default Categories;