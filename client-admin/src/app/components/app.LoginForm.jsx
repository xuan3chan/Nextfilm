// /components/LoginForm.js
'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const DynamicLoginForm = dynamic(() => import('./LoginFormClient'), { ssr: false });

const LoginForm = () => {
  return <DynamicLoginForm />;
};

export default LoginForm;
