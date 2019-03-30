import React from 'react';
import { faHome, faUsers, faBook, faAddressCard, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../App.scss'
import './Card.scss'


class Card extends React.Component {
  render() {
    return (
        <>
          <div className="row no-gutters">
          <div className="col-12">
                <section className="panel">
                  <div className="row">
                  <div className="col-5 symbole-container">
                    <div className=" symbol terques">
                      <FontAwesomeIcon icon={faUsers} className="x mt-5" />
                    </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="value  pt-3 offset-3  col-6">
                      <h1 className="count pt-4">495</h1>
                      <p>New Users</p>
                    </div>
                  </div>
                </section>
              </div>
              </div>
           
        </>
        );
    }
  }
  export default Card;