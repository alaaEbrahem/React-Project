import React, {Component} from 'react'
import coverimg from '../../assets/images/cover-crop.jpg'
import coverimg2 from '../../assets/images/cover-2.jpg'
import Header from '../Header/Header';
import HomeSignUp from './HomeSignUp/HomeSignUp';
import './Home.scss'

class HomePage extends Component {
    state={}
    render(){
        return(
            <>
            <Header/>
            {/* ---------------------------------COVER------------------------------------ */}
            <div className="cover">
                <div className="card text-white border-0 row no-gutters">
                    {/* <img className="card-img col" src={coverimg2} alt="Card image"/> */}
                    <div className="card-overlay py-5 row no-gutters">
                        <div className="card-title col-sm-6">Meet your next favourite book!</div>
                        <HomeSignUp />
                        {/* <div className="row no-gutters justify-content-end"><HomeSignUp/></div> */}
                    </div>
                </div>
            </div>
            {/* --------------------------------NAVIGATION BAR---------------------------------- */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand"> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item px-3">
                        <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link">About us</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link">Categories</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link">Authors</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link">Terms & Conditions</a>
                    </li>
                    </ul>
                </div>
            </nav>
            {/* --------------------------------POPULAR CARDS----------------------------------- */}
            <div className="popular-cards container">
            <div className="row no-gutters">
                <div className="col-md card" >
                    <div className="card-body">
                        <h5 className="card-title">Popular Authors</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius dicta, facilis repellat tempore laboriosam ad! Officiis illo consequuntur qui ipsum quidem quaerat doloremque quod ipsa nisi fugiat! Ullam, aliquam.</p>
                        <a className="card-link">See more</a>
                    </div>
                </div>
                <div className="col-md card" >
                    <div className="card-body">
                        <h5 className="card-title">Popular Books</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius dicta, facilis repellat tempore laboriosam ad! Officiis illo consequuntur qui ipsum quidem quaerat doloremque quod ipsa nisi fugiat! Ullam, aliquam.</p>
                        <a className="card-link">See more</a>
                    </div>
                </div>
                <div className="col-md card" >
                    <div className="card-body">
                        <h5 className="card-title">Popular Categories</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius dicta, facilis repellat tempore laboriosam ad! Officiis illo consequuntur qui ipsum quidem quaerat doloremque quod ipsa nisi fugiat! Ullam, aliquam.</p>
                        <a className="card-link">See more</a>
                    </div>
                </div>
            </div>
            </div>
            </>
        )
    }
}

export default HomePage