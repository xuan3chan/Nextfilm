import '@/app/ui/css/textfield.css'
import React, { useState } from 'react';

export const TextField = ({ type, label, validator, ...props }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

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
      <div className="field">
        <input 
          type={type === 'password' && showPassword ? 'text' : type} 
          className="text-input" 
          required 
          onChange={validateInput} 
          onBlur={handleBlur} 
          value={value} 
          {...props}
        />
        {type === 'password' && (
          <button type="button" className='show-password' onClick={toggleShowPassword}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
        <label className={`floating-label ${value ? 'has-value' : ''}`}>{label}</label>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};