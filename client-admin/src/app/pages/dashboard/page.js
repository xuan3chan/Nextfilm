"use client";
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

export default function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [role, setRole] = useState("");

  const handleChangeState = (state) => {
    setSelectedComponent(state);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("data");
      if (storedData === null) {
        router.push("/login");
      } else {
        const data = JSON.parse(storedData);
        const adminObject = data.admin;
        {
          adminObject == null ? null : adminObject;
        }
        setRole(adminObject);
      }
    }
  }, []); // Empty dependency array to run the effect only once

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
    <div className="flex flex-col bg-color">
      <Header />
      <div id="Container " className="flex">
        <SideBar />
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
            {selectedComponent === "ChatGemini" && <ChatGeminiBox />}
            {selectedComponent === "CreateCategory" && (
              <AddCategory token={token} />
            )}
            {selectedComponent === "CountryList" && (
              <CountryList token={token} />
            )}
            {selectedComponent === "CategoryList" && (
              <CategoryList token={token} />
            )}
            {selectedComponent === "CreateVoucher" && <VoucherList />}
          </div>
        </div>
      </div>
    </div>
  );
}
