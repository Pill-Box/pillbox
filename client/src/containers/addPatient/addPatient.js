import React from 'react'
import TabScreens from '../../components/Sidebar/bottomBar'
import './addPatient.css'

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

    render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-md-12'>
                    Current people on your list:
                    {/* { ? : null} */}

                    <p>Add a new person and track prescriptions</p>
                        <form>
                            <input
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                                name="firstName"
                                placeholder="First Name"
                            />
                            <input
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                                name="lastName"
                                placeholder="Last Name"
                            />
                        </form>
                    </div>
                </div>
                <TabScreens />
            </React.Fragment>
        )
    }
}

export default AddPatient