"use client"
import { useState, useEffect } from "react";
import { RegisStep } from "@/app/ui/signup/regis/RegisStep";
import { roboto } from "@/app/ui/fonts";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useRouter } from "next/navigation";
import '@/app/ui/css/textfield.css';
export default function regform() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  useEffect(() => {
    const email = sessionStorage.getItem('email');
    setEmail(email);
    if (!email) {
      window.location.href = '/signup';
    }
  }, []);

  const signup = {
    email: email,
    password: password,
    phoneNumber: phoneNumber, 
    userName: '',
  }
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNext = (e) => {
    sessionStorage.setItem('signup', JSON.stringify(signup));
    router.push('/signup/regform/reformUserName');
  }

  return (
    <>
      <div className="pb-24">
        <div className="w-fit mx-auto px-8 pt-5 pb-[60px]">
          <div className="max-w-[27rem] h-full mx-auto">
            <div className="inline-block w-fit">
              <RegisStep
                step={1}
                className={`${roboto.className} uppercase text-[13px]`}
              />
              <h1 className="text-[32px] font-semibold">
                Tạo mật khẩu để bắt đầu tư cách thành viên của bạn
              </h1>
            </div>
            <div className={`${roboto.className} text-[18px] inline-block mb-3 mt-3 font-light`}>
              <p>
                Chỉ cần vài bước nữa là bạn sẽ hoàn tất!
              </p>
              <p>
                Chúng tôi cũng chẳng thích thú gì với các loại giấy tờ.
              </p>
            </div>
            <div>
              <div className="field h-14 border-2 rounded">
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-input font-light border-black bg-[#fff] rounded text-black"
                  required
                />
                <label
                  htmlFor="email"
                  className="floating-label font-light text-black"
                >
                  Email
                </label>
              </div>
              <div className="field h-14 border-2 rounded">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="text-input font-light border-black bg-[#fff] rounded text-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="show-password text-black"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                </button>
                <label
                  htmlFor="password"
                  className="floating-label font-light text-black"
                >
                  Mật khẩu
                </label>
              </div>
              <div className="field h-14 border-2 rounded">
                <input
                  id="phoneNumber"
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="text-input font-light border-black bg-[#fff] rounded text-black"
                  required
                />
                <label
                  htmlFor="phoneNumber"
                  className="floating-label font-light text-black"
                >
                  Số điện thoại
                </label>
              </div>
            </div>
            <div>
              <button 
                onClick={handleNext}
                className="bg-[#e50914] text-white px-12 py-5 text-2xl rounded-md mt-5 hover:bg-[#f40612] w-full h-full">
                Tiếp tục
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
