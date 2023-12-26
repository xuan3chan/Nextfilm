'use client'

import { roboto } from "@/app/ui/fonts";
import { Logo } from "@/app/ui/partials/logo";
import { TextField } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import bgLogin from '@/public/VN-vi-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg'
import '@/app/ui/login/login.css'


export default function LoginPage() {

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    setError(e.target.value === '')
  }

  return (
    <div className="login-wrapper h-full">
      <div className="login-wrapper-background">
        <Image
          alt="Đăng nhập NextFilm"
          src={bgLogin}
          quality={100}
          style={{
            objectFit: "cover",
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
            <TextField
              className="bg-[#454545] border rounded-t-md" 
              variant="filled"
              fullWidth
              label="Email hoặc số điện thoại"
              InputLabelProps={{
                style: {
                  color: '#8c8c8c'
                }
              }}
              inputProps={{
                style: {
                  color: 'white',
                  transition: 'all 1s'
                }
              }}
              value={value}
              onChange={handleChange}
              error={error}
              helperText={error ? 'Vui lòng nhập email hoặc số điện thoại' : ' '}
            />
          </div>
        </div>
      </div>
    </div>
  )
}