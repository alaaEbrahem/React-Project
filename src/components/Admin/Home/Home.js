import React from 'react';
import { faHome, faUsers, faBook, faAddressCard, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../App.scss'
import './Home.scss'
import '../../Navbar/Navbar';
import Navbar from '../../Navbar/Navbar';
import SideMenue from '../../SideMenue/SideMenue';
import Card from './Card';

class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="container-fluid no-gutters">
          <div className="row">
            <div className="col-lg-2  col-md-3 col-4 no-gutters">
              <SideMenue />
            </div>
            <div className="col-lg-9 no-gutters col-6">
            <div className="container">
            <div className="row">
            <div className="ml-5 col-lg-4 pt-4 col-7">
           <Card/>
         </div>
         <div className="ml-5 col-lg-4 pt-4 col-7">
           <Card/>
         </div>
        
            </div>
            
            </div>
            
            </div>
        
          </div>
        </div>

      </>
    );
  }
}
export default Home;