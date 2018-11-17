import React from 'react'
import './start.css'
import Title from '../../components/Title/title'

class Start extends React.Component {
    render() {
        return (
            <div>
                <div class="gradient-background-title">
                    <Title />
                </div>
                <div className="container">

                    <a href='/login'><h3 id="logIn" className='startStyle'>Log-in</h3></a>

                    <a href='/signup'> <h3 id="signUp" className='startStyle'>Sign-up</h3></a>

                    <a href='/info'> <h3 id="info" className='startStyle'>Info</h3></a>
                </div>

            </div>
        )
    }
}

export default Start