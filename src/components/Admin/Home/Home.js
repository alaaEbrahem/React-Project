import React from 'react';

import '../../../App.scss'
import '../../Navbar/Navbar';
import Navbar from '../../Navbar/Navbar';
import SideMenue from '../../SideMenue/SideMenue';

class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <SideMenue />
       
      </>
    );
  }
}
export default Home;