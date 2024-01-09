'use client'
import { useState, useEffect } from 'react';
import { RegisStep } from '@/app/ui/signup/regis/regisStep';

export default function registration() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    setUserEmail(email);
  }, []);

  return (
    <RegisStep step={1}/>
  )
}