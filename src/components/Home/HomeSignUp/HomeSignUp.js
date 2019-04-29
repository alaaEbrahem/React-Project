import React, {Component} from 'react';
import ImageUpload from '../../ImageUpload/ImageUpload';
import SimpleSchema from 'simpl-schema';
import uuidv4 from 'uuid/v4';
import { MyContext } from '../../../App'
import { addUser } from '../../../API/user';

class HomeSignUp extends Component{
    state={
        username:'',
        name:'',
        email:'',
        password:'',
        passConfirm:'',
        file:'',
        error:'',
        success:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (value)=>(e) =>{
        e.preventDefault();

        const {username, name, email, password, passConfirm} = this.state

        const schema = new SimpleSchema({
            username: {
              type: String,
              max: 40,
            },
            name: {
                type: String,
                max: 40,
              },
            email: SimpleSchema.RegEx.Email,
            password: {
              type: String,
              min: 5,
            },
            passConfirm: {
                type: String,
                min:5,
                // custom:()=> {
                //     if (this.value !== this.field('password').value) {
                //         return [{name:'passwordMismatch', type: "passwordMismatch"}];
                //     }
                // },
            },
          }).newContext();
          schema.validate({ username,name,email,password, passConfirm});
            if (schema.isValid()) {
                addUser({username,name,password,email})

                .then(res => {
             
              this.setState({ fname: '',lname:'',email:'',password:'',passConfirm:'',file:'', success:'sign up successfully welcome !' });
                    this.props.history.push(`/profile`);
                })
                .catch(err => { 
                    this.setState({ error: 'can not register try again !!' });
                 });
                // console.log('form submited');
                // const user = {
                //     name: this.state.fname,image:'', deleted: false,userGroup:2,password :this.state.password,id: uuidv4(),
                //   };
                //   console.log(user);
                //   this.setState({ fname: '',lname:'',email:'',password:'',passConfirm:'',file:'', success:'sign up successfully welcome !' });
               
                //   console.log(this.state);
                //   value.addUser(user);
                //   console.log(this.state);
                // // console.log(schema);
                // // this.props.addPost(this.state);
            }
            else{
                this.setState({success:'sign up falied please try again !'});
            }
            this.setState({ error: schema.validationErrors() });
           

       
    }
    render(){
        return(
            <MyContext.Consumer>
            {value => (
            <form className="container col-sm-4 m-5" onSubmit= {this.handleSubmit(value)}>
                <h2>{this.state.success!=''?this.state.success:'New here? Create free account!'}</h2>
                <h3></h3>
                <div className="form-group">
                    <input type="text" value={this.state.username} className="form-control" name="username" onChange={this.handleChange} placeholder="Enter your username"/>
                </div>
                <div className="form-group">
                    <input type="text"  value={this.state.name} className="form-control" name="name" onChange={this.handleChange} placeholder="Enter your name"/>
                </div>
                <div className="form-group">
                    <input type="email" value={this.state.email}  className="form-control" name="email" onChange={this.handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <input type="password" value={this.state.password} className="form-control" name="password" onChange={this.handleChange} id="exampleInputPassword1" placeholder="Enter your Password"/>
                </div>
                {/* <div className="form-group">
                    <input type="password" value={this.state.passConfirm}  className="form-control" name="passConfirm" onChange={this.handleChange} id="exampleInputPassword" placeholder="Retype your Password"/>
                </div> */}
                {/* <div className="form-group">
                    <ImageUpload />
                </div>
                */}
                <button type="submit" className="btn btn-success">Submit</button>
                <small className="form-text text-muted">By clicking “Sign up” I agree to the Terms of Service and confirm that I am at least 13 years old.</small>
            
            </form>
      )}
      </MyContext.Consumer>
    );
  }
}

export default HomeSignUp