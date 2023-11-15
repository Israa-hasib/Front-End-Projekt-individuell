import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useUser } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const user = useUser()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate ()

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:2323/api/users/login', {
        email,
        password
      })
      console.log("Response", response.data)
      if (response.status === 200) {
        // Login successful
        console.log('Login successful');
        
        if(response.data.token) {
          localStorage.setItem("TOKEN", response.data.token)
          //TODO: route to user page
          navigate("/")
          user.setToken(response.data.token)
        }
      } else {
        // Login failed
        console.error('Login failed');
        console.log("Response:", response, email, password)
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  return (
    <Container className='login'>
      <Form>
        <h1 className='h1-login'>LOGIN</h1>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className='input-label'>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label className='input-label'>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button className='btn-signin' onClick={handleLogin}>Log In</Button>
      </Form>
    </Container>
  );
}

export default LoginPage;


