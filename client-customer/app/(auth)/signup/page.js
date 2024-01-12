"use client";
import { Logo } from "@/app/ui/partials/logo";
import { RedButton } from "@/app/ui/RedButton";
import { Signupbody } from "@/app/ui/signup/SignupBody";
import { SignupFooter } from "@/app/ui/signup/SignupFooter";
import Link from "next/link";
import "@/app/ui/signup/signup.css";
import "@/app/ui/css/textfield.css";

export default function signup() {
  return (
    <div className="bg-black">
      <header className="signup-header">
        <Link href="/" className="signup-sgvlogo">
          <Logo className="w-[165px] h-[45px]" />
        </Link>
        <div className="signup-header-right">
          <div className="lang-switcher w-32 h-8 pr-2 pl-2 mr-5 border-white border rounded">
            <select
              name="lang"
              id="lang"
              className="w-full h-full bg-transparent text-white outline-none"
            >
              <option className="text-black" value="Vietnamses">
                Tiếng Việt
              </option>
              <option className="text-black" value="English">
                English
              </option>
            </select>
          </div>
          <RedButton className="w-28 h-8">
            <Link href="login">Đăng nhập</Link>
          </RedButton>
        </div>
      </header>    
      <Signupbody/>
      <SignupFooter/>
      <div className="w-full h-[1px]">
      </div>
    </div>
  );
}
