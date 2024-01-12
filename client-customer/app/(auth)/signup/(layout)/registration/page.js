import Image from "next/image"
import { RegisStep } from "@/app/ui/signup/regis/RegisStep"
import { roboto } from "@/app/ui/fonts"
import Devices from '@/public/Devices.png'
import Link from "next/link"
export default function registration() {
  return (
    <>
      <div className="pb-24">
        <div className="w-fit mx-auto px-8 pt-5 pb-[60px]">
          <div className="max-w-80 h-full mx-auto text-center">
            <div className="inline-block w-fit">
              <Image
                src={Devices}
                priority
                alt="Devices"
                className="mt-[100px] mb-5"
              />
            </div>
            <div className="inline-block text-center">
              <RegisStep step={1} className={`${roboto.className} uppercase text-[13px]`}/>
              <h1 className={`leading-10 ${roboto.className} text-[32px] font-medium inline-block mb-3`}>Hoàn thành việc cài đặt tài khoản của bạn</h1>
            </div>
            <div>
              <p className="text-lg">Netflix được cá nhân hóa cho riêng bạn. Tạo mật khẩu để xem Netflix trên bất kỳ thiết bị nào, vào bất cứ lúc nào.</p>
            </div>
            <div>
              <Link href="/signup/regform">
                <button className="bg-[#e50914] text-white px-12 py-5 text-2xl rounded-md mt-5 hover:bg-[#f40612] w-full h-full">Tiếp tục</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}