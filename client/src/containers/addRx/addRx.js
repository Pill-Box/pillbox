import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'
import TabScreens from '../../components/Sidebar/bottomBar'
import './addRx.css'
import Title from '../../components/Title/title'


class AddRx extends Component {

    state = {
        rx_num: "",
        drugName: "",
        ndc: "",
        refills: "",
        quantityDispensed: "",
        sig: "",
        dosage: "",
        doseInterval: "",
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
        userId: "",
        redirect: false
    };

    async componentDidMount() {
        let accessString = localStorage.getItem('JWT');
        // console.log(accessString);
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

        this.loadPatient();
    }

    loadPatient = () => {
        axios.get('/api/user/patients/' + this.state.userId)
            .then(patientData => {
                console.log(patientData.data.Patients);
                this.setState({
                    patients: patientData.data.Patients,
                    patientId: patientData.data.Patients[0].id
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
        console.log(this.state.patientId);
        axios.post('/api/Rxs', {
            rx_num: this.state.rx_num,
            drug_name: this.state.drugName,
            ndc: this.state.ndc,
            refills: this.state.refills,
            dispensed_qty: this.state.quantityDispensed,
            sig: this.state.sig,
            frequency: this.state.dosage,
            perDay: this.state.doseInterval,
            time_of_day: this.state.timeOfDay,
            pharmacist: this.state.pharmacist,
            pharmacy_number: this.state.pharmacyContact,
            prescriber: this.state.prescriber,
            prescriber_number: this.state.prescriberContact,
            patient: this.state.patient,
            PatientId: this.state.patientId
        }).then(response => {
            if (response !== null) {
                console.log("Rx inserted");
                this.setState({ redirect: true })
            } else {
                console.log("Rx NOT inserted"); 
            }
        })
    };

    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/dashboard' />
        }

        let optionItems = this.state.patients.map(patient => 
            <option key={patient.id} value={patient.id}>{patient.name_first}</option>
        );
        
        return (
            <div className="gradient-background">
            <Title/>
                <div className="container bbstyle addRx-box">
                    <div className="row">
                        <div className="col-md-12">
                        <h3 className="login-h3">ADD PRESCRIPTION</h3>
                            <div className="form-group formStyle">
                                <label htmlFor="patientName" className="addRxFormLabel">Patient Name</label>
                                <select className="form-control formFieldsStyleAddRx" id="patientName"
                                    value={optionItems.key}
                                    name="patientId"
                                    onChange={this.handleInputChange}
                                >
                                    {optionItems}
                                </select>
                                <label htmlFor="rx_num" className="addRxFormLabel">Prescription Number</label>
                                <input type="text" className="form-control formFieldsStyleAddRx" id="rx_num"
                                    value={this.state.rx_num}
                                    name="rx_num"
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="rx_num" className="addRxFormLabel">Drug Name</label>
                                <input type="text" className="form-control formFieldsStyleAddRx" id='drugName'
                                    value={this.state.drugName}
                                    name="drugName"
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="ndc" className="addRxFormLabel">NDC - <i>Optional</i></label>
                                <input type="text" className="form-control formFieldsStyleAddRx" id="ndc"
                                    value={this.state.ndc}
                                    name="ndc"
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="refills" className="addRxFormLabel">Refills</label>
                                <input type="text" className="form-control formFieldsStyleAddRx" id="refills"
                                    value={this.state.refills}
                                    name="refills"
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="quantity" className="addRxFormLabel">Quantity Dispensed</label>
                                <input type="text" className="form-control formFieldsStyleAddRx" id="quantity"
                                    value={this.state.quantityDispensed}
                                    name="quantityDispensed"
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="dosage" className="addRxFormLabel">How Many</label>
                                <input type="text" className="form-control formFieldsStyleAddRx" id="dosage"
                                    value={this.state.doseInterval}
                                    name="doseInterval"
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="doseInterval" className="addRxFormLabel">How Often</label>
                                <select className="form-control formFieldsStyleAddRx" id="doseInterval"
                                    value={this.state.doseInterval}
                                    name="perDay"
                                    onChange={this.handleInputChange}
                                >
                                    <option value=""></option>
                                    <option value="1">Daily</option>
                                    <option value="2">Weekly</option>
                                    <option value="3">Monthly</option>
                                    <option value="4">As Needed</option>
                                </select>
                                <label htmlFor="timeOfDay" className="addRxFormLabel">Time of Day - <i>Optional</i></label>
                                <select className="form-control formFieldsStyleAddRx" id="timeOfDay"
                                    value={this.state.timeOfDay}
                                    name="timeOfDay"
                                    onChange={this.handleInputChange}
                                >
                                    <option value="Morning">Morning</option>
                                    <option value="Noon">Noon</option>
                                    <option value="Evening">Evening</option>
                                    <option value="Bedtime">Bedtime</option>
                                    <option value="asNeeded">As Needed</option>
                                </select>
                                <label htmlFor="SIG" className="addRxFormLabel">Patient Directions - <i>Optional</i></label>
                                <br/><i className="addRxFormLabelExample">Example: Take one tablet daily by mouth</i>
                                <input type="text" className="form-control formFieldsStyleAddRx" id="SIG"
                                    value={this.state.sig}
                                    name="sig"
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="pharmacist" className="addRxFormLabel">Pharmacist - <i>Optional</i></label>
                                <input type="text" className="form-control formFieldsStyleAddRx" id="pharmacist"
                                    value={this.state.pharmacist}
                                    name="pharmacist"
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="pharmacyContact" className="addRxFormLabel">Pharmacy Contact - <i>Optional</i></label>
                                <input type="text" className="form-control formFieldsStyleAddRx" id="pharmacyContact"
                                    value={this.state.pharmacyContact}
                                    name="pharmacyContact"
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="prescriber" className="addRxFormLabel">Prescriber - <i>Optional</i></label>
                                <input type="text" className="form-control formFieldsStyleAddRx" id="prescriber"
                                    value={this.state.prescriber}
                                    name="prescriber"
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="prescriberContact" className="addRxFormLabel">Prescriber Contact - <i>Optional</i></label>
                                <input type="text" className="form-control formFieldsStyleAddRx" id="prescriberContact"
                                    value={this.state.prescriberContact}
                                    name="prescriberContact"
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="notes" className="addRxFormLabel">Notes - <i>Optional</i></label>
                                <textarea className="form-control formFieldsStyleAddRx" id="notes"
                                    value={this.state.notes}
                                    name="notes"
                                    onChange={this.handleInputChange}
                                />
                                <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary getRxData">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <TabScreens />
            </div>
        ) //return
    } //render
}

export default AddRx