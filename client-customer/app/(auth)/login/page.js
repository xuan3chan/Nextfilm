'use client'
import { roboto } from "@/app/ui/fonts";
import { Logo } from "@/app/ui/partials/logo";
import { TextField } from "@/app/ui/TextField";
import Link from "next/link";
import Image from "next/image";
import bgLogin from '@/public/VN-vi-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg'
import '@/app/ui/login/login.css'
import { validateEmailOrPhonenum, validatePassword } from "@/app/utils/validation";

export default function LoginPage() {

  return (
    <div className="login-wrapper h-full">
      <div className="login-wrapper-background">
        <Image
          alt="Đăng nhập NextFilm"
          src={bgLogin}
          quality={60}
          placeholder="blur"
          priority
          objectFit="cover"
          style={{
            minHeight: "100%",
            minWidth: "100%"
          }}
        />
      </div>
      <div className="login-header">
        <Link href="/" className="login-sgvlogo">
          <Logo width={165} height={45}/>
        </Link>
      </div>
      <div className="login-body">
        <div className="login-form">
          <div className="login-form-main">
            <h1 className={`${roboto.className} text-loginTitle mb-7 text-white`}>
              Đăng nhập
            </h1>
          </div>
          <div className="w-full text-whites">
            <TextField label={'Email hoặc số điện thoại'} validator={validateEmailOrPhonenum} type={'text'} message="Vui lòng nhập vào email hoặc số điện thoại" />
            <TextField label={'Mật khẩu'} validator={validatePassword} type={'password'} message="Vui lòng nhập vào mật khẩu" />
          </div>
        </div>
      </div>
    </div>
  )
}