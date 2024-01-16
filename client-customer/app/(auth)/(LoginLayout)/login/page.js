"use client";
import { Logo } from "@/app/ui/partials/logo";
import Link from "next/link";
import Image from "next/image";
import bgLogin from "@/public/VN-vi-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import "@/app/ui/login/login.css";
import { LoginForm, FooterLogin} from "@/app/ui/login";
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
    <div>
      <div className="login-wrapper h-screen">
        <div className="login-wrapper-background h-screen">
          <Image
            alt="Đăng nhập NextFilm"
            src={bgLogin}
            quality={60}
            placeholder="blur"
            priority
            style={{
              objectFit: "cover",
              height: "100%"
            }}
          />
        </div>
        <div className="login-header">
          <Link href="/" className="login-sgvlogo">
            <Logo className="w-[165px] h-[45px]" />
          </Link>
        </div>
        <LoginForm/>
        <FooterLogin/>
      </div>
    </div>
  );
}
