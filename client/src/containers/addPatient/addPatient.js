import React from 'react'
import TabScreens from '../../components/Sidebar/bottomBar'
import './addPatient.css'
import axios from 'axios'

class AddPatient extends React.Component {
    state = {
        patients: [],
        firstName: "",
        lastName: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    loadPatients = () => {
        axios.get('/api/patients')
            .then(res =>
                this.setState({ patients: res.data, name_first: '', name_last: '' })
            )
            .catch(err => console.log(`Error: ${err}`))
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("CLICK")
        axios.post('/api/patients', {
            name_first: this.state.firstName,
            name_last: this.state.lastName
         })
        // .then(response => this.loadPatients()) 
        // // console.log("CLICKETY CLICK")
        //     .catch(err => console.log(`You have an error: ${err}`))

    };

    render() {
        return (
            <div className="dashboard-body gradient-background">
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
                        </div>
                        <button onClick={this.handleFormSubmit} className="btn btn-primary gePatientData">Submit</button>
                    </div >
                </div >
                <TabScreens />
            </div>
        )
    }
}

export default AddPatient