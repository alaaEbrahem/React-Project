import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { MyContext } from '../../../../../App';
import edit from '../../../../../assets/images/edit-solid.png';
import remove from '../../../../../assets/images/trash-solid.png';
import '../../Book.scss';
import Options from './Options';
class ListingRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow2 = this.handleShow2.bind(this);
        this.handleClose2 = this.handleClose2.bind(this);
        this.state = {
            show2: false,
            show: false,
            currPhoto:'',
            curr_id: '',
            currName: '',
            currCatID: '',
            currAuthID: '',
            errors:''
        };
    }

    handleClose() {
        this.setState({ show: false,errors:''  });
    }
    handleShow = (val) => (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;
        debugger
        const currentBook = val.state.Book.filter(b => b._id === id)
        this.setState({ show: true,currPhoto:currentBook[0].Photo, curr_id: currentBook[0]._id, currName: currentBook[0].Name, currCatID: currentBook[0].CategoryID, currAuthID: currentBook[0].AuthorID });
    }
    handleClose2() {
        this.setState({ show2: false,errors:'' });
    }
    handleShow2=()=>{
  
        this.setState({ show2: true,errors:''  });
     
    }
    del = (deleteBook) => (e) => {
        e.preventDefault();
        debugger
        const id = e.target.dataset.id;
        deleteBook(id);
        this.setState({ show2: false,errors:''  });
    }
    edit = (editBook) => (e) => {

        e.preventDefault();
        debugger
        const img=this.Image.value.substring(12);
        const editedBook = {
            Photo:img,
            _id: this.state.curr_id,
            Name: this.state.currName,
            CategoryID: this.catID.value,
            AuthorID: this.authID.value,
        }
        if(editedBook.Name==''||!(isNaN)(editedBook.Name)){
            this.setState({errors:'book name can not be empty or number'})
          }
          else if(editedBook.CategoryID==''||!(isNaN)(editedBook.CategoryID)){
            this.setState({errors:'category can not be empty or number'})    }
         else if(editedBook.AuthorID==''||!(isNaN)(editedBook.AuthorID)){
          this.setState({errors:'author can not be empty or number'})    }
          else{
        editBook(editedBook);
        this.setState({ show: false,errors:'' });}
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ currName: value });
    }
    render() {
        debugger
        
        return (

            <MyContext.Consumer>
                {
                    value => (
                        value.state.Book.map(R => (<tr>
                            <td>{R._id}</td>
                            {/* //<td><img src={require(`../../../../../assets/images/${R.Photo}`)} alt="bookimg" /></td> */}
                            {/* <td><img src={edit} alt="bookimg" /></td> */}
                            <td>{R.Name}</td>
                            <td>{R.CategoryID}</td>
                            <td>{R.AuthorID}</td>
                            <td class="td">
                                {/* <FontAwesomeIcon icon={faEdit} onClick={this.handleShow} className="icon mr-3" /> */}
                                <img class="B" src={edit} data-id={R._id} onClick={this.handleShow(value)}></img>
                                <img class="B" src={remove} data-id={R._id} onClick={this.handleShow2}></img>
                                {/* <FontAwesomeIcon icon={faTrash} className="icon" data-id={R.id} onClick={this.del(value.deleteBook)}/> */}
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit Book</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group as={Col} controlId="formBasicbook">
                                            {this.state.errors ? 
                                        <div class="alert alert-danger mt-3 " role="alert">
                                          {this.state.errors}
                                          </div>:""}
                                                <Form.Control type="text" ref={element => this.bookName = element} placeholder="Edit book Name" value={this.state.currName} onChange={this.handleChange}></Form.Control>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Control as="select" ref={element => this.catID = element}>
                                                <option value=""></option>
                                                    <Options options={value.state.categories}/>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Control as="select" ref={element => this.authID = element}>
                                                    <option value=""></option>
                                                    <Options options={value.state.authors}/>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group as={Col} >
                                                <Form.Control type="file" ref={element => this.Image = element} />
                                            </Form.Group>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={this.handleClose}>
                                                    Cancel
                                                </Button>
                                                <Button variant="success" onClick={this.edit(value.editBook)}>
                                                    Edit
                                                </Button>
                                            </Modal.Footer>
                                        </Form>
                                    </Modal.Body>
                                </Modal>
                                <Modal show={this.state.show2} onHide={this.handleClose2}>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete Book</Modal.Title>
                        </Modal.Header>
                    
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose2}>
                                        Cancel
                              </Button>
                                    <Button variant="success"  data-id={R._id} onClick={this.del(value.deleteBook)} >
                                      Delete
                              </Button>
                                </Modal.Footer>
                         
                       
                    </Modal>
              
                            </td>
                        </tr>
                        )
                        )
                    )
                }
            </MyContext.Consumer>
        )
    }
}
export default ListingRow;