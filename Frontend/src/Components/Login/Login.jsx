import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css'; 

function BasicExample() {
  return (
    <Form className='form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='email text'>Email</Form.Label>
        <Form.Control className='input email' type="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='password text'>Password</Form.Label>
        <Form.Control className='input password' type="password"/>
      </Form.Group>

      <Button className="btn-signin" variant="primary" type="submit">
        Sign in
      </Button>
    </Form>
  );
}

export default BasicExample;