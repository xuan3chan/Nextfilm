"use client";
import { Logo } from "../partials/logo";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { roboto } from "../fonts";
import { usePathname, useRouter } from "next/navigation";
import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";

export function Header() {
  const pathName = usePathname();
  const router = useRouter();


  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    router.push("/signup");
  }

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
      className={`z-50 fixed top-0 right-0 left-0 flex bg-black items-center justify-between h-[68px] px-[60px] ${
        roboto.className
      } `}
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
          <Dropdown>
            <DropdownTrigger>
              <Avatar
                alt="Avatar"
                src="/avatar.png"
                className="w-9 h-9 rounded-md"
              />
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>Thông tin tài khoản</DropdownItem>
              <DropdownItem onClick={handleLogout}>Đăng xuất</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
