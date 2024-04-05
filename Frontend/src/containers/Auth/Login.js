import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Thecuong',
            password: '123456'
        }
    }
    handleOnChangeInput = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value);
    }
    handleOnChangePass = (event) => {
        this.setState({
            password: event.target.value
        })
        console.log(event.target.value);

    }
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        console.log('username', this.state.username, 'password', this.state.password);
        try {
            let data = await handleLoginApi(this.state.username, this.state.password)
               
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
console.log('ok')
            }


        } catch (error) {
            if (error.response) {
                if (error.response.data) {

                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }

        }
    }
    render() {


        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>Username</label>
                            <input type="text" className="form-control"
                                placeholder='Enter your user name'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeInput(event)}
                            />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password</label>
                            <input type="text" className="form-control" placeholder='Enter your password'
                                value={this.state.password}
                                onChange={(event) => this.handleOnChangePass(event)}
                            />
                        </div>
                        <div>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12' >
                            <button className='btn-login' onClick={() => { this.handleLogin() }}>Login</button>
                        </div>

                        <div className="col-12">
                            <span>Forgot your password</span>
                        </div>
                        <div className='col-12 social-login'>
                            <FontAwesomeIcon icon="fa-brands fa-google" />
                            <FontAwesomeIcon icon="fa-brands fa-facebook" />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
