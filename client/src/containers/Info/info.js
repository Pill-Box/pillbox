import React from 'react'
import Title from '../../components/Title/title'

class Info extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <div className='bbstyle'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <img src='../client/public/pillbox.png' alt="pillbox" />
                            <p>Pillbox was born out of the need to...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info