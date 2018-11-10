import React from 'react'
import './start.css'
import Title from '../../components/Title/title'

class Start extends React.Component {
    render() {
        return (
            <div>
                <div className="gradient-background">
                    <Title />
                </div>
                <br />
                <br />
                <div className='row'>
                    <div className='col-md-12'>
                        <a href='/login'><h3 id="logIn" className='boxStyle'>Log-in</h3></a>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-md-12'>
                        <a href='/signup'> <h3 id="signUp" className='boxStyle'>Sign-up</h3></a>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-md-12'>
                        <a href='/info'> <h3 id="info" className='boxStyle'>Info</h3></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Start