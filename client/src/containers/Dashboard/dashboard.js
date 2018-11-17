import React from 'react'
import TabScreens from '../../components/Sidebar/bottomBar'
import Title from '../../components/Title/title'
import axios from 'axios'
import './dashboard.css'

class Dashboard extends React.Component {

    componentDidMount() {
        this.loadUser();
    }

    loadUser = () => {
 
    }
    render() {
        return (
            <div className="dashboard-body gradient-background">
                <Title />
                <div className='row dashboard'>
                    <div className='col-md-12 patient-cards'>
                      
                            />
                        )
                        )}
                    </div>
                </div>
                <TabScreens />
            </div>
        )
    }
}

export default Dashboard