import React, { Component } from "react";
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
        timeOfDay: "",
        pharmacist: "",
        pharmacyContact: "",
        prescriber: "",
        prescriberContact: "",
        notes: ""
    };

    handleInputChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
    
        const {name,value} = event.target;

        this.setState({
            [name]: value
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
                                name="refils"
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
                        <button onClick={this.handleFormSubmit} className="btn btn-primary getRxData">Submit</button>
                    </div>
                </div>
                <TabScreens />
            </div>
        ) //return
    } //render
}

export default AddRx