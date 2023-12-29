import '@/app/ui/css/textfield.css'
import React, { useState, useEffect } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { roboto } from './fonts';


export const TextField = ({ type, label, validator, value: propValue, ...props }) => {
  const [value, setValue] = useState(propValue || '');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  const validateInput = async (e) => {
    const value = e.target.value;
    setValue(value); 
    try {
      if (validator) {
        await validator(value);
      }
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }

  const handleBlur = async (e) => {
    if (!e.target.value) {
      setError(props.message);
    } else {
      try {
        if (validator) {
          await validator(e.target.value);
        }
      } catch (err) {
        setError(err.message);
      }
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <div className={`field ${roboto.className}`}>
        <input 
          type={type === 'password' && showPassword ? 'text' : type} 
          className={`text-input ${roboto.className} font-light`} 
          required 
          onChange={validateInput} 
          onBlur={handleBlur} 
          value={value} 
          {...props}
        />
        {type === 'password' && (
          <button type="button" className='show-password' onClick={toggleShowPassword}>
            {showPassword ? <IoMdEye/> : <IoMdEyeOff/>}
          </button>
        )}
        <label className={`floating-label ${value ? 'has-value' : ''} font-light`}>{label}</label>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};