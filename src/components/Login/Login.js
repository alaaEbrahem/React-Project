import React from 'react';
import './Login.scss'
import '../../App.scss'


class Login extends React.Component {
    render() {
        return (
            <div class="login_page ">
            <div class="login_page__container-login">
                <div class="login_page__wrap-login container no-gutters">
                <div className="row">
                
                <div className="col-sm-12">
                <div className="row no-gutters">
                
                <div class="col-12 login_page__login-form-title" >
                        <span class="login_page__login-form-title__title-1">
                            Sign In
                        </span>
                    </div>
    
                </div>
                  <div className="row">
                  <div></div>
                    <form class="offset-2 col-8 login-form">
                        <div class="login-form__wrap-input login-form__validate-input login-form__m-b-26" data-validate="Username is required">
                            {/* <span class="label-input">Username</span> */}
                            <input class="input" type="text" name="username" placeholder="Enter username"/>
                            <span class="focus-input"></span>
                        </div>
    
                        <div class="login-form__wrap-input login-form__validate-input login-form__m-b-18" data-validate = "Password is required">
                            {/* <span class="label-input">Password</span> */}
                            <input class="input" type="password" name="pass" placeholder="Enter password"/>
                            <span class="focus-input"></span>
                        </div>
    
                        <div class="login-form__remember">
                            <div class="contact-form-checkbox">
                                <input class="input-checkbox" id="ckb1" type="checkbox" name="remember-me"/>
                                <label class="label-checkbox" for="ckb1">
                                    Remember me
                                </label>
                            </div>
    
                            <div>
                                <a href="#" class="txt1">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
    
                        <div class="login-form__btn">
                            <button class="login-form__btn__green">
                                Login
                            </button>
                        </div>
                    </form>
                    </div>
              
                </div>

                </div>
             
                </div>
            </div>
        </div>
     );
    }
}
export default Login;