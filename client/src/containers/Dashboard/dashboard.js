import React from 'react'
import Title from '../../components/Title/title'
import { PatientCard } from '../../components/PatientCard/patientCard'
import { Rx } from '../../components/PatientCard/rx'
import TabScreens from '../../components/Sidebar/bottomBar'
import axios from 'axios'
import './dashboard.css'
import DeleteBtn from '../../components/Buttons/deleteBtn'
import RxModalBtn from '../../components/Buttons/ModalBtn'
import RxModal from '../../components/RxModal/rxModal'

class Dashboard extends React.Component {

    state = {
        patients: [],
        drugNames: [],
        userId: "",
        show: false,
        patientId: '',
        isLoggedIn: ''
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

    handleRxModal = id => {
        console.log(id)
        this.setState({ show: true, patientId: id })

    }

    handleHideModal = () => this.setState({ show: false })

    render() {

        return (
            <div className="dashboard-body gradient-background">
                <Title />
                <div className="container">
                    <div className='row dashboard'>

                        {this.state.patients.filter(patient => patient.id === this.state.patientId).map(patient => (
                            <RxModal
                                show={this.state.show}
                                handleClose={this.handleHideModal}
                                key={patient.id}>
                                <strong>{patient.name_first} </ strong>
                                <strong>{patient.name_last}</strong>
                                <hr />
                                {patient.Rxes.map(drug => (
                                    <Rx key={drug.id}>
                                        Medication: {drug.drug_name}<br />
                                        Prescription Number: {drug.rx_num}<br />
                                        Refills: {drug.refills}<br />
                                        Quantity Dispensed: {drug.dispensed_qty}<br />
                                        Frequency: {drug.frequency}<br />
                                        Usage Per Day: {drug.perDay}<br />
                                        Time of Day: {drug.time_of_day}<br />
                                        Prescriber: {drug.prescriber}<br />
                                        Prescriber Number: {drug.prescriber_number}<br />
                                        Pharmacist: {drug.pharmacist}<br />
                                        Pharmacy Number: {drug.pharmacy_number}<br />
                                        Notes: {drug.notes}<br />
                                    </Rx>
                                ))}
                            </RxModal>
                        ))}

                        <div className='col-md-12 patient-cards'>
                            {this.state.patients.map(patient => (
                                <PatientCard
                                    key={patient.id}>
                                    <RxModalBtn onClick={() => this.handleRxModal(patient.id)} />
                                    <DeleteBtn onClick={() => this.deletePatient(patient.id)} />
                                    {patient.name_first}
                                    {patient.name_last}
                                    {patient.Rxes.map(drug => (
                                        <Rx key={drug.id}>
                                            <strong><i className="fas fa-prescription-bottle-alt"></i>{'    '}</strong> {drug.drug_name} {' '}|{'  '}<strong><i className="far fa-clock"></i>{'  '}</strong> {drug.time_of_day}
                                            <DeleteBtn onClick={() => this.deleteRx(drug.id)} />
                                        </Rx>
                                    ))}
                                </PatientCard>

                            ))}
                            <a href='/addpatient'><button className="standard-btn">ADD NEW PATIENT</button></a>

                        </div>
                    </div>
                </div>
                <TabScreens />
            </div>

        )
    }
}

export default Dashboard