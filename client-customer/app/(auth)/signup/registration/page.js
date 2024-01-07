'use client'
import { useState, useEffect } from 'react';

export default function RegisterForm() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    setUserEmail(email);
  }, []);

  return (
    <div>
      <h1>Register Form</h1>
      <input 
        type="text"
        value={userEmail}
      />
    </div>
  )
}