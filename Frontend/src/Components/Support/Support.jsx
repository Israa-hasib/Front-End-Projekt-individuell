import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import './support.css'; 

function Support() {
  return (
    <Form className='form'>
      <h1 className='h1 support'>SUPPORT</h1>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='input-label'>Email</Form.Label>
        <Form.Control className='input email' type="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='input-label'>Message</Form.Label>
        <Form.Control className='input message' type="message"/>
      </Form.Group>

      <Button className="btn-send" variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
}

export default Support;
