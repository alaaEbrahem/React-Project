import React from 'react';
import { Tabs, Tab , Modal,Button} from 'react-bootstrap';
import BookList from './BookList';
import add from '../../assets/images/add.png';

export default class Books extends React.Component {
    state = {
        show: false,
      };
      handleClose=()=> {
        this.setState({ show: false });
      }
    
      handleShow=()=> {
        this.setState({ show: true });
      }    

      handleAddClose=()=>{
          const Name=this.bookName.value;
          const Cat=this.Category.value;
          const Auth=this.Author.value;
          const img= this.Image.value;
        this.setState({ show: false });
      }
    render() {
        return (
            <>
            <Tabs defaultActiveKey="books" id="uncontrolled-tab-example">
                <Tab eventKey="categories" title="Categories" disabled>

                </Tab>
                <Tab eventKey="books" title="Books" >
                    <div>
                        <img class ="add" src={add} onClick={this.handleShow}></img>
                    </div>
                    <BookList></BookList>
                </Tab>
                <Tab eventKey="author" title="Author" disabled>

                </Tab>
            </Tabs>
            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>ADD BOOK</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <h6>Book Name: <input type="text" ref={element => this.bookName = element}></input></h6>
                <h6>Category: <input type="text" ref={element => this.Category = element}></input></h6>
                <h6>Author: <input type="text" ref={element => this.Author = element}></input></h6>
                <h6>Image: <input type="text" ref={element => this.Image = element}></input></h6>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleAddClose}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
          </>
        )
    }

}