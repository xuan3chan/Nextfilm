"use client";
import { roboto } from "@/app/ui/fonts";
import { Logo } from "@/app/ui/partials/logo";
import { TextField } from "@/app/ui/TextField";
import { RedButton } from "@/app/ui/RedButton";
import { Checkbox } from "@/app/ui/Checkbox";
import Link from "next/link";
import Image from "next/image";
import bgLogin from "@/public/VN-vi-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import "@/app/ui/login/login.css";
import {
  validateEmailOrPhonenum,
  validatePassword,
} from "@/app/utils/validation";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
          style={{
            objectFit: "cover",
            minHeight: "100%",
            minWidth: "100%",
          }}
        />
      </div>
      <div className="login-header">
        <Link href="/" className="login-sgvlogo">
          <Logo className="w-[165px] h-[45px]" />
        </Link>
      </div>
      <div className="login-body">
        <div className="login-form">
          <div className="login-form-main">
            <h1
              className={`${roboto.className} text-loginTitle mb-7 text-white`}
            >
              Đăng nhập
            </h1>
          </div>
          <div className="w-full text-white">
            <TextField
              label={"Email hoặc số điện thoại"}
              validator={validateEmailOrPhonenum}
              type={"text"}
              message="Vui lòng nhập vào email hoặc số điện thoại"
            />
            <TextField
              label={"Mật khẩu"}
              validator={validatePassword}
              type={"password"}
              message="Vui lòng nhập vào mật khẩu"
            />
            <RedButton>Đăng nhập</RedButton>
            <div className="flex">
              <Checkbox className='flex items-center text-sm' label={'Ghi nhớ đăng nhập'}/>
              <Link href='forgot-pasword'>
                <span className="text-sm">bạn cần trợ giúp?</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
