import { Logo } from "@/app/ui/partials/logo"
import Link from "next/link"
import { roboto } from "@/app/ui/fonts"

const linkItems = [
  {
    title: 'Câu hỏi thường gặp',
    link: '#'
  },
  {
    title: 'Trung tâm trợ giúp',
    link: '#'
  },
  {
    title: 'Cửa hàng Netflix',
    link: '#'
  },
  {
    title: 'Điều khoản sử dụng',
    link: '#'
  },
  {
    title: 'Quyền riêng tư',
    link: '#'
  },
  {
    title: 'Tùy chọn cookie',
    link: '#'
  },
  {
    title: 'Thông tin doanh nghiệp',
    link: '#'
  },
]


export default function RegistrationLayout({children}) {
  return (
    <>
      <header className={`Regis-header h-[90px] border-b-2 ${roboto.className}`}>
        <div className="flex justify-between items-center h-full w-11/12 mx-auto">
          <Link href="/">
            <Logo className="w-[181px] h-[50px]" />
          </Link>
          <div className="logout">
            <Link href="/logout">
              <span className="text-xl font-semibold hover:underline">Đăng xuất</span>
            </Link>
          </div>
        </div>
      </header>
      <div>
        {children}
      </div>
      <footer className={`Regis-footer ${roboto.className} pb-5 bg-[#f3f3f3]`}>
        <div className="pt-8 w-11/12 mx-auto">
          <p className="hover:underline mb-8 text-[#737373]">Bạn có câu hỏi? Liên hệ với chúng tôi.</p>
          <ul className="max-w-[1000px]">
            {linkItems.map((item, index) => (
              <li key={index} className="inline-block min-w-28 w-1/4 pr-5 mb-4">
                <Link href={item.link} className="text-sm text-[#737373] hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <div className="inline-block py-3 pl-10 pr-7 bg-white border border-black">
              <select className="lang-swicher">
                <option value="vi-VN">Tiếng Việt</option>
                <option value="en-US">English</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}