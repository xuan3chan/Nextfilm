'use client'
import { roboto } from "@/app/ui/fonts";
import { Logo } from "@/app/ui/partials/logo";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import blurURL from '@/public/VN-vi-20231218-popsignuptwoweeks-perspective_alpha_website_large2.jpg'
import Link from "next/link";
import Image from "next/image";
import bgLogin from '@/public/VN-vi-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg'
import '@/app/ui/login/login.css'

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiFilledInput-input': {
    color: 'white',
    transition: 'all 1s',
    backgroundColor: '#333',
    borderRadius: '5px 5px 0 0',
  },
  '& .MuiFormLabel-root': {
    color: '#8c8c8c',
  },
  '& .MuiFormHelperText-root': {
    color: '#e87c03',
  },
}));

export default function LoginPage() {

  const [value, setValue] = useState('');
  const [warning, setWarning] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === '') {
      setWarning(true);
    } else if (warning) {
      setWarning(false);
    }
  }

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
            {/* Tối ưu sau */}
            <StyledTextField
              variant="filled"
              fullWidth
              label="Email hoặc số điện thoại"
              value={value}
              onChange={handleChange}
              error={warning}
              helperText={warning ? 'Vui lòng nhập email hoặc số điện thoại' : ' '}
            />
            <StyledTextField
              variant="filled"
              fullWidth
              label="Email hoặc số điện thoại"
              value={value}
              onChange={handleChange}
              error={warning}
              helperText={warning ? 'Vui lòng nhập email hoặc số điện thoại' : ' '}
            />
            {/* Tối ưu sau */}
          </div>
        </div>
      </div>
    </div>
  )
}