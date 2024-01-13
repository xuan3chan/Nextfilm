"use client";
import "@/styles/app.css";
import "@/styles/dashboard.css";
import "@/styles/Account.css";
import "@/styles/Category.css";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "@/styles/Account.css";
import SideBar from "@/app/components/SideBar/SideBar";
import Header from "@/app/components/header/header";
export default function page() {
  return (
    <div>
      <div className="flex flex-col">
        <Header></Header>
        <div className="flex">
          <SideBar></SideBar>
          <div className="wrapper">
            Danh Sách Phim
            <button
              onClick={() => {
                window.location.href = "NewFilm";
              }}
              className="btn w-30 h-10 text-black"
            >
              Phim Mới
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
