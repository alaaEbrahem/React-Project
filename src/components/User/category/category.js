import React from 'react';
import { Row, Container } from 'react-bootstrap';
import List from './List/list';
import UserNavbar from '../../Navbar/UserNavbar/UserNavbar';
import PaginationComponent from '../../shared/pagination/pagination';
import { MyContext } from '../../../App';
const category = (props) => (
    <>
        {/* {console.log(props.match.params.id)} */}
        <UserNavbar />
        <MyContext.Consumer>
            {
                value => (
                    <Container >
                        {
                        value.state.categories.filter(b=>(b.id==props.match.params.id)).map(b=>(<a key={b.id} className="navbar-brand text-center">{b.name}<span className="font-weight-bold"></span></a>))
                        }
                        <Row className="text-center m-auto justify-content-between">
                            <List id={props.match.params.id}></List>
                        </Row>
                        <PaginationComponent></PaginationComponent>
                    </Container>
                )
            }
        </MyContext.Consumer>
    </>
)


export default category;