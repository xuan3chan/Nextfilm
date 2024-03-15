"use client";
import React from "react";
import "@/styles/dashboard.css";
import "@/styles/app.css";
import Header from "@/app/components/header/header";
import SideBar from "@/app/components/SideBar/SideBar";
import AccountList from "./AccountList";
import { AppContext } from "@/Context/AppContext";

export default () => {
  return (
    <div className="flex flex-col bg-color">
      <Header></Header>
      <div className="Body flex">
        <SideBar></SideBar>
        <div className="Container  w-3/4 wrapper">
          <AccountList></AccountList>
        </div>
      </div>
    </div>
  );
};
