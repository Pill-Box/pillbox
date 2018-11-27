import React from 'react'
import './patientCard.css'

export const PatientCard = ({ children }) => (
    <div className="card">
        <div className="card-header">
            {children[0]} {children[1]}
        </div>
        <hr />
        <div className="card-body">
            {console.log(children)}
            <p className="card-text">{children[2]}</p>
 
        </div>
    </div>
);

