import React from 'react';
import '../../../App.scss'
import './Home.scss'
import '../../Navbar/Navbar';
import Navbar from '../../Navbar/Navbar';
import SideMenue from '../../SideMenue/SideMenue';
import Card from './Card';
import { MyContext } from '../../../App'
import { withRouter } from "react-router";

class Home extends React.Component {
  state={user:this.props.location.state?this.props.location.state.user:this.props.user}
  render() {


    return (
      <MyContext.Consumer>
         {value => ( 
           value.state.login && value.state.login.userGroup==1?  
      <React.Fragment>
        <Navbar/>
        <div className="container-fluid no-gutters">
          <div className="row no-gutters">
            <div className="col-12 y">
              <div className="col-lg-2  col-md-3 col-4 no-gutters">
                <SideMenue />
              </div>
              <div className="col-10">
                <div className="row ml-4">
                  <div className="usesr ml-md-5 ml-sm-2 mt-5 col-lg-4 col-sm-7 col-md-4 no-gutters ">
                    <Card card="users" value={value.state.users.length} />
                  </div>
                  <div className="categories ml-md-5 ml-sm-2 mt-5 col-lg-4 col-sm-7 col-md-4 no-gutters ">
                    <Card card="categories" value={value.state.categories.filter(R => !(R.deleted)).length}/>
                  </div>
                  <div className="books ml-md-5 ml-sm-2 mt-5 col-lg-4 col-sm-7 col-md-4 no-gutters ">
                    <Card card="books" value={value.state.Book.filter(B => !(B.deleted)).length}/>
                  </div>
                  <div className="authors ml-md-5 ml-sm-2 mt-5 col-lg-4 col-sm-7 col-md-4 no-gutters ">
                    <Card card="authors" value={value.state.authors.filter(B => !(B.deleted)).length} />
                  </div>

                </div>
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

export default withRouter(Home);