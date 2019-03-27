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
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#"> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item px-3">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item px-3">
                        <a class="nav-link" href="#">About us</a>
                    </li>
                    <li class="nav-item px-3">
                        <a class="nav-link" href="#">Categories</a>
                    </li>
                    <li class="nav-item px-3">
                        <a class="nav-link" href="#">Authors</a>
                    </li>
                    <li class="nav-item px-3">
                        <a class="nav-link" href="#">Terms & Conditions</a>
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
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius dicta, facilis repellat tempore laboriosam ad! Officiis illo consequuntur qui ipsum quidem quaerat doloremque quod ipsa nisi fugiat! Ullam, aliquam.</p>
                        <a href="#" className="card-link">See more</a>
                    </div>
                </div>
                <div className="col-md card" >
                    <div className="card-body">
                        <h5 className="card-title">Popular Books</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius dicta, facilis repellat tempore laboriosam ad! Officiis illo consequuntur qui ipsum quidem quaerat doloremque quod ipsa nisi fugiat! Ullam, aliquam.</p>
                        <a href="#" className="card-link">See more</a>
                    </div>
                </div>
                <div className="col-md card" >
                    <div className="card-body">
                        <h5 className="card-title">Popular Categories</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius dicta, facilis repellat tempore laboriosam ad! Officiis illo consequuntur qui ipsum quidem quaerat doloremque quod ipsa nisi fugiat! Ullam, aliquam.</p>
                        <a href="#" className="card-link">See more</a>
                    </div>
                </div>
            </div>
            </div>
            </>
        )
    }
}

export default HomePage