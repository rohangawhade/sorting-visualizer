import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default class UserInput extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
          value:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
      this.setState({value: event.target.value});
      console.log("value="+this.state.value);
    }

    handleSubmit(event){
      var a=this.state.value.replace(/\s/g,'');
      var array = a.split(',').map(Number);
      this.props.user(array);
      event.preventDefault();
      this.setState({value:''});
    }

    render() {
      console.log(this.props);
    return (
          <Modal
            {...this.props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Provide Input Elements
              </Modal.Title>
            </Modal.Header>
            <form onSubmit={this.handleSubmit}>
            <Modal.Body>
              <InputGroup className="mb-3">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-primary" type="submit" onClick={this.props.onHide}>Submit</Button>
            </Modal.Footer>
            </form>
          </Modal>
    );
    }
  }