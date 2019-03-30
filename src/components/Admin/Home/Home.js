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
        <div className="row no-gutters">
      <div className="col-12 y">
            <div className="col-lg-2  col-md-3 col-4 no-gutters">
              <SideMenue />
            </div>
            <div className="col-10">
            <div className="row ml-4">
            <div className="ml-md-5 ml-sm-2 mt-5 col-lg-3 col-sm-7 col-md-4 no-gutters ">
           <Card/>
            </div>
            <div className="ml-md-5 ml-sm-2 mt-5 col-lg-3 col-sm-7 col-md-4 no-gutters ">
           <Card/>
            </div>
            <div className="ml-md-5 ml-sm-2 mt-5 col-lg-3 col-sm-7 col-md-4 no-gutters ">
           <Card/>
            </div>
            <div className="ml-md-5 ml-sm-2 mt-5 col-lg-3 col-sm-7 col-md-4 no-gutters ">
           <Card/>
            </div>
            <div className="ml-md-5 ml-sm-2 mt-5 col-lg-3 col-sm-7 col-md-4 no-gutters ">
           <Card/>
            </div>
            <div className="ml-md-5 ml-sm-2 mt-5 col-lg-3 col-sm-7 col-md-4 no-gutters ">
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