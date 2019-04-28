import React from 'react';
import { Container, Modal, Button, Form } from 'react-bootstrap';
import uuidv4 from 'uuid/v4';
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
    //this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      category: '',
      error: ''
    };
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ category: value, error: '' });
  }
  handleClose = (value) => (e) => {

    // *
    const category = {

      Name: this.categoryName.value,
    };
    value.addCategory(category);
    this.setState({ show: false });

  }
  handleHide = () => {
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
                    <div>

                      <Modal show={this.state.show} onHide={this.handleHide}>
                        <Modal.Header closeButton>
                          <Modal.Title>Add Category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Group controlId="formBasicEmail">
                              <h3>{this.state.error}</h3>
                              <Form.Control onChange={this.handleChange} ref={element => this.categoryName = element} type="text" placeholder="Enter category Name" />
                            </Form.Group>
                            <Modal.Footer>

                              <Button variant="secondary" onClick={this.handleHide}>
                                Cancel
                              </Button>
                              <Button variant="success" onClick={this.handleClose(value)}>
                                Add Category
                              </Button>
                            </Modal.Footer>
                          </Form>
                        </Modal.Body>
                      </Modal>
                    </div>
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
export default Categories;