import React from 'react';
import { faHome, faUsers, faBook, faAddressCard, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../App.scss';


import Navbar from '../../Navbar/Navbar';
import SideMenue from '../../SideMenue/SideMenue';


class Categories extends React.Component {
  render() {
    const {id,name,image}=this.props.match.params
    return (
      <>
        <Navbar id={id} name={name} image={image} />

        <div className="container-fluid no-gutters">
        <div className="row no-gutters">
      <div className="col-12 y">
            <div className="col-lg-2  col-md-3 col-4 no-gutters">
              <SideMenue id={id} name={name} image={image}  />
            </div>
          
            </div>
        </div>
        </div>
      
      </>
    );
  }
}
export default Categories;