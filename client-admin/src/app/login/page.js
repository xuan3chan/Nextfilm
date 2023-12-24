// /app/login.js
import React from "react";
import "@/styles/login.css";
import Link from "next/link";
const Login = () => {
  return (
    <div className="bg-color w-full min-h-screen flex justify-center items-center">
      <div className="Login-Section">
        <div className="LoginBannerImage">
          <img
            src="https://i.pinimg.com/originals/72/f2/29/72f229badd98e1ad269d0260f5ef92fe.jpg"
            alt=""
          />
        </div>
        <div className="LoginForm px-5">
          <div className="text-xl font-bold mb-4">Đăng Nhập</div>
          <div className="mb-4 w-full">
            <label className="block dark:text-white">
              Email
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Nhập Email"
              type="text"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block  dark:text-white">
              Password
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Nhập Password"
              type="password"
            />
          </div>
          <Link href="/login" className="ForgotPassword">
            Quên Mật Khẩu?
          </Link>
          <button className="btn BtnLogin">Đăng Nhập</button>
          <div className="RectangleSection flex justify-center items-center gap-2">
            <div className="RectangleLine"></div>
            <span>hoặc</span>
            <div className="RectangleLine"></div>
          </div>
          <button className="btn BtnRegist">Đăng Ký Ngay</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
