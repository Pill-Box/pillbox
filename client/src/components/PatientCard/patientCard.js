import React from 'react'
import './patientCard.css'

class Card extends React.Component {
    render() {
        return (
            <div className="patient-card">
                <div className="patient-card-header">
                   <strong>{this.props.name}</strong>
                </div>
                <hr />
                <div className="patient-card-body">
                    <p><strong>Birthday: </strong>{this.props.birthday}</p>
                    <p><strong>Prescriptions: </strong>{this.props.Rx}</p>
                    <p><strong>Taken: </strong>{this.props.frequency}</p>
                    <p><strong>Taken: </strong>{this.props.TOD}</p>
                </div>
            </div>
        )
    }
}

export default Card;