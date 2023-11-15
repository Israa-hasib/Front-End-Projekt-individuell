import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './register.css';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ``,
    password: ''
  });

  const navigate = useNavigate ()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your Node.js backend endpoint
      const response = await axios.post('http://localhost:2323/api/users/register', formData);

      // Handle successful registration, for example, redirect to login page
      console.log('Registration successful:', response.data);
      if(response.data.token) {
        localStorage.setItem("TOKEN", response.data.token)

        navigate("/")
      }
    } catch (error) {
      // Handle registration error, for example, display an error message to the user
      console.error('Registration failed:', error);
    }
  };

  return (
    <Container className='register'>
      <Form className='' onSubmit={handleSubmit}>
        <h1 className='h1-register'>REGISTER</h1>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label className='input-label'>First Name</Form.Label>
          <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label className='input-label'>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className='input-label'>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label className='input-label'>Password</Form.Label>
          <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
        </Form.Group>
        <Button className='btn-create' type="submit">Create User</Button>
      </Form>
    </Container>
  );
}

export default RegisterPage;