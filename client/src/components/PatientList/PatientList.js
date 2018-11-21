import React from 'react';

export const PatientList = ({ children }) => {
    return (
        <select className="form-control formFieldsStyle">
            {children}
        </select>
    )
}

