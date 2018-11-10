import React from 'react'
import TabScreens from '../../components/Sidebar/bottomBar'
import Card from '../../components/PatientCard/patientCard'
import patients from '../../components/tempName.json'
import './dashboard.css'

class Dashboard extends React.Component {
    state = { patients }

    render() {
        return (
            <body className='body'>
            <div>
                <div className='row'>
                    <div className='col-md-12'>
                        {patients.map(patient => (
                            <Card
                                id={patient.id}
                                key={patient.id}
                                name={patient.name}
                                birthday={patient.birthday}
                                Rx={patient.Rx}
                                TOD={patient.TOD}
                                frequency={patient.frequency}
                            />
                        )
                        )}
                    </div>
                </div>
                {/*  <TabScreens /> */}
            </div>
</body>
        )
    }
}

export default Dashboard