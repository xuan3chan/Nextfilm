"use client";
import { roboto } from "@/app/ui/fonts";
import { Logo } from "@/app/ui/partials/logo";
import { RedButton } from "@/app/ui/RedButton";
import Link from "next/link";
import Image from "next/image";
import bgLogin from "@/public/VN-vi-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import '@/app/ui/signup/signup.css'

export default function signup() {
  return (
    <div>
      <div className="signup-wrapper h-screen overflow-hidden">
        <div className="signup-wrapper-background">
          <Image 
            src={bgLogin}
            alt="NextFilm Signup NextFilm Đăng ký"
            quality={60}
            placeholder="blur"
            style={{
              objectFit: "cover",
              height: '100%'
            }}
            priority
          />
        </div>
        <div className="signup-header">
          <Link href="/" className="signup-sgvlogo">
            <Logo className="w-[165px] h-[45px]" />
          </Link>
          <div className="signup-header-right">
            <div className="lang-switcher w-28 h-8 pr-2 pl-2 mr-5 border-white border rounded">
              <select name="lang" id="lang" className="w-full h-full bg-transparent text-white">
                <option className="text-black" value="Vietnamses">Tiếng Việt</option>
                <option className="text-black" value="English">English</option>
              </select>
            </div>
            <RedButton className="w-28 h-8">
              <Link href='login'>
                Đăng nhập
              </Link>
            </RedButton>
          </div>
        </div>
      </div>
      <div>
        hehe
      </div>
    </div>
  )
}