import { roboto } from "@/app/ui/fonts";
import { TextField } from "@/app/ui/TextField";
import { RedButton } from "@/app/ui/RedButton";
import { Checkbox } from "@/app/ui/Checkbox";
import Link from "next/link";
import {
  validateEmailOrPhonenum,
  validatePassword,
} from "@/app/utils/validation";

export const LoginForm = () => {
  return (
    <div className="login-body">
      <div className="login-form">
        <div className="login-form-main">
          <h1
            className={`${roboto.className} antialiased text-loginTitle mb-7 text-white`}
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
            value={'heheheh'}
          />
          <TextField
            label={"Mật khẩu"}
            validator={validatePassword}
            type={"password"}
            message="Vui lòng nhập vào mật khẩu"
            value={'suhuahdsuhsaud'}
          />
          <RedButton>Đăng nhập</RedButton>
          <div className="flex justify-between items-center">
            <Checkbox
              className="flex items-center text-sm"
              styleLabel={"text-sm"}
              label={"Ghi nhớ đăng nhập"}
            />
            <Link href="forgot-pasword">
              <span className="text-sm">bạn cần trợ giúp?</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
