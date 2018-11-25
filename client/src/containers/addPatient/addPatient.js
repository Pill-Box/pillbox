import React from 'react'
import TabScreens from '../../components/Sidebar/bottomBar'
import './addPatient.css'
import axios from 'axios'
import Title from '../../components/Title/title'


class AddPatient extends React.Component {

    state = {
        patients: [],
        firstName: "",
        lastName: "",
        userId: ""
    };
    componentDidMount() {
        this.loadPatients()
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    loadPatients = () => {
        axios.get('/api/user/1')
            .then(res => {
                console.log(res.data.Patients)
                this.setState({
                    patients: res.data.Patients,
                    name_first: '',
                    name_last: '',
                    userId: ''
                })
            })
            .catch(err => console.log(`Error: ${err}`)
            )
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("CLICK")
        axios.post('/api/patients', {
            name_first: this.state.firstName,
            name_last: this.state.lastName,
            UserId: this.state.userId
        })
    };

    render() {
        return (
            <div className="dashboard-body gradient-background">
                <Title />
                <div className="container">
                    <div className='row'>
                        <div className='col-md-12'>

                            <h3>Switch to another user:</h3>
                            {this.state.patients.length ?
                                (null) : (
                                    <p className='add'>You currently have no other people on your list</p>
                                )}

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-12'>
                            <h3>Add a new person!</h3>
                            <div className="form-group formStyle borderOrange">
                                <input type="text" className="form-control formFieldsStyle"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                    name="firstName"
                                    placeholder="First Name"
                                />
                                <input type="text" className="form-control formFieldsStyle"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                    name="lastName"
                                    placeholder="Last Name"
                                />
                                <button onClick={this.handleFormSubmit} className="btn btn-primary standard-btn gePatientData">Submit</button>
                            </div>
                        </div >
                    </div >
                </div>
                <TabScreens />
            </div>
        )
    }
}

export default AddPatient