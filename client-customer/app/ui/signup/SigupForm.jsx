import { useState, useEffect } from 'react';
import { RedButton } from "@/app/ui/RedButton";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from 'next/navigation';

export function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleEmailChange = (event) => {
    let inputEmail = event.target.value.trimStart();
    setEmail(inputEmail);
    // Kiểm tra xem email có rỗng không
    if (inputEmail === '') {
      setErrorMessage('Bạn cần nhập vào email.');
    } else if (inputEmail.length < 5) {
      setErrorMessage(''); // Không hiển thị lỗi nếu độ dài email ít hơn 5
    } else {
      // Kiểm tra xem email có hợp lệ không
      const emailRegex = /^[^\s@]{5,}@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputEmail)) {
        setErrorMessage('Email không hợp lệ.');
      } else {
        setErrorMessage('');
      }
    }
  };
  
  // const handleFocus = () => {
  //   setIsFocused(true);
  // };
  
  // const handleBlur = () => {
  //   setIsFocused(false);
  // };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Kiểm tra xem email có hợp lệ không
    if (errorMessage) {
      return;
    }
    // Lưu email vào localStorage để sử dụng ở trang kế tiếp
    localStorage.setItem('userEmail', email);
    // Chuyển hướng đến trang /signup/registration
    router.push('/signup/registration');
  };

  const existingEmail = () => {
    const emailExist = localStorage.getItem('userEmail');
    if (emailExist) {
      setEmail(emailExist);
    } else {
      setEmail('');
    }
  }
  
  useEffect(() => {
    existingEmail();
  }, []);

  return (
    <form className="sub-form" onSubmit={handleSubmit}>
      <h3 className="sub-header">
        Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt
        lại tư cách thành viên của bạn.
      </h3>
      <div className="sub-content flex">
        <div className="field flex-1 h-14 mr-2">
          <input
            id="email"
            type="text"
            className="text-input font-normal border-gray-600 bg-black/45 border rounded"
            required
            value={email}
            onChange={handleEmailChange}
            // onFocus={handleFocus}
            // onBlur={handleBlur}
            aria-describedby="emailError"
          />
          <label
            htmlFor="email"
            className="floating-label font-light"
          >
            Địa chỉ email
          </label>
          {errorMessage && !isFocused && <span id="emailError">{errorMessage}</span>}
        </div>
        <RedButton type='submit' className="w-[162px] h-14 text-[25px] flex items-center justify-center">
          Bắt đầu <IoIosArrowForward />
        </RedButton>
      </div>
    </form>
  )
}