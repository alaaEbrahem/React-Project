import React from 'react';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, Button, Form } from 'react-bootstrap';
import { MyContext } from '../../../../../App'

class ListingRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow2 = this.handleShow2.bind(this);
        this.handleClose2 = this.handleClose2.bind(this);
        this.state = {
            show: false,
            show2: false,
            
            newcategory:this.props.R.Name,
            error:''
        
        };
    }
    
    handleDelete = (value) => (e) => {
        //el delete ahe
        const id = this.props.R._id;
        value.deleteCategory(id); 
      }
    handleClose() {
        this.setState({ show: false });
    }
    handleShow(){
     
        this.setState({ show: true });
     
    }
    handleClose2() {
        this.setState({ show2: false });
    }
    handleShow2=()=>{
  
        this.setState({ show2: true });
     
    }
    handleChange = (e) => {
   
        const value = e.target.value;
        this.setState({ newcategory: value, error: '' });
      }
    handleEdit=(value)=>(e)=>{
     // 

   
          e.preventDefault();
        
          const editedCategory = {
             
              _id: e.target.dataset.id,
              Name: this.state.newcategory,
          }
          value.editCategory(editedCategory);
          this.setState({ show: false });
          
      }

    render() {
        
        return (
            <MyContext.Consumer>
            {value => (
                <tr>
                <td>{this.props.R._id}</td>
                <td>{this.props.R.Name}</td>
                <td>
                  
             <FontAwesomeIcon icon={faEdit} onClick={this.handleShow}  className="icon mr-3" />
                   <span onClick={this.handleShow2}> <FontAwesomeIcon icon={faTrash} className="icon"  /></span>
                   
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                <h3>{this.state.error}</h3>
                             
                                    <Form.Control  onChange={this.handleChange} value={this.state.newcategory} type="text" placeholder="enter new name"/>
                                   
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Cancel
                              </Button>
                                    <Button variant="success" data-id={this.props.R._id} onClick={this.handleEdit(value)}>
                                        Edit Name
                              </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>
                    </Modal>
              
                    <Modal show={this.state.show2} onHide={this.handleClose2}>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete Category</Modal.Title>
                        </Modal.Header>
                    
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose2}>
                                        Cancel
                              </Button>
                                    <Button variant="success" data-id={this.props.R._id} onClick={this.handleDelete(value)}>
                                      Delete
                              </Button>
                                </Modal.Footer>
                         
                       
                    </Modal>
              
                </td>
                </tr>
    )}
     </MyContext.Consumer>
     )
            }}
export default ListingRow;