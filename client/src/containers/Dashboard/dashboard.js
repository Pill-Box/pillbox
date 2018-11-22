import React from 'react'
import Title from '../../components/Title/title'
import { PatientCard } from '../../components/PatientCard/patientCard'
import { Rx } from '../../components/PatientCard/rx'
import TabScreens from '../../components/Sidebar/bottomBar'
import axios from 'axios'
import './dashboard.css'

class Dashboard extends React.Component {

    state = {
        patients: [],
        drugNames: [],
        userId: ""
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser = () => {
        axios.get('/api/user/patient/rx/1')
        .then(patientData => {
            console.log(patientData.data.Patients);
            this.setState({
                patients: patientData.data.Patients
            })
        })
        .catch(err => console.log(`Error: ${err}`)
        );
    }

    handleInputChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {

        return (
            <div className="dashboard-body gradient-background">
                <Title />
                <div className='row dashboard'>
                    <div className='col-md-12 patient-cards'>
                        {this.state.patients.map(patient => (
                            <PatientCard
                                key={patient.id}
                            >
                                {patient.name_first}
                                {patient.name_last}
                                {patient.Rxes.map(drug => (
                                    <Rx>
                                        {drug.drug_name}
                                    </Rx>
                                ))}
                            </PatientCard>
                        ))}
                    </div>

                </div>
                <TabScreens />
            </div>
        )
    }
}

export default Dashboard