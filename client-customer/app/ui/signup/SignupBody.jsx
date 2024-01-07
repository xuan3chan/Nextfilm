import { roboto } from "@/app/ui/fonts";
import Image from "next/image";
import bgSignup from "@/public/signup-background.jpg";
import mobileImage from '@/public/mobile-0819.jpg'
import otherdevice from "@/public/device-pile-vn.png";
import childrenProfile from '@/public/childrenprofile.png'
import bannerImage from '@/public/boxshot.png'
import downloadingIcon from '@/public/download-icon.gif'
import tv from '@/public/tv.png'
import { SignupForm } from "./SigupForm";


export function Signupbody() {
  return (
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
                  <SignupForm />
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
              <div className="download-container">
                <div className="download-container_banner">
                  <Image
                    src={bannerImage}
                    alt="NextFilm đăng ký"
                    priority
                    className="banner-image"
                  />
                </div>
                <div className="download-container_content">
                  <div className="dl-content_header text-white">Cậu bé mất tích</div>
                  <div className="dl-content_sub text-sm text-blue-700">Đang tải xuống...</div>
                </div>
                <div className="download-container_icon">
                  <Image
                    src={downloadingIcon}
                    alt="NextFilm đăng ký"
                  />
                </div>
              </div>
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
          <div className="horizon-line"></div>
        </div>
        <div className={`signup-body_content-sub w-3/4 ${roboto.className}`}>
          <div className="flex w-3/4 items-center justify-center mx-auto">
            <div className="body_content text-white shrink-4">
              <h2 className="text-fontTitle font-black tracking-3">
                Xem ở mọi nơi
              </h2>
              <p className="text-2xl mt-4 leading-7">
                Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV.
              </p>
            </div>
            <div className="body_content-video">
              <div className="video_tv">
                <Image
                  src={otherdevice}
                  alt="NextFilm TV"
                  quality={60}
                  placeholder="blur"
                  priority
                  width={'100%'}
                />
                <div className="video_device_media">
                  <video autoPlay muted loop playsInline >
                    <source src="/video-devices-vn.m4v" type='video/mp4' />
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
                src={childrenProfile}
                priority
                alt="Xem phim Netfilm"
                placeholder="blur"
              />
            </div>
            <div className="body_content text-white shrink-4">
              <h2 className="text-fontTitle font-black tracking-3">
                Tạo hồ sơ cho trẻ em
              </h2>
              <p className="text-2xl mt-4 leading-7">
                Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của bạn.
              </p>
            </div>
          </div>
          <div className="horizon-line"></div>
        </div>
      </div>
  )
}