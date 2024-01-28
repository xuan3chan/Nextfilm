import { roboto } from "../fonts"
export function SignupFooter() {
  return (
    <footer className="footer">
      <div className="footer-wrapper w-10/12 text-white">
        <div className={`footer-site ${roboto.className} antialiased`}>
          <p className="footer-top">Bạn có câu hỏi? Liên hệ với chúng tôi</p>
          <ul className="footer-link">
            <li className="footer-link-item"><a href="#">Câu hỏi thường gặp</a></li>
            <li className="footer-link-item"><a href="#">Trung tâm trợ giúp</a></li>
            <li className="footer-link-item"><a href="#">Tài khoản</a></li>
            <li className="footer-link-item"><a href="#">Trung tâm đa phương tiện</a></li>
            <li className="footer-link-item"><a href="#">Quan hệ với nhà đầu tư</a></li>
            <li className="footer-link-item"><a href="#">Việc làm</a></li>
            <li className="footer-link-item"><a href="#">Các cách xem</a></li>
            <li className="footer-link-item"><a href="#">Điều khoản sử dụng</a></li>
            <li className="footer-link-item"><a href="#">Quyền riêng tư</a></li>
            <li className="footer-link-item"><a href="#">Tùy chọn cookie</a></li>
            <li className="footer-link-item"><a href="#">Thông tin doanh nghiệp</a></li>
            <li className="footer-link-item"><a href="#">
  Liên hệ với chúng tôi</a></li>
            <li className="footer-link-item"><a href="#">Kiểm tra tốc độ</a></li>
            <li className="footer-link-item"><a href="#">
  Thông báo pháp lý</a></li>
            <li className="footer-link-item"><a href="#">Chỉ có trên NextFilm</a></li>
          </ul>
          <div className="lang-swicher">
            <select className="lang-swicher-select">
              <option value="vi-VN">Tiếng Việt</option>
              <option value="en-US">English</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  )
}