import React from 'react'
import './bottomBar.css'

class TabScreens extends React.Component {

    render() {
        return (
            <div className='bottomNav'>
                <div className='row'>
                                <div className='col-md-2 bar-cols'>
                  
                        <a href='/dashboard' data-toggle="tooltip" data-placement="top" title="Dashboard"><i className="fas fa-home"></i></a>
                    </div>
                  
                    <div className='col-md-3 bar-cols'>
                        <a href='/addRx' data-toggle="tooltip" data-placement="top" title="Add Rx"><i className="fas fa-prescription-bottle-alt"></i></a>
                    </div>
                    <div className='col-md-2 bar-cols'>
                        <a href='/addpatient' data-toggle="tooltip" data-placement="top" title="Add patient"><i className="fas fa-users"></i></a> 
                    </div>
                    <div className='col-md-3 bar-cols'>
                        <a href='/calendar'><i className="far fa-calendar-alt"></i></a>
                    </div>
                    <div className='col-md-2 bar-cols'>
                        <a href='/signout' data-toggle="tooltip" data-placement="top" title="Sign Out"><i className="fas fa-sign-out-alt"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default TabScreens