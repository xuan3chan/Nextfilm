"use client";
import { useEffect, useState } from "react";
import React from "react";
import "@/styles/dashboard.css";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import AccountList from "../components/container/Account/AccountList";
import AccountNormal from "../components/container/Account/AccountNormal";
import AccountPremium from "../components/container/Account/AccountPremium";
import AccountChart from "../components/container/Account/AccountChart";
import CategoryList from "../components/container/Category/CategoryList";
import VoucherList from "../components/container/Category/VoucherList";
import { logoImage } from "../../../public/nextfilmLogo.png";
import DarkMode from "../components/Button/Darkmode";
export default function Dashboard() {
  const [showUserItems, setShowUserItems] = useState(false);
  const [showMovieItems, setShowMovieItems] = useState(false);
  const [showCategoryItems, setShowCategoryItems] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("data");
      if (storedData === null) {
        router.push("/login");
      } else {
        const data = JSON.parse(storedData);
        const adminObject = data.admin;
        setRole(adminObject.role);
        console.log(adminObject.role);
      }
    }
  }, []); // Empty dependency array to run the effect only once
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleChangeState = (state) => {
    setSelectedComponent(state);
  };

  const toggleDropdown = (dropdownState, setDropdownState) => {
    setShowUserItems(false);
    setShowMovieItems(false);
    setShowCategoryItems(false);
    setDropdownState(!dropdownState);
  };

  return (
    <div className="flex flex-col bg-color">
      <div className="Header flex">
        <div className="Header_Item w-52 h-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            className="w-full h-full"
            alt=""
          />
        </div>
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
              <li
                onClick={() => {
                  handleChangeState("UserList");
                }}
                className="Item UserList"
              >
                Danh Sách Người Dùng
              </li>
              <li
                onClick={() => {
                  handleChangeState("UserPremiumList");
                }}
                className="Item UserPremiumList"
              >
                Danh Sách Premium
              </li>
              <li
                onClick={() => {
                  handleChangeState("UserNormalList");
                }}
                className="Item UserNormalList"
              >
                Danh Sách Chưa ĐK
              </li>
              <li
                onClick={() => {
                  handleChangeState("UserChart");
                }}
                className="Item UserChart"
              >
                Thống Kê Khách Hàng
              </li>
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
              <li
                onClick={() => {
                  handleChangeState("MovieList");
                }}
                className="Item MovieList"
              >
                Danh Sách Phim
              </li>
              <li
                onClick={() => {
                  handleChangeState("AddMovie");
                }}
                className="Item AddMovie"
              >
                Thêm Phim Mới
              </li>
              <li
                onClick={() => {
                  handleChangeState("ManageEpisode");
                }}
                className="Item ManageEpisode"
              >
                Quản Lý Tập Phim
              </li>
              <li
                onClick={() => {
                  handleChangeState("MovieChart");
                }}
                className="Item MovieChart"
              >
                Top Phim
              </li>
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
              <li
                onClick={() => {
                  handleChangeState("CreateMemberPackage");
                }}
                className="Item"
              >
                Tạo Gói Thành Viên
              </li>
              <li
                onClick={() => {
                  handleChangeState("CreateCategory");
                }}
                className="Item"
              >
                Tạo Danh Mục
              </li>
              <li
                onClick={() => {
                  handleChangeState("CreateVoucher");
                }}
                className="Item"
              >
                Tạo Khuyến Mãi
              </li>
            </ul>
          </div>
        </div>
        <div className="Content">
          <div className="ContentHeader">
            <div className="ContentHeader_Title">{selectedComponent}</div>
            <button className="ContentHeader_Button">
              <DarkMode />
            </button>
            <button className="ContentHeader_Button">Cài Đặt</button>
            <div className="ContentHeader_Search">
              <input
                type="text"
                name="ModuleSearching"
                placeholder="Search content.."
                id="Search"
              />
            </div>
          </div>
          <div className="w-full">
            {selectedComponent === "UserList" && <AccountList />}
            {selectedComponent === "UserPremiumList" && <AccountPremium />}
            {selectedComponent === "UserNormalList" && <AccountNormal />}
            {selectedComponent === "UserChart" && <AccountChart />}
            {selectedComponent === "MovieList" && <AccountChart />}
            {selectedComponent === "AddMovie" && <AccountChart />}
            {selectedComponent === "ManageEpisode" && <AccountChart />}
            {selectedComponent === "MovieChart" && <AccountChart />}
            {selectedComponent === "CreateMemberPackage" && <AccountChart />}
            {selectedComponent === "CreateCategory" && <CategoryList />}
            {selectedComponent === "CreateVoucher" && <VoucherList />}
          </div>
        </div>
      </div>
    </div>
  );
}
