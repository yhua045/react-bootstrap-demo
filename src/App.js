import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Modal} from 'react-bootstrap'


class App extends Component {
  render() {
    return (
      <div className="App">
        Hello world!
        <Button bsStyle="error" bsSize="large">Large button</Button>


        
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        One fine body...
      </Modal.Body>

      <Modal.Footer>
        <Button>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>
  </div>

      </div>
    );
  }
}

export default App;
