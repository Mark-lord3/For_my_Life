import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3002/api/register', {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password
      });
      console.log('Response:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main>
      <h2>Register</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
        <div>
          <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </main>
  );
};

export default Register;
