"use client"
import axios from "axios";
<<<<<<< HEAD
import { RedButton, RedButtonLoading } from "@/app/ui/RedButton";
import { useRouter } from "next/navigation"; // Corrected import
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from 'clsx';
=======
import { RedButton } from "@/app/ui/RedButton";
import { useRouter } from "next/navigation";
>>>>>>> parent of 196f897 (Fix import and add functionality for forgot password and reset password pages)

const apiURL = process.env.NEXT_PUBLIC_LOGIN;
export default function forgotPassword() {
  const router = useRouter();
<<<<<<< HEAD
  const pathname = usePathname();
  const [email, setEmail] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
=======
>>>>>>> parent of 196f897 (Fix import and add functionality for forgot password and reset password pages)

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(email)) {
      setIsValidEmail(false);
      return;
    }
    setIsValidEmail(true);
    setLoading(true); // Set loading to true when the request starts
    axios.post(`${apiURL}/forgot-password`, {
      email: email,
    })
    .then((res) => {
      sessionStorage.setItem('email', email);
      router.push('/reset-password');
    })
    .finally(() => {
      setLoading(false); // Set loading to false when the request completes
    });
  }

<<<<<<< HEAD
  useEffect(() => {
    const email = sessionStorage.getItem('email');
    setEmail(email);
    if (email) {
      setEmail(email);
    } else {
      setEmail('');
    }
    if (pathname !== '/login-help') {
      sessionStorage.removeItem('email');
      router.push('/login-help');
    }
  },[]);
  
=======

>>>>>>> parent of 196f897 (Fix import and add functionality for forgot password and reset password pages)
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
<<<<<<< HEAD
            className={clsx('fg-input w-full border rounded px-4 py-3', {
              'border-red-600': !isValidEmail
            })}
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
=======
            className="fg-input w-full border rounded px-4 py-3"
            placeholder="Email"
>>>>>>> parent of 196f897 (Fix import and add functionality for forgot password and reset password pages)
          />
          <p className={clsx('text-red-600 text-sm font-medium',{'hidden': isValidEmail })}>
            Email không hợp lệ
          </p>
        </div>
        <div className="mt-3">
          {loading ? (
            <RedButtonLoading className={`w-full h-12 p-3 mt-4`}/>
          ) : (
            <RedButton 
              className={`w-full h-12 p-3 mt-4`}
              type="submit"
            >
              Gửi
            </RedButton>
          )}
        </div>
      </div>
    </form>
  );
}