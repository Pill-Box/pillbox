import React from 'react'
import Title from '../../components/Title/title'
import { PatientCard } from '../../components/PatientCard/patientCard'
import { Rx } from '../../components/PatientCard/rx'
import TabScreens from '../../components/Sidebar/bottomBar'
import axios from 'axios'
import './dashboard.css'
import DeleteBtn from '../../components/DeleteButton/deleteBtn'
import { relativeTimeThreshold } from '../../../../node_modules/moment';


class Dashboard extends React.Component {

    state = {
        patients: [],
        drugNames: [],
        userId: ""
    }

    async componentDidMount() {
        let accessString = localStorage.getItem('JWT');
        console.log(accessString);
        if (accessString == null) {
            this.setState({
                isLoading: false,
                error: true,
            });
        } else {
            await axios
                .get('/findUser', {
                    params: {
                        username: this.props.match.params.username,
                    },
                    headers: { Authorization: `JWT ${accessString}` },
                })
                .then(response => {
                    this.setState({
                        userId: response.data.id,
                        isLoading: false,
                        error: false,
                    });
                })
                .catch(error => {
                    console.log(error.data);
                });
        }

        this.loadUser();
    }

    loadUser = () => {
        axios.get('/api/user/patient/rx/' + this.state.userId)
            .then(patientData => {
                // console.log(patientData.data.Patients);
                this.setState({
                    patients: patientData.data.Patients
                })
            })
            .catch(err => console.log(`Error: ${err}`)
            );
    }

    deleteRx = id => {
        axios.delete('/api/Rxs/' + id)
            .then(res => this.loadUser())
            .catch(err => console.log(err));
    };

    deletePatient = id => {
        axios.delete('/api/user/patient/' + id)
            .then(res => this.loadUser())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {

        return (
            <div className="dashboard-body gradient-background">
                <Title />
                <div className="container">
                    <div className='row dashboard'>
                        <div className='col-md-12 patient-cards'>
                                             {this.state.patients.map(patient => (
                                                                              
                                <PatientCard
                                    key={patient.id}
                            
                                    >
                                    {patient.name_first}
                                    <DeleteBtn onClick={() => this.deletePatient(patient.id)}/>
                                 
              
                                    {patient.Rxes.map(drug => (
                                        <Rx key={drug.id}>
                                            {drug.drug_name}
                                            <DeleteBtn onClick={() => this.deleteRx(drug.id)} />
                                        </Rx>
                                    ))}
                                </PatientCard>
                
                            ))}
                            <button className="standard-btn">ADD NEW PATIENT</button>

                        </div>
                    </div>
                </div>
                <TabScreens />
            </div>

        )
    }
}

export default Dashboard