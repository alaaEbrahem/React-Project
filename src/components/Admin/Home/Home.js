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

        <div className="container no-gutters">
          <div className="row">
            <div className="col-lg-3 col-4">
              <SideMenue />
            </div>
            <div className="col-lg-8 col-6">
            <div className="container no-gutters">
            <div className="row">
            <div className="ml-5 col-lg-5 pt-4 col-7">
           <Card/>
         </div>
         <div className="ml-5 col-lg-5 pt-4  offset-sm-1 col-7">
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