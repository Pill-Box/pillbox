import React from 'react'
import TabScreens from '../../components/Sidebar/bottomBar'
import Title from '../../components/Title/title'
import Card from '../../components/PatientCard/patientCard'
import patients from '../../components/tempName.json'
import './dashboard.css'


class Dashboard extends React.Component {
    state = { patients }

    render() {
        return (
            <div className="dashboard-body gradient-background">
                <Title />
                <div className="container">

                    <div className="patient-cards">
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
                <TabScreens />
            </div>

        )
    }
}

export default Dashboard