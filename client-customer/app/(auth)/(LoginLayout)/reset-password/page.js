"use client"
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import axios from "axios";
import { RedButton, RedButtonLoading } from "@/app/ui/RedButton";
import { roboto } from "@/app/ui/fonts";
import Link from "next/link";

const apiURL = process.env.NEXT_PUBLIC_LOGIN;

export default function ResetPassword() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState('');
  const [warning, setWarning] = useState('');
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const email = sessionStorage.getItem('email');
    setUserEmail(email);
    if (!email) {
      router.push('/login-help');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the request starts
    axios.post(`${apiURL}/confirm-code`, {
      code: code,
      email: userEmail,
    })
    .then((res) => {
      if (res.data.availableResetpass === 'true') {
        router.push('/reset');
      }
      else {
        setWarning('mã đã hết hạn vui lòng lấy lại mã');
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false); // Set loading to false when the request completes
    });
  }

  return (
    <form className={`reset-password_form fg-form h-screen ${roboto.className}`} onSubmit={handleSubmit}>  
      <div className="p-7 bg-white">
        <div>
          <h1 className="text-3xl font-semibold mb-4">Đặt lại mật khẩu</h1>
          <p className={clsx('text-sm',{'hidden': !userEmail})}>Chúng tôi đã gửi một mã đến: {userEmail}</p>
        </div>
        <div className="mt-2">
          <label>Nhập vào mã:</label> 
          <input type="number" 
            id="code"
            value={code}
            onChange={e => setCode(e.target.value)}
            className="fg-input w-full border rounded px-4 py-3"
            placeholder="123456"
            name="code"
          />
          <p className={clsx('text-red-600 text-sm font-medium',{'hidden': !warning })}>
            {warning}
            <Link href="/" className="ml-1 text-black hover:underline">tại đây</Link>
          </p>
        </div>
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
    </form>
  );
}