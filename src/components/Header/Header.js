import React,{Component} from 'react';
import './Header.scss';
import { MyContext } from '../../App'
import { withRouter } from "react-router";
import { addLogin } from '../../API/user';
class Header extends Component {
    state = {
        username: '',
        password: '',
        error: ''
    }

    handleChangeuser = (e) => {
        const value = e.target.value;
        this.setState({ username: value ,error:''});
    }
    handleChangepassword = (e) => {
        const value = e.target.value;
        this.setState({ password: value,error:'' });
    }

    handleSubmit = (value) => (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        debugger;
        addLogin({ username,password })

            .then(res => {
                debugger
              console.log(res);
                value.addLoginContext(res.profile);
                localStorage.setItem("token", res.token);
               
                this.props.history.push(`/profile`);
            })
            .catch(err => { 
                debugger
                console.log(err);
                this.setState({ error: 'invalid username or password !!' });
             });
        // e.preventDefault();
        // const user = value.search(this.state.username, this.state.loginPassword);
        // value.addLogin(user);
        // if (user.userGroup === 1) {
        //     this.props.history.push(`/admin`);

        // }
        // else if (user.userGroup === 2) {
        //     this.props.history.push(`/profile`);
        // }
        // else {
        //     this.setState({ loginPassword: '', username: '', error: 'Invalid username or password*' });
        //     this.props.history.push(`user`);
        // }
    }
    render(){
        return(
            <MyContext.Consumer>
            {value => (
            <div className="container">
                <div className="row no-gutters">
                    <nav className="col navbar">
                        <a className="navbar-brand text-center">good<span className="font-weight-bold">reads</span></a>
                        <form className="form-inline" >
                            <input onChange={this.handleChangeuser} value={this.state.username} className="form-control mr-sm-2" type="text" placeholder="Username..."/>
                            <input onChange={this.handleChangepassword} value={this.state.password} className="form-control mr-sm-2" type="password" placeholder="Password..."/>
                            <button type="button" onClick={this.handleSubmit(value)}  className="btn btn-success my-2 my-sm-0" >LOG IN</button>
                      {this.state.error}
                        </form>
                    </nav>
                </div>
            </div>
              )}
              </MyContext.Consumer>
          );
      }
  
  };

  export default withRouter(Header);