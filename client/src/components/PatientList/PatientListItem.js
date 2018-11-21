import React from 'react'

export const PatientListItem = props => (
    <option
        value={props.children[0]}
    >
        {props.children[1]}
    </option>
)
