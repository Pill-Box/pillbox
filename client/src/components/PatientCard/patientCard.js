import React from 'react'
import './patientCard.css'

export const PatientCard = ({ children }) => (
    <div className="patient-card">
        <div className="patient-card-header">
            {children[0]} {children[1]}
        </div>
        <hr />
        <div className="patient-card-body">
            {console.log(children)}
            <p className="card-text">{children[2]}</p>
 
        </div>
    </div>
);

