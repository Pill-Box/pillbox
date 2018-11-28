

import React from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'


class AddPatientModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
     
      return (
        <div>
          <p>Click to get the full Modal experience!</p>
  
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Launch demo modal
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
  export default AddPatientModal