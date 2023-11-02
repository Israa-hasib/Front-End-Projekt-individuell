import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import './register.css'

function Register() {
  return (
    <Form className='form'>
      <h1 className='h1 register'>REGISTER</h1>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='input-label'>First Name</Form.Label>
        <Form.Control type="firstname"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='input-label'>Last Name</Form.Label>
        <Form.Control type="lastname"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='input-label'>Email</Form.Label>
        <Form.Control type="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='input-label'>Password</Form.Label>
        <Form.Control type="password"/>
      </Form.Group>

      <Button className='btn-create' variant="primary" type="create">
        Create
      </Button>
    </Form>
  );
}

export default Register;