"use client";
import { useEffect, useState } from "react";
import React from "react";
import "@/styles/dashboard.css";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import DarkMode from "../components/Button/Darkmode";
import Header from "@/app/components/header/header";
import SideBar from "@/app/components/SideBar/SideBar";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [role, setRole] = useState("");
  const router = useRouter();

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
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
}
