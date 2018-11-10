import React from 'react'
import './bottomBar.css'

class TabScreens extends React.Component {
    render() {
        return (
            <div className='bottomNav'>
                <div className='row'>
                    <div className='col-md-3'>
                        <a href='/dashboard'><i class="fas fa-home"></i></a>
                    </div>
                    <div className='col-md-3'>
                        <i class="fas fa-prescription-bottle-alt"></i>
                    </div>
                    <div className='col-md-3'>
                        <i class="fas fa-users"></i>
                    </div>
                    <div className='col-md-3'>
                    <i class="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
        )
    }
}
export default TabScreens