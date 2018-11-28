import React from 'react'
import './patientCard.css'

export const PatientCard = ({ children }) => (
    <div>
        <div className="card">
            <div className="card-header">
                Prescriptions for 
                {children[0]} {children[1]} {children[2]} {children[3]} 
            </div>
            <hr />
            <div className="card-body">
                {console.log(children)}
                <p className="card-text">{children[4]} {children[5]}</p>

            </div>
        </div>
        <br />
    </div>
);

