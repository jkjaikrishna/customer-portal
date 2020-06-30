import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import FA from 'react-fontawesome';

/**
 * Store Actions for Dispatching
 */

import { validateLogin } from '../../Store/Actions';

import './Login.scss';

function mapStateToProps(props) {
    console.log('props in login', props);
    return {
        isLoggedIn: props.isLoggedIn,
        loginError: props.loginError
    }
}

const mapDispatchToProps = {
    validateLogin
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            hasError: false,
            errorMessage: ''
        }
    }


    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
            hasError: false
        })
    } 

    validateLogin = () => {
        let { userName, password } = this.state;
        if(userName && password) {
            this.props.validateLogin({userName, password});
        }
        else {
            this.setState({
                hasError: true,
                errorMessage: 'Please enter the credential for login'
            })
        }
    }

    render() {
        return (
            this.props.isLoggedIn ? <Redirect to= "/home" />
            :<div className= "login">
            {console.log(this.state.hasError,'error')}
                <div className= "main-view">
                    <div className="input-container">
                        <input 
                            type="text" 
                            placeholder="Username" 
                            name= "userName"
                            value= { this.state.userName } 
                            onChange = { (e) => this.changeHandler(e) }
                        />
                        <FA name="user-o" />
                    </div>
                    
                    <div className="input-container">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name= "password"
                            onChange = {this.changeHandler}
                            value= {this.state.password} 
                        />
                        <FA name="key" />
                    </div>

                    { this.state.hasError && <p className= "show-error">{this.state.errorMessage}</p>}
            
                    <button type="submit" onClick= { this.validateLogin }>Log In</button>
                </div>
            </div>
        );

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);