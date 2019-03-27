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
            </>
        )
    }
}

export default HomePage