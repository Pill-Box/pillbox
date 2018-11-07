import React from 'react'
import Title from '../../components/Title/title'
import image from '../../components/Images/pillbox.png'

class Info extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <div className='col-md-12' id='image'>
                    <img src={image} alt="pillbox" />
                </div>
                <div className='bbstyle'>
                    <div className='row'>
                        <div className='col-md-12'>

                            <p>Pillbox was born out of the need to...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info