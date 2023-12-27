export const validateUsername = (value) => {
  // Add your username validation logic here
  if (value.length < 5) {
    throw new Error('Username must be at least 5 characters');
  }
};

export const validateEmail = (value) => {
  // Add your email validation logic here
  if (!value.includes('@')) {
    throw new Error('Vui lòng nhập vào email hợp lệ');
  }
};

export const validateEmailOrPhonenum = (value) => {
  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /^[0-9]{10}$/; // Adjust this regex to match your phone number format

  if (emailRegex.test(value)) {
    // If the value is an email, do nothing
  } else if (phoneRegex.test(value)) {
    // If the value is a phone number, do nothing
  } else if (isNaN(value) || value === '') {
    throw new Error('Vui lòng nhập vào email hợp lệ');
  } else {
    throw new Error('Vui lòng nhập vào số điện thoại hợp lệ');
  }
}

export const validatePassword = (value) => {
  // Add your password validation logic here
  if (value.length < 8) {
    throw new Error('Password must be at least 8 characters');
  }
};
