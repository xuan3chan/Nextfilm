"use client";
import { useEffect, useState } from "react";
import React from "react";
import "@/styles/dashboard.css";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

export default function Dashboard() {
  useEffect(() => {
    // Check if we are on the client side
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("data");
      if (storedData === null) {
        router.push("/login");
      } else {
        const data = JSON.parse(storedData);
      }
    }
  }, []); // Empty dependency array to run the effect only once
  const [showUserItems, setShowUserItems] = useState(false);
  const [showMovieItems, setShowMovieItems] = useState(false);
  const [showCategoryItems, setShowCategoryItems] = useState(false);

  const toggleDropdown = (dropdownState, setDropdownState) => {
    setShowUserItems(false);
    setShowMovieItems(false);
    setShowCategoryItems(false);
    setDropdownState(!dropdownState);
  };

  return (
    <div className="flex flex-col">
      <div className="Header flex ">
        <div className="Header_Item">Trang Chủ</div>
        <div className="Header_Item">Danh Mục</div>
        <div className="Header_Item">Cài Đặt</div>
      </div>
      <div id="Container " className="flex">
        <div className="MenuBarLeft flex flex-col">
          <div className="btn btnNewFilm">
            <span>Phim Mới</span>
          </div>
          <div>
            {/* User Management */}
            <div
              className={`ListItem ${showUserItems ? "active" : ""}`}
              onClick={() => toggleDropdown(showUserItems, setShowUserItems)}
            >
              <div className="flex items-center gap-2  w-full">
                <BiSolidCategoryAlt />
                Quản Lý Người Dùng
                <IoIosArrowDown className="absolute right-1" />
              </div>
            </div>
            <ul className={`List ${showUserItems ? "active" : ""}`}>
              <li className="Item">Danh Sách Người Dùng</li>
              <li className="Item">Danh Sách Premium</li>
              <li className="Item">Danh Sách Chưa ĐK</li>
              <li className="Item">Thống Kê Khách Hàng</li>
            </ul>

            {/* Movie Management */}
            <div
              className={`ListItem ${showMovieItems ? "active" : ""}`}
              onClick={() => toggleDropdown(showMovieItems, setShowMovieItems)}
            >
              <div className="flex items-center gap-2  w-full">
                <BiSolidCategoryAlt />
                Quản Lý Phim <IoIosArrowDown className="absolute right-1" />
              </div>
            </div>
            <ul className={`List ${showMovieItems ? "active" : ""}`}>
              <li className="Item">Danh Sách Phim</li>
              <li className="Item">Thêm Phim Mới</li>
              <li className="Item">Quản Lý Tập Phim</li>
              <li className="Item">Top Phim</li>
            </ul>

            {/* Category Management */}
            <div
              className={`ListItem ${showCategoryItems ? "active" : ""}`}
              onClick={() =>
                toggleDropdown(showCategoryItems, setShowCategoryItems)
              }
            >
              <div className="flex items-center gap-2  w-full">
                <BiSolidCategoryAlt />
                Quản Lý Danh Mục <IoIosArrowDown className="absolute right-1" />
              </div>
            </div>
            <ul className={`List ${showCategoryItems ? "active" : ""}`}>
              <li className="Item">Tạo Gói Thành Viên</li>
              <li className="Item">Tạo Danh Mục</li>
              <li className="Item">Tạo Khuyến Mãi</li>
            </ul>
          </div>
        </div>
        <div className="Content"></div>
      </div>
    </div>
  );
}
