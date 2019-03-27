import React, {Component} from 'react';
import ImageUpload from '../../ImageUpload/ImageUpload';

class HomeSignUp extends Component{
    render(){
        return(
            <form className="container col-sm-4 m-5">
                <h3>New here? Create free account!</h3>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter your first name"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter your last name"/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your Password"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Retype your Password"/>
                </div>
                <div className="form-group">
                    <ImageUpload />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <small className="form-text text-muted">By clicking “Sign up” I agree to the Terms of Service and confirm that I am at least 13 years old.</small>
            </form>
        )
    }
}

export default HomeSignUp