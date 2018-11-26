import React from 'react'
import axios from 'axios'
import Title from '../../components/Title/title'
import FieldGroup from '../../components/Fieldgroup'
import { Redirect } from 'react-router-dom'
import './signup.css'

class SignUp extends React.Component {
    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        redirect: false
    }

    handleInput = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password, firstName, lastName } = this.state
        console.log(`Username ${username}`)
        console.log(`Password is ${password}`)
        console.log(`Name is ${firstName} ${lastName}`)
        if (this.state.username && this.state.password && this.state.firstName && this.state.lastName !== '') {
            this.setState({ redirect: true })
        }
    }

    registerUser = e => {
        e.preventDefault();

        if (
            this.state.username === '' ||
            this.state.password === '' ||
            this.state.email === ''
        ) {
            this.setState({
                showError: true,
                loginError: false,
                registerError: true,
            });
        } else {
            axios
                .post('/registerUser', {
                    name_first: this.state.firstName,
                    name_last: this.state.lastName,
                    username: this.state.username,
                    password: this.state.password
                })
                .then(response => {
                    if (response.data === 'username or email already taken') {
                        this.setState({
                            //   showError: true,
                            //   loginError: true,
                            //   registerError: false,
                        });
                    } else {
                        this.setState({
                            //   messageFromServer: response.data.message,
                            //   showError: false,
                            //   loginError: false,
                            //   registerError: false,
                        });
                    }
                })
                .catch(error => {
                    console.log(error.data);
                });
        }
    };

    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/login' />
        }

        return (
            <div>
                <div className="gradient-background">
                    <Title />

                    <div className='signup bbstyle container'>
                        <h3 className="login-h3">SIGN UP</h3>
                        <div className='row'>
                            <div className='col-md-6'>
                                <form className='inputForm first' >
                                    <FieldGroup
                                        name='firstName'
                                        id='nameArea'
                                        value={this.state.firstName}
                                        onChange={this.handleInput}
                                        placeholder='First Name'
                                    />
                                </form>
                            </div>
                            <br />
                            <div className='col-md-6 last'>
                                <form className='inputForm' >
                                    <FieldGroup
                                        name='lastName'
                                        id='nameArea'
                                        value={this.state.lastName}
                                        onChange={this.handleInput}
                                        placeholder='Last Name'
                                    />
                                </form>
                            </div>
                            <br />
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-md-12'>
                                <form className='inputForm' >
                                    <FieldGroup
                                        name='username'
                                        id='nameArea'
                                        value={this.state.username}
                                        onChange={this.handleInput}
                                        placeholder='Username'
                                    />
                                </form>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-md-6'>
                                <form className='inputForm first' >
                                    <FieldGroup
                                        name='password'
                                        id='password'
                                        value={this.state.password}
                                        onChange={this.handleInput}
                                        placeholder='Password'
                                    />
                                </form>
                            </div>
                            <div className='col-md-6'>
                                <form className='inputForm first' >
                                    <FieldGroup
                                        name='password'
                                        id='password'
                                        value={this.state.password}
                                        onChange={this.handleInput}
                                        placeholder='Confirm Password'
                                    />
                                </form>
                                <input id='submit' type='submit' value='SUBMIT' onClick={this.registerUser} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp