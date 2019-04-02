import React,{Component} from 'react';
import './Header.scss';

class Header extends Component {
    render(){
        return(
            <div className="container">
                <div className="row no-gutters">
                    <nav className="col navbar">
                        <a className="navbar-brand text-center">good<span className="font-weight-bold">reads</span></a>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="text" placeholder="Username..."/>
                            <input className="form-control mr-sm-2" type="password" placeholder="Password..."/>
                            <button className="btn btn-success my-2 my-sm-0" type="submit">LOG IN</button>
                        </form>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header