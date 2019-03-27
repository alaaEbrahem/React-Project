import React from 'react';
import { faHome, faUsers, faBook, faAddressCard, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../App.scss'
import './Card.scss'


class Card extends React.Component {
  render() {
    return (
        <>
          <din className="row">
                <section className="panel col-12">
                  <div className="row">
                    <div className=" offset-3 col-6 mt-2 symbol terques">
                      <FontAwesomeIcon icon={faUsers} className="x mt-5" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="value  pt-3 offset-3  col-6">
                      <h1 className="count pt-4">495</h1>
                      <p>New Users</p>
                    </div>
                  </div>
                </section>
              </din>
           
        </>
        );
    }
  }
  export default Card;