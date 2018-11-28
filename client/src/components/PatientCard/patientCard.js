import React from 'react'
import './patientCard.css'

export const PatientCard = ({ children }) => (
    <div>
        <div className="patient-card">
            <div className="patient-card-header">
                {children[0]} {children[1]} {children[2]} {children[3]} 
            </div>
            <hr />
            <div className="patient-card-body">
                {console.log(children)}
                <p className="card-text">{children[4]}</p>
            </div>
        </div>
        <br />
    </div>
);

