import React from 'react'
import './bottomBar.css'

class TabScreens extends React.Component {
    render() {
        return (
            <div className='bottomNav'>
                <div className='row'>
                    <div className='col-md-3'>
                        <a href='/dashboard'><i className="fas fa-home"></i></a>
                    </div>
                    <div className='col-md-3'>
                        <a href='/addRx'><i className="fas fa-prescription-bottle-alt"></i></a>
                    </div>
                    <div className='col-md-3'>
                        <a href='/addpatient'><i className="fas fa-users"></i></a>
                    </div>
                    <div className='col-md-3'>
                        <a href='/signout'><i className="fas fa-sign-out-alt"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default TabScreens