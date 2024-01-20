"use client";
import { Logo } from "../partials/logo";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import { roboto } from "../fonts";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const pathName = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event
  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const linkList = [
    {
      name: "Trang chủ",
      link: "/browse",
    },
    {
      name: "Phim",
      link: "/browse/genre",
    },
    {
      name: "Mới & phổ biến",
      link: "/latest",
    },
    {
      name: "Danh sách của tôi",
      link: "/browse/my-list",
    },
    {
      name: "Duyệt tìm theo ngôn ngữ",
      link: "browse/original-audio",
    },
  ];

  return (
    <header
      className={`z-50 transition-all sticky top-0 right-0 left-0 flex items-center justify-between h-[68px] px-[60px] ${
        roboto.className
      } ${
        isScrolled
          ? "bg-black"
          : "bg-transparent bg-gradient-to-b from-black/70"
      }`}
    >
      <div className="flex items-center">
        <div className="mr-6">
          <Link href="/browse">
            <Logo className="w-[90px]" />
          </Link>
        </div>
        <ul className="flex items-center justify-between font-normal text-sm">
          {linkList.map((link, index) => (
            <li
              key={index}
              className={`text-white ml-5 ${
                pathName === link.link ? "font-bold" : ""
              }`}
            >
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-white flex items-center">
        <div className="searchField mr-5">
          <IoSearch className="text-2xl font-semibold" />
        </div>
        <div className="notification mr-3">
          <IoMdNotificationsOutline className="text-2xl font-semibold" />
        </div>
        <div className="avatar-icon flex items-center">
          <Image
            alt="Avatar"
            src="/avatar.png"
            width={35}
            height={35}
            className="rounded-md"
          />
          <span>
            <IoMdArrowDropdown className="text-2xl font-semibold" />
          </span>
        </div>
      </div>
    </header>
  );
}
