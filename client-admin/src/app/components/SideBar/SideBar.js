import { useEffect, useState } from "react";
import React from "react";
import "@/styles/dashboard.css";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import AccountList from "../../components/container/Account/AccountList";
import AccountNormal from "../../components/container/Account/AccountNormal";
import AccountPremium from "../../components/container/Account/AccountPremium";
import AccountChart from "../../components/container/Account/AccountChart";
import AddCategory from "../../components/container/Category/AddCategory";
import VoucherList from "../../components/container/Category/VoucherList";
import DarkMode from "../../components/Button/Darkmode";
import CategoryList from "../../components/container/Category/CategoryList";
import ChatGeminiBox from "../../components/container/ChatGemini/ChatGeminiBox";
import CountryList from "../../components/container/Country/CountryList";
import Header from "@/app/components/header/header";
import SideBar from "@/app/components/SideBar/SideBar";

export default () => {
  const [showUserItems, setShowUserItems] = useState(false);
  const [showMovieItems, setShowMovieItems] = useState(false);
  const [showCategoryItems, setShowCategoryItems] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleChangeState = (state) => {
    setSelectedComponent(state);
    console.log(state);
  };
  const [role, setRole] = useState("");

  const toggleDropdown = (dropdownState, setDropdownState) => {
    setShowUserItems(false);
    setShowMovieItems(false);
    setShowCategoryItems(false);
    setDropdownState(!dropdownState);
  };
  let dataObject = null;
  let token = "";

  if (typeof window !== "undefined") {
    const data = localStorage.getItem("data");

    try {
      if (data) {
        dataObject = JSON.parse(data);
        token = dataObject.accessToken;
      }
    } catch (error) {
      console.error("Error parsing data:", error);
    }
  }
  return (
    <div>
      <div className="MenuBarLeft flex flex-col">
        <div className="btn ">
          <button
            className="btnNewFilm"
            onClick={() => {
              handleChangeState("ChatGemini");
            }}
          >
            Chat Gemini
          </button>
        </div>
        <div>
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
                window.location.href = "Account";
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
                handleChangeState("CategoryList");
              }}
              className="Item"
            >
              Danhn Sách Danh Mục
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
                handleChangeState("CountryList");
              }}
              className="Item"
            >
              Danh Sách Quốc Gia
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
    </div>
  );
};
