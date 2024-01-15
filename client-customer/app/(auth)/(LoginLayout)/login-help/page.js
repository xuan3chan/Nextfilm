"use client"
import axios from "axios";
import { RedButton } from "@/app/ui/RedButton";
import { useRouter } from "next/navigation";

const apiURL = process.env.NEXT_PUBLIC_LOGIN;
export default function forgotPassword() {
  const router = useRouter();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    axios.post(`${apiURL}/forgot-password`, {
      email: email,
    })
    .then((res) => {
      sessionStorage.setItem('email', email);
      router.push('/reset-password');
    })
  }


  return (
    <form className="fg-form h-screen" onSubmit={handleForgotPassword}>
      <div className="p-10 bg-white">
        <div className='fg-title mt-4'>
          <h1 className="text-3xl font-semibold">Quên mật khẩu</h1>
        </div>
        <div className="mt-2">
          <p>Chúng tôi sẽ gửi email kèm theo hướng dẫn đặt lại mật khẩu.</p>
        </div>
        <div className="mt-3">
          <input 
            id="email"
            type="text"
            className="fg-input w-full border rounded px-4 py-3"
            placeholder="Email"
          />
        </div>
        <RedButton 
          className={`w-full h-12 p-3 mt-4`}
          type="submit"
          >
          Gửi
        </RedButton>
      </div>
    </form>
  );
}