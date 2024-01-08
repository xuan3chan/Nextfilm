import { Logo } from "@/app/ui/partials/logo"
import Link from "next/link"

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
      <header className="Regis-header h-[90px] border-b-2">
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
      <div className="w-full h-full">
        {children}
      </div>
      <footer className="Regis-footer">
        <div>
          <p>Bạn có câu hỏi? Liên hệ với chúng tôi.</p>
          <ul className="inline-flex">
            {linkItems.map((item, index) => (
              <li className="">
                <Link href={item.link} key={index}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  )
}