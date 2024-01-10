"use client";
import { useState } from "react";
import axios from "axios";
import { RegisStep } from "@/app/ui/signup/regis/RegisStep";
import { roboto } from "@/app/ui/fonts";
import { useRouter } from "next/navigation";
import "@/app/ui/css/textfield.css";

export default function refromUserName() {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const signup = JSON.parse(sessionStorage.getItem("signup")) || {};
    signup.userName = userName;
    sessionStorage.setItem("signup", JSON.stringify(signup));

    axios
      .post("http://localhost:8000/api/authuser/register", signup)
      .then((response) => {
        console.log(response.data);
        sessionStorage.removeItem("signup");
        sessionStorage.removeItem("email");
        router.push("/login");
      })
      .catch((error) => {
        console.error(error);
        // handle error here
      });
  };

  return (
    <>
      <form className="pb-24" onSubmit={handleSubmit}>
        <div className="w-fit mx-auto px-8 pt-5 pb-[60px]">
          <div className="max-w-[27rem] h-full mx-auto">
            <div className="inline-block w-fit">
              <RegisStep
                step={1}
                className={`${roboto.className} uppercase text-[13px]`}
              />
              <h1 className="text-[32px] font-semibold">
                Tạo tên cho tài khoản của bạn
              </h1>
            </div>
            <div
              className={`${roboto.className} text-[18px] inline-block mb-3 mt-3 font-light`}
            >
              <p>Chỉ cần vài bước nữa là bạn sẽ hoàn tất!</p>
            </div>
            <div>
              <div className="field h-14 border-2 rounded">
                <input
                  id="email"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="text-input font-light border-black bg-[#fff] rounded text-black"
                  required
                />
                <label
                  htmlFor="email"
                  className="floating-label font-light text-black"
                >
                  Tên tài khoản
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#e50914] text-white px-12 py-5 text-2xl rounded-md mt-5 hover:bg-[#f40612] w-full h-full"
              >
                Tiếp tục
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
