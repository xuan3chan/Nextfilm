"use client";
import { useEffect, useState } from "react";
import NotFound from "../browse/notFound";
import { useRouter } from "next/navigation";
export const TokenJWTAuth = ({children}) => {
  const [authen, setAuthen] = useState('');
  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAuthen(token);
    }
  },[])

  return (
    <div>
      {authen ? children : <NotFound/> }
    </div>
  )
};
