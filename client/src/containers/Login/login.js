import React from 'react'
import axios from 'axios'
import './login.css'
import FieldGroup from '../../components/Fieldgroup'
import Title from '../../components/Title/title'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        redirect: false
    }

    handleInput = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
        console.log(`Username ${username}`)
        console.log(`Password is ${password}`)

        if (this.state.username === '' || this.state.password === '') {
            this.setState({
                showError: false,
                showNullError: true,
                loggedIn: false,
            });
        } else {
            axios.post('/loginUser',
                    {
                        username: this.state.username,
                        password: this.state.password
                    }
                ).then(response => {
                    if (response.data === 'Bad User Name' || response.data === 'passwords do not match') {
                        console.log(response.data);
                        this.setState({
                            showError: true,
                            showNullError: false,
                            redirect: false
                        });
                    } else {
                        console.log('successful login');
                        localStorage.setItem('JWT', response.data.token);
                        this.setState({
                            loggedIn: true,
                            showError: false,
                            showENullrror: false,
                            redirect: true
                        });
                    }
                })
                .catch(error => {
                    console.log(error.data);
                });
        }

        // if (this.state.username && this.state.password !=='') { 
        //     console.log('Click')
        //     this.setState({ redirect: true})
        // }
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/dashboard' />
        }

        return (
            <div>
                <div className="gradient-background">
                    <Title />
                    <div className="login-div">
                        <div className="bbstyle login-div container">
                            <h3 className="login-h3">LOG IN</h3>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <form className='inputForm' >
                                        <FieldGroup
                                            name='username'
                                            id='nameArea'
                                            value={this.state.username}
                                            onChange={this.handleInput}
                                            placeholder='username'
                                        />
                                        <FieldGroup
                                            name='password'
                                            id='nameArea'
                                            value={this.state.password}
                                            onChange={this.handleInput}
                                            placeholder='password'
                                        />
                                    </form>
                                </div>
                            </div>
                            <br />
                            <input id='submit' type='submit' value='SUBMIT' onClick={this.handleSubmit} />
                            <br />
                            <p>Forgot your password?{'    '}<a href='/reset'>Reset it!</a></p>
                        </div>
                    </div>
                </div>
            </div>
                )
            }
        }
export default Login