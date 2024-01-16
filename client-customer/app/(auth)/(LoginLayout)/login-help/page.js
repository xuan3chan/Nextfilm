"use client"
import axios from "axios";
import { RedButton } from "@/app/ui/RedButton";
import { useRouter } from "next/navigation"; // Corrected import
import { useEffect, useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const apiURL = process.env.NEXT_PUBLIC_LOGIN;
export default function forgotPassword() {
  const router = useRouter();
  const pathname = usePathname();
  const [userEmail, setUserEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    axios.post(`${apiURL}/forgot-password`, {
      email: email,
    })
    .then((res) => {
      console.log(res.message);
      sessionStorage.setItem('email', email);
      router.push('/reset-password');
    })
  }

  useEffect(() => {
    const userEmail = sessionStorage.getItem('email');
    setUserEmail(userEmail);
    if (pathname !== '/login-help') {
      sessionStorage.removeItem('email');
      router.push('/login-help');
    }
  },[]);
  

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
            className={clsx('fg-input w-full border rounded px-4 py-3', {'bg-slate-400 ': !!userEmail})}
            placeholder="Email"
            disabled={!!userEmail}
            value={userEmail}
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