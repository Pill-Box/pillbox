import React from 'react'
import './patientCard.css'

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                   <strong>{this.props.name}</strong>
                </div>
                <hr />
                <div className="card-body">
                    <h5 className="card-title"><strong>Birthday: </strong>{this.props.birthday}</h5>
                    <p className="card-text"><strong>Prescriptions: </strong>{this.props.Rx}</p>
                    <p className="card-text"><strong>Taken: </strong>{this.props.frequency}</p>
                    <p className="card-text"><strong>Taken: </strong>{this.props.TOD}</p>
                </div>
            </div>
        )
    }
}

export default Card