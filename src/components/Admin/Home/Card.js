import React from 'react';
import { faUsers, faBook, faAddressCard, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
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
                    {this.props.card ==="users"?
                      <FontAwesomeIcon icon={faUsers} className="x mt-5" />
                    :this.props.card ==="categories"?
                    <FontAwesomeIcon icon={faAlignJustify} className="x mt-5" />
                    :this.props.card ==="books"?
                    <FontAwesomeIcon icon={faBook} className="x mt-5" />:
                    <FontAwesomeIcon icon={faAddressCard} className="x mt-5" />
                  }
                    </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="value  pt-2 offset-2  col-8">
                    {this.props.card ==="users"?
                       <h1 className="count pt-2">{this.props.value}</h1>
                    :this.props.card ==="categories"?
                    <h1 className="count pt-2">{this.props.value}</h1>
                    :this.props.card ==="books"?
                    <h1 className="count pt-2">{this.props.value}</h1>:
                    <h1 className="count pt-2">{this.props.value}</h1>
                  }
                   
                      <p>New {this.props.card}</p>
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