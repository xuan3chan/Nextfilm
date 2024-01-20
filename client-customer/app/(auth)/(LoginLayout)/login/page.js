"use client";
import "@/app/ui/login/login.css";
import { LoginForm } from "@/app/ui/login";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      router.push('/browse');
    }
    localStorage.clear();
    sessionStorage.clear();
  }, []);

  return (
    <LoginForm/>
  );
}
