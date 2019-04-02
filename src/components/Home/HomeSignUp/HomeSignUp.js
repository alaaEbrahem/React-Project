import React, {Component} from 'react';
import ImageUpload from '../../ImageUpload/ImageUpload';
import SimpleSchema from 'simpl-schema';

class HomeSignUp extends Component{
    state={
        fname:'',
        lname:'',
        email:'',
        password:'',
        passConfirm:'',
        file:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();

        const {fname, lname, email, password, passConfirm} = this.state

        const schema = new SimpleSchema({
            fname: {
              type: String,
              max: 40,
            },
            lname: {
                type: String,
                max: 40,
              },
            email: SimpleSchema.RegEx.Email,
            password: {
              type: String,
              min: 8,
            },
            passConfirm: {
                type: String,
                min:8,
                custom:()=> {
                    if (this.value !== this.field('password').value) {
                        return [{name:'passwordMismatch', type: "passwordMismatch"}];
                    }
                },
            },
          }).newContext();
          schema.validate({ fname,lname,email,password, passConfirm});
            if (schema.isValid()) {
                // console.log(schema);
                // this.props.addPost(this.state);
            }
            this.setState({ error: schema.validationErrors() });
            console.log(schema.validationErrors());

        console.log('form submited');
    }
    render(){
        return(
            <form className="container col-sm-4 m-5" onSubmit= {this.handleSubmit}>
                <h3>New here? Create free account!</h3>
                <div className="form-group">
                    <input type="text" className="form-control" name="fname" onChange={this.handleChange} placeholder="Enter your first name"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="lname" onChange={this.handleChange} placeholder="Enter your last name"/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" onChange={this.handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password" onChange={this.handleChange} id="exampleInputPassword1" placeholder="Enter your Password"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="passConfirm" onChange={this.handleChange} id="exampleInputPassword1" placeholder="Retype your Password"/>
                </div>
                <div className="form-group">
                    <ImageUpload />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                <small className="form-text text-muted">By clicking “Sign up” I agree to the Terms of Service and confirm that I am at least 13 years old.</small>
            </form>
        )
    }
}

export default HomeSignUp