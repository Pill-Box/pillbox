import React from "react";
import "./DeleteBtn.css";


const DeleteBtn = props => (
  <span className="delete-btn" {...props}>
    <span class="far fa-trash-alt"></span>
  </span>
);

export default DeleteBtn;