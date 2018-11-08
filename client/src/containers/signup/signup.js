import React from 'react'
import Title from '../../components/Title/title'
import FieldGroup from '../../components/Fieldgroup'
import './signup.css'

class SignUp extends React.Component {
    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: ''
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
    }

    render() {
        return (
            <div>
                <Title />
                <div className='signup'>
                        <div className='row'>
                    <div className='col-md-12'>
                        <p>Getting signed up for pillBox is easy! 
                        Simply fill out the information below.</p>
                    </div>
                </div>
                </div>
                <div className='row signup'>
                    <div className='col-md-6' >First Name and Last Name</div>
                    <div className='col-md-3'>
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
                    <div className='col-md-3 last'>
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
                </div>
                <div className='row signup'>
                    <div className='col-md-6' >Choose a username</div>
                    <div className='col-md-6'>
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
                <div className='row signup'>
                    <div className='col-md-6' >Password</div>
                    <div className='col-md-3'>
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
                    <div className='col-md-3'>
                        <form className='inputForm first' >
                            <FieldGroup
                                name='password'
                                id='password'
                                value={this.state.password}
                                onChange={this.handleInput}
                                placeholder='Confirm Password'
                            />
                        </form>
                        <input id='submit' type='submit' value='SUBMIT' onClick={this.handleSubmit} />
                    </div>
                </div>
              
            </div>
            
        )
    }
}

export default SignUp