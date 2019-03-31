import React from 'react';
import '../../../App.scss';
import { MyContext } from '../../../App'
import Navbar from '../../Navbar/Navbar';
import SideMenue from '../../SideMenue/SideMenue';


class Users extends React.Component {
  render() {
  
    return (
       
      <MyContext.Consumer>
      {value => (
     value.state.login? 
   <React.Fragment>
        <Navbar />

        <div className="container-fluid no-gutters">
        <div className="row no-gutters">
      <div className="col-12 y">
            <div className="col-lg-2  col-md-3 col-4 no-gutters">
              <SideMenue/>
            </div>
          
            </div>
        </div>
        </div>
      
        </React.Fragment>:this.props.history.push(`/`)

)}
</MyContext.Consumer>
);
}
}
export default Users;