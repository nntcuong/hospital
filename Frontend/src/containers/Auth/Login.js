import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>Username</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password</label>
                            <input type="text" className="form-control"  placeholder='Enter your password'/>
                        </div>
                        <div className='col-12' >
                            <button className='btn-login'>Login</button>
                        </div>

                        <div className="col-12">
                            <span>Forgot your password</span>
                        </div>
                        <div className='col-12 social-login'>
                        <i class="fa-brands fa-google"></i>
                        <i class="fa-brands fa-facebook"></i>

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
