"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export const TokenJWTAuth = ({children}) => {
  const router = useRouter();
  const [authen, setAuthen] = useState('');
  
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAuthen(token);
    } else {
      router.push('/login');
    }
  },[router])

  return (
    <div>
      {authen && children}
    </div>
  )
};
