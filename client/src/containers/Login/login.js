import React from 'react'
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
        //Possibly hook up passport here?
        if (this.state.username && this.state.password !=='') { 
            console.log('Click')
            this.setState({ redirect: true})
          }
    }


    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/dashboard' />
          }
      

        return (
            <div>
             <div className="gradient-background">
                    <Title />
                </div>
                <div className='bbstyle'>
                    <h3 id='login'>LOG IN</h3>
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
                            </form>
                        </div>
                    </div>
                    <br />
                    <div className='row' >
                        <div className='col-md-12'>

                            <form className='inputForm' >
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
        )
    }
}
export default Login