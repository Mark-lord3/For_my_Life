import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Cookies from 'universal-cookie';
import axios from 'axios';

// import jwt from 'jsonwebtoken';
const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();
    axios.defaults.withCredentials=true;
    const handleLogin = async () => {
    // Check your authentication logic here
    
        axios.get('http://localhost:3002/api/login', {
        params: {
            email: email,
            password: password
        },
        withCredentials:true,
        
        }).then((response) => {
            console.log('Response:', response.data);
            // navigate('/');
        }).catch((error) => {
            // Handle login error
            if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Server responded with an error:', error.response.data);
            } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
            } else {
            // Something happened in setting up the request that triggered an error
            console.error('Error setting up the request:', error.message);
            }
        });
    }
    


  return (
    <main>
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <div>
          <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Login;
