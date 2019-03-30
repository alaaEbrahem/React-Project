import React from 'react';
import { faHome, faUsers, faBook, faAddressCard, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../App.scss'
import './Home.scss'
import '../../Navbar/Navbar';
import Navbar from '../../Navbar/Navbar';
import SideMenue from '../../SideMenue/SideMenue';
import Card from './Card';
import { MyContext } from '../../../App'

class Home extends React.Component {
  render() {
   
    return (
      <MyContext.Consumer>
         {value => (
         
      <React.Fragment>

        <Navbar />
        <div className="container-fluid no-gutters">
          <div className="row no-gutters">
            <div className="col-12 y">
              <div className="col-lg-2  col-md-3 col-4 no-gutters">
                <SideMenue user={this.props.location.state.user} />
              </div>
              <div className="col-10">
                <div className="row ml-4">
                  <div className="usesr ml-md-5 ml-sm-2 mt-5 col-lg-4 col-sm-7 col-md-4 no-gutters ">
                    <Card card="users" value={value.state.users.length} />
                  </div>
                  <div className="categories ml-md-5 ml-sm-2 mt-5 col-lg-4 col-sm-7 col-md-4 no-gutters ">
                    <Card card="categories" value={value.state.categories.length}/>
                  </div>
                  <div className="books ml-md-5 ml-sm-2 mt-5 col-lg-4 col-sm-7 col-md-4 no-gutters ">
                    <Card card="books" value={value.state.books.length} />
                  </div>
                  <div className="authors ml-md-5 ml-sm-2 mt-5 col-lg-4 col-sm-7 col-md-4 no-gutters ">
                    <Card card="authors" value={value.state.authors.length} />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>

)}
</MyContext.Consumer>
);
}
}

export default Home;