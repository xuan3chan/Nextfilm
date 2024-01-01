import { roboto } from "@/app/ui/fonts";
import { RedButton } from "@/app/ui/RedButton";
import Link from "next/link";
import axios from "axios";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import "@/app/ui/css/textfield.css";
import "@/app/ui/css/checkbox.css";
import { useRouter } from "next/navigation";

const apiURL = process.env.NEXT_PUBLIC_LOGIN;

export default function LoginForm()  {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(apiURL, {
        email: email,
        password: password,
      });
      console.log(response.data);
      if (response.data.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
        router.push("/browse");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="login-body" onSubmit={handleLogin}>
      <div className="login-form">
        <div className="login-form-main">
          <h1
            className={`${roboto.className} antialiased text-loginTitle mb-7 text-white`}
          >
            Đăng nhập
          </h1>
        </div>
        <div className="w-full text-white">
          <div className="field">
            <input
              id="email"
              type="text"
              className="text-input font-light"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              htmlFor="emailorphonenumber"
              className="floating-label font-light"
            >
              Email hoặc số điện thoại
            </label>
          </div>
          <div className="field">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="text-input font-light"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="show-password"
              onClick={toggleShowPassword}
            >
              {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </button>
            <label
              htmlFor="emailorphonenumber"
              className="floating-label font-light"
            >
              Mật khẩu
            </label>
          </div>
          <RedButton 
            type="submit" 
            className={`w-full h-12 mt-6 mb-3 font-medium`}
          >Đăng nhập</RedButton>
          <div className="flex justify-between items-center">
            <div className={`checkbox-wrapper-13 ${roboto.className}`}>
              <input id="c1-13" type="checkbox" />
              <label className="text-sm" htmlFor="c1-13">
                Ghi nhớ mật khẩu
              </label>
            </div>
            <Link href="login-help">
              <span className="text-sm">bạn cần trợ giúp?</span>
            </Link>
          </div>
          <div className={`${roboto.className} mt-7`}>
            Bạn mới tham gia NextFilm? <Link href='/signup' className="">Đăng ký ngay.</Link>
          </div>
        </div>
      </div>
    </form>
  );
};
