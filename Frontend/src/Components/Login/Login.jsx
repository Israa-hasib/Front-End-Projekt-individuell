import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css'; 

function Login() {
  return (
    <Form className='form'>
      <h1 className='h1 login'>LOGIN</h1>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='input-label'>Email</Form.Label>
        <Form.Control className='input email' type="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='input-label'>Password</Form.Label>
        <Form.Control className='input password' type="password"/>
      </Form.Group>

      <Button className="btn-signin" variant="primary" type="submit">
        Sign in
      </Button>
    </Form>
  );
}

export default Login;