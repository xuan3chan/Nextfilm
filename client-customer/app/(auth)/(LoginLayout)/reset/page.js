'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import { roboto } from "@/app/ui/fonts";
const apiURL = process.env.NEXT_PUBLIC_LOGIN;
import { IoWarningOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { RedButton, RedButtonLoading } from "@/app/ui/RedButton";

export default function ResetPassword() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const email = sessionStorage.getItem('email');
    setEmail(email);
    if (!email) {
      router.push('/login-help');
    }
  },[]);

  useEffect(() => {
    setPasswordMatch(newPassword === confirmPassword);
  }, [newPassword, confirmPassword]);

  
  const handleUpdatePassword = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the request starts
    axios.put(`${apiURL}/reset-password`, {
      email: email,
      newPassword: newPassword,
    })
    .then((res) => {
      console.log(res.message);
      sessionStorage.removeItem('email');
      router.push('/login');
    })
    .finally(() => {
      setLoading(false); // Set loading to false when the request completes
    });
  }

  return (
    <form className={`fg-form h-screen ${roboto.className}`} onSubmit={handleUpdatePassword}>
      <div className="p-10 bg-white">
        <div className='fg-title mt-4'>
          <h1 className="text-3xl font-semibold">Cập nhật mật khẩu</h1>
        </div>
        <div className="mt-2">
        <p>Cập nhật mật khẩu cho tài khoản:</p>
        <p>{email}</p>
        </div>
        <div className="mt-3">
          <input 
            id="password"
            type="password"
            className={`fg-input w-full border rounded px-4 py-3`}
            placeholder="Mật khẩu mới"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <input 
            id="newPassword"
            type="password"
            className={`fg-input w-full border rounded px-4 py-3`}
            placeholder="Nhập lại mật khẩu mới"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
          <div className={clsx('text-red-600 text-sm flex items-center font-normal',{'hidden': passwordMatch })}>
            <IoWarningOutline />
            <p>Mật khẩu chưa khớp</p>
          </div>
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
  )
}