import React from 'react'
import './patientCard.css'
import DeleteBtn from '../DeleteButton/deleteBtn'


export const PatientCard = ({ children }, props) => (
    <div className="card">
        <div className="card-header">
            {children[0]} {children[1]}
            {/* <DeleteBtn onClick={() => props.deletePatient()}/> */}
        </div>
        <hr />
        <div className="card-body">
            {console.log(children)}
            <p className="card-text">{children[2]}</p>
 
        </div>
    </div>
);

// class Card extends React.Component {

//     render() {
//         return (
//             <div className="card">
//                 <div className="card-header">
//                    <strong>{this.props.name}</strong>
//                 </div>
//                 <hr />
//                 <div className="card-body">
//                     <p className="card-text">{children}</p>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Card
