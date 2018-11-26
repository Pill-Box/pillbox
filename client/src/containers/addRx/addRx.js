import React, { Component } from "react";
import axios from "axios";
import TabScreens from '../../components/Sidebar/bottomBar'
import './addRx.css'

class AddRx extends Component {

    state = {
        drugName: "",
        ndc: "",
        refills: "",
        quantityDispensed: "",
        sig: "",
        frequency: "",
        perDay: "",
        timeOfDay: "",
        pharmacist: "",
        pharmacyContact: "",
        prescriber: "",
        prescriberContact: "",
        notes: "",
        patientId: "1",
        Name_First: "",
        Name_Last: "",
        patients: [],
        userId: ""
    };

    componentDidMount() {
        this.loadPatients()
    }

    loadPatients = () => {
        axios.get('/api/user/1')
            .then(patientData => {
                console.log(patientData.data);
                this.setState({
                    patients: patientData.data.Patients
                })
            })
            .catch(err => console.log(`Error: ${err}`)
            );
    }

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();

        axios.post('/api/Rxs', {
            drug_name: this.state.drugName,
            ndc: this.state.ndc,
            refills: this.state.refills,
            dispensed_qty: this.state.quantityDispensed,
            sig: this.state.sig,
            frequency: this.state.frequency,
            perDay: this.state.perDay,
            time_of_day: this.state.timeOfDay,
            pharmacist: this.state.pharmacist,
            pharmacy_number: this.state.pharmacyContact,
            prescriber: this.state.prescriber,
            prescriber_number: this.state.prescriberContact,
            patient: this.state.patient,
            PatientId: this.state.patientId
        }).then(function (response) {
            // use to set form values back to null
            this.setState({
                drugName: '',
            });
        });

    };

    render() {
        let optionItems = this.state.patients.map(patient =>
            <option key={patient.id} value={patient.id}>{patient.name_first}</option>
        );

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group formStyle borderOrange">
                            <select className="form-control formFieldsStyle"
                                value={optionItems.key}
                                name="patientId"
                                onChange={this.handleInputChange}
                            >
                                {optionItems}
                            </select>
                            <input type="text" className="form-control formFieldsStyle" placeholder="Drug Name"
                                value={this.state.drugName}
                                name="drugName"
                                onChange={this.handleInputChange}
                            />
                            <input type="text" className="form-control formFieldsStyle" id="ndc" placeholder="NDC: 0000-000-000"
                                value={this.state.ndc}
                                name="ndc"
                                onChange={this.handleInputChange}
                            />
                            <input type="text" className="form-control formFieldsStyle" placeholder="Refills"
                                value={this.state.refills}
                                name="refills"
                                onChange={this.handleInputChange}
                            />
                            <input type="text" className="form-control formFieldsStyle" placeholder="Quantity Dispensed"
                                value={this.state.quantityDispensed}
                                name="quantityDispensed"
                                onChange={this.handleInputChange}
                            />
                            <input type="text" className="form-control formFieldsStyle" placeholder="Patient Instructions"
                                value={this.state.sig}
                                name="sig"
                                onChange={this.handleInputChange}
                            />
                            <input type="text" className="form-control formFieldsStyle" placeholder="Frequency"
                                value={this.state.frequency}
                                name="frequency"
                                onChange={this.handleInputChange}
                            />
                            <select className="form-control formFieldsStyle" id="timeOfDay" placeholder="Time of Day"
                                value={this.state.perday}
                                name="perDay"
                                onChange={this.handleInputChange}
                            >
                                <option value="">Per Day</option>
                                <option value="1">Once</option>
                                <option value="2">twice</option>
                                <option value="3">Three</option>
                                <option value="4">As Needed</option>
                            </select>
                            <select className="form-control formFieldsStyle" id="timeOfDay" placeholder="Time of Day"
                                value={this.state.timeOfDay}
                                name="timeOfDay"
                                onChange={this.handleInputChange}
                            >
                                <option value="">Time of Day</option>
                                <option value="Morning">Morning</option>
                                <option value="Noon">Noon</option>
                                <option value="Evening">Evening</option>
                                <option value="Bedtime">Bedtime</option>
                            </select>
                            <input type="text" className="form-control formFieldsStyle" placeholder="Pharmacist"
                                value={this.state.pharmacist}
                                name="pharmacist"
                                onChange={this.handleInputChange}
                            />
                            <input type="text" className="form-control formFieldsStyle" placeholder="Pharmacy Contact"
                                value={this.state.pharmacyContact}
                                name="pharmacyContact"
                                onChange={this.handleInputChange}
                            />
                            <input type="text" className="form-control formFieldsStyle" placeholder="Prescriber"
                                value={this.state.prescriber}
                                name="prescriber"
                                onChange={this.handleInputChange}
                            />
                            <input type="text" className="form-control formFieldsStyle" placeholder="Prescriber Contact"
                                value={this.state.prescriberContact}
                                name="prescriberContact"
                                onChange={this.handleInputChange}
                            />
                            <textarea className="form-control formFieldsStyle" placeholder="Notes"
                                value={this.state.notes}
                                name="notes"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary getRxData">Submit</button>
                    </div>
                </div>
                <TabScreens />
            </div>
        ) //return
    } //render
}

export default AddRx