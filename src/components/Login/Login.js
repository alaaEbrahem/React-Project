import React from 'react';
import './Login.scss'
import '../../App.scss'


class Login extends React.Component {
    render() {
        return (
<div className="container mt-5">
<div className="row">
<div className="col-sm-5 col-10 offset-1 col-lg-9 offset-sm-2 login-form">
<div className="row">
<div className="col-12 login-form__banner">
<div className="col-auto">
<p className="login-form__banner__form-Title">sign in</p>
</div>

</div>
</div>
<div className="row">
<div className="col-12">
<div className="row pt-5 input-field">
<div className="offset-lg-2 pl-4 pl-lg-0 pb-3 col-sm-3 col-lg-2 pt-lg-5 input-field__input-label">username</div>
<div className="pl-1 pl-lg-4  col-lg-8 pt-lg-5">
<input className="col-12 col-lg-10  input-field__input" type="text" name="username" placeholder="Enter username"/>
</div>
</div>
<div className="row pt-5 pb-5 input-field">
<div className="offset-lg-2 pl-4 pl-lg-0 pb-3 col-sm-3 col-lg-2 pt-lg-5 input-field__input-label">password</div>
<div className="pl-1 pl-lg-4  col-lg-8 pt-lg-5">
<input className="col-12 col-lg-10  input-field__input" type="text" name="password" placeholder="Enter password"/>
</div>
</div>

<div className="row"></div>
<div className="row"></div>
</div>

</div>
<div className=" offset-2 row">
<div className="col-5">
<input class="input-checkbox" id="ckb1" type="checkbox" name="remember-me"/>
<label class="label-checkbox" for="ckb1">Remember me</label>                            
</div>
<div className="col-4">
<a href="#" class="txt1"> Forgot Password?</a>
</div>
</div>
<div className="row"></div>
</div>
</div>

</div>

            );
        }
    }
    export default Login;