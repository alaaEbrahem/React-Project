import React,{Component} from 'react';
import './Header.scss';
import { MyContext } from '../../App'
import { withRouter } from "react-router";

class Header extends Component {
    state = {
        username: '',
        loginPassword: '',
        error: ''
    }

    handleChangeuser = (e) => {
        const value = e.target.value;
        this.setState({ username: value ,error:''});
    }
    handleChangepassword = (e) => {
        const value = e.target.value;
        this.setState({ loginPassword: value,error:'' });
    }

    handleSubmit = (value) => (e) => {
        e.preventDefault();
        const user = value.search(this.state.username, this.state.loginPassword);
        value.addLogin(user);
        if (user.userGroup === 1) {
            this.props.history.push(`/admin`);

        }
        else if (user.userGroup === 2) {
            this.props.history.push(`/profile`);
        }
        else {
            this.setState({ loginPassword: '', username: '', error: 'Invalid username or password*' });
            this.props.history.push(`user`);
        }
    }
    render(){
        return(
            <MyContext.Consumer>
            {value => (
            <div className="container">
                <div className="row no-gutters">
                    <nav className="col navbar">
                        <a className="navbar-brand text-center">good<span className="font-weight-bold">reads</span></a>
                        <form className="form-inline" onSubmit={this.handleSubmit(value)}>
                            <input onChange={this.handleChangeuser} value={this.state.username} className="form-control mr-sm-2" type="text" placeholder="Username..."/>
                            <input onChange={this.handleChangepassword} value={this.state.loginPassword} className="form-control mr-sm-2" type="password" placeholder="Password..."/>
                            <button className="btn btn-success my-2 my-sm-0" type="submit">LOG IN</button>
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