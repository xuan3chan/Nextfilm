"use client";
import { roboto } from "@/app/ui/fonts";
import { Logo } from "@/app/ui/partials/logo";
import Link from "next/link";
import Image from "next/image";
import bgLogin from "@/public/VN-vi-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import "@/app/ui/login/login.css";
import { LoginForm } from "@/app/ui/LoginForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      router.push('/browse');
    }
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
        <div className="footer-wrapper">
          <div className={`footer-site ${roboto.className} antialiased`}>
            <p className="footer-top">Bạn có câu hỏi? Liên hệ với chúng tôi</p>
            <ul className="footer-link">
              <li className="footer-link-item"><a href="#">Câu hỏi thường gặp</a></li>
              <li className="footer-link-item"><a href="#">Trung tâm trợ giúp</a></li>
              <li className="footer-link-item"><a href="#">Điều khoản sử dụng</a></li>
              <li className="footer-link-item"><a href="#">Quyền riêng tư</a></li>
              <li className="footer-link-item"><a href="#">Tùy chọn cookie</a></li>
              <li className="footer-link-item"><a href="#">Thông tin doanh nghiệp</a></li>
            </ul>
            <div className="lang-swicher">
              <select className="lang-swicher-select">
                <option value="vi-VN">Tiếng Việt</option>
                <option value="en-US">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
