import React, { Component } from "react";
import axios from "axios";
import TabScreens from '../../components/Sidebar/bottomBar'
import './addRx.css'


class AddRx extends Component {

    componentDidMount() {
        axios.get('/api/Rxs', {
            
        });
    }

    state = {
        drugName: "",
        ndc: "",
        refills: "",
        quantityDispensed: "",
        sig: "",
        frequency: "",
        timeOfDay: "",
        pharmacist: "",
        pharmacyContact: "",
        prescriber: "",
        prescriberContact: "",
        notes: "",
        UserId: 1
    };

    handleInputChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();

        // const {name,value} = event.target;

        axios.post('/api/Rxs', {
            drug_name: this.state.drugName,
            ndc: this.state.ndc,
            refills: this.state.refills,
            dispensed_qty: this.state.quantityDispensed,
            sig: this.state.sig,
            frequency: this.state.frequency,
            time_of_day: this.state.timeOfDay,
            pharmacist: this.state.pharmacist,
            pharmacy_number: this.state.pharmacyContact,
            prescriber: this.state.prescriber,
            prescriber_number: this.state.prescriberContact,
            UserId: 1
        }).then(function (response) {
            // use to set form values back to null
            // this.setState({
            //     drugName: '',
            // });
        });

      };
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group formStyle borderOrange">
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