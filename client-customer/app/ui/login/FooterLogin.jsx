import { roboto } from "../fonts"
import "@/app/ui/login/login.css";
export default function FooterLogin() {
  return (
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
  )
}