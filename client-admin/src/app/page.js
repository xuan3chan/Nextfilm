"use client";
import Login from "@/app/pages/login/page.js";
import React, { useEffect } from "react";
import Dashboard from "@/app/pages/dashboard/page.js";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const localStorageData = localStorage.getItem("data");
    if (
      localStorageData === null ||
      localStorageData === "" ||
      localStorageData === undefined
    ) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="">{isLoggedIn === false ?  window.location.href = "pages/dashboard" :  window.location.href = "pages/login"}</div>
  );
}
