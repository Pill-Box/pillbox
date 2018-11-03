import React from 'react'
import './start.css'
import Title from '../../components/Title/title'

class Start extends React.Component {
    render() {
        return (
            <div>
            <Title />
           <br />
           <br />
            <div className='row'>
                <div className='col-md-12'>
                    <h3 className='boxStyle'>Log-in</h3>
                </div>
            </div>
            <br />
            <div className='row'>
                <div className='col-md-12'>
                    <h3 className='boxStyle'>Sign-up</h3>
                </div>
            </div>
            <br />
            <div className='row'>
                <div className='col-md-12'>
                    <h3 className='boxStyle'>Info</h3>
                </div>
            </div>
            </div>
        )
    }
}

export default Start