import React from 'react'
import './patientCard.css'

export const PatientCard = ({ children }) => (
    <div>
        <div className="card">
            <div className="card-header">
                <h4>{children[0]} {children[1]} {children[2]} {children[3]}</h4>
            </div>
            <hr />
            <div className="card-body">
                {console.log(children)}
                <h6 className="card-text">{children[4]}</h6>

            </div>
        </div>
        <br />
    </div>
);

