"use client";
import { roboto } from "@/app/ui/fonts";
import { Logo } from "@/app/ui/partials/logo";
import { RedButton } from "@/app/ui/RedButton";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import bgSignup from "@/public/signup-background.jpg";
import mobileImage from '@/public/mobile-0819.jpg'
import tv from '@/public/tv.png'
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
      <div className="signup-body">
        <div className="signup-body_content">
          <div className="body_content_background">
            <div className="content_background_image">
              <Image
                src={bgSignup}
                alt="NextFilm Signup NextFilm Đăng ký"
                quality={60}
                placeholder="blur"
                className="background_image"
                priority
              />
              <div className="wrapper-background"></div>
            </div>
          </div>
          <div className="body_content_content">
            <div
              className={`content_content text-white ${roboto.className} text-center`}
            >
              <div className="content_header">
                <h1 className="text-fontTitle">
                  Chương trình truyền hình, phim không giới hạn và nhiều nội
                  dung khác
                </h1>
                <p>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</p>
                <div className="content_header_sub">
                  <form className="sub-form">
                    <h3 className="sub-header">
                      Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt
                      lại tư cách thành viên của bạn.
                    </h3>
                    <div className="sub-content flex">
                      <div className="field flex-1 h-14 mr-2">
                        <input
                          id="email"
                          type="text"
                          className="text-input font-light border-gray-600 bg-black/45 border rounded"
                          required
                        />
                        <label
                          htmlFor="emailorphonenumber"
                          className="floating-label font-light"
                        >
                          Địa chỉ email
                        </label>
                      </div>
                      <RedButton className="w-[162px] h-14 text-[25px] flex items-center justify-center">
                        Bắt đầu <IoIosArrowForward />
                      </RedButton>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="horizon-line"></div>
        </div>
        <div className={`signup-body_content-sub w-3/4 ${roboto.className}`}>
          <div className="flex w-3/4 items-center justify-center mx-auto">
            <div className="body_content text-white shrink-4">
              <h2 className="text-fontTitle font-black tracking-3">
                Thưởng thức trên TV của bạn
              </h2>
              <p className="text-2xl mt-4 leading-7">
                Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác.
              </p>
            </div>
            <div className="body_content-video">
              <div className="video_tv">
                <Image
                  src={tv}
                  alt="NextFilm TV"
                  quality={60}
                  placeholder="blur"
                  priority
                  width={'100%'}
                />
                <div className="video_tv_media">
                  <video autoPlay muted loop playsInline >
                    <source src="/video-tv.m4v" type='video/mp4' />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="horizon-line"></div>
        </div>
        <div className={`signup-body_content-sub w-3/4 ${roboto.className}`}>
          <div className="flex w-3/4 items-center justify-center mx-auto">
            <div className="body_content-image">
              <Image
                src={mobileImage}
                priority
                alt="Xem phim Netfilm"
                placeholder="blur"
              />
            </div>
            <div className="body_content text-white shrink-4">
              <h2 className="text-fontTitle font-black tracking-3">
                Tải xuống nội dung để xem ngoại tuyến
              </h2>
              <p className="text-2xl mt-4 leading-7">
                Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
