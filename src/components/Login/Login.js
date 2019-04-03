import React from 'react';
import './Login.scss'
import '../../App.scss';
import { MyContext } from '../../App'
import { withRouter } from "react-router";


class Login extends React.Component {

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
        const user = value.search(this.state.username, this.state.password);
        value.addLogin(user);
        if (user.userGroup === 1) {
            this.props.history.push(`/admin`);

        }
        else if (user.userGroup === 2) {
            this.props.history.push(`/profile`);
        }
        else {
            this.setState({ password: '', username: '', error: 'Invalid username or password*' });
            this.props.history.push(`/user`);
        }
    }
    render() {
        return (

                <MyContext.Consumer>
                    {value => (
                    <div className="container mt-5 mt-md-4">
                        <div className="row">
                            <div className="col-sm-5 offset-1  col-10 offset-md-2 col-md-8 login-form">
                                <div className="row">
                                    <div className="col-12 login-form__banner">
                                        <div className="col-auto">
                                            <p className="login-form__banner__form-Title">sign in</p>
                                        </div>

                                    </div>
                                </div>
                                <form onSubmit={this.handleSubmit(value)}>
                                    <div className="row">
                                      
                                        <div className="col-12">
                                        <div className="row offset-3 pt-2"><h3>{this.state.error ? this.state.error : ""}</h3></div>
                                            <div className="row pt-3 input-field">
                                                <div className="offset-lg-2 pl-4 pl-lg-0 pb-3 col-sm-3 col-lg-2 pt-lg-5 input-field__input-label">username</div>
                                                <div className="pl-1 pl-lg-4  col-lg-8 pt-lg-5">
                                                    <input onChange={this.handleChangeuser} value={this.state.username} className="col-12 col-lg-10  input-field__input" type="text" name="username" placeholder="Enter username" />
                                                </div>
                                            </div>
                                            <div className="row pt-3 pb-5 input-field">
                                                <div className="offset-lg-2 pl-4 pl-lg-0 pb-3 col-sm-3 col-lg-2 pt-lg-5 input-field__input-label">password</div>
                                                <div className="pl-1 pl-lg-4  col-lg-8 pt-lg-5">
                                                    <input onChange={this.handleChangepassword} value={this.state.password} className="col-12 col-lg-10  input-field__input" type="password" name="password" placeholder="Enter password" />
                                                </div>
                                            </div>

                                            <div className="row"></div>
                                            <div className="row"></div>
                                        </div>
                                    </div>
                                    <div className=" offset-lg-2 mt-3 row">
                                        <div className="offset-lg-1 col-sm-5 checkbox-container">
                                            <input className="checkbox-container__input" id="ckb1" type="checkbox" name="remember-me" />
                                            <label className="checkbox-container__label ml-3">Remember me</label>
                                        </div>
                                        <div className="offset-1 col-sm-12  col-md-4">
                                            <a className="txt1"> Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-5 offset-md-3 mt-4 mb-5">
                                            <button type="submit" className="button pb-2">Login</button>

                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>

                )}
            </MyContext.Consumer>
        );
    }

};
export default withRouter(Login);