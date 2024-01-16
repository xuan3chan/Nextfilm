"use client";
import { Logo } from "@/app/ui/partials/logo";
import Link from "next/link";
import Image from "next/image";
import bgLogin from "@/public/VN-vi-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import "@/app/ui/login/login.css";
import { FooterLogin} from "@/app/ui/login";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { roboto } from "@/app/ui/fonts";
import { RedButton } from "@/app/ui/RedButton";

export default function LoginLayout({children}) {

  const pathName = usePathname();

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      router.push('/browse');
    }
  }, []);


  return (
    <div>
      <div className={`login-wrapper h-screen relative ${roboto.className}`}>
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
        <div className="login-header flex items-center justify-between">
          <Link href="/" className="login-sgvlogo">
            <Logo className="w-[165px] h-[45px]" />
          </Link>
          {pathName !== "/" && pathName !== "/login" && (
            <Link href="/login" className="mr-[3%]">
              <RedButton className="w-28 h-9 flex items-center justify-center">
                Đăng nhập
              </RedButton>
            </Link>
          )}
        </div>
        {children}
        <FooterLogin/>
      </div>
    </div>
  )
}