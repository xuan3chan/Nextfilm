"use client";
import Login from "@/app/login/page.js";
import React, { useEffect } from "react";
import Dashboard from "@/app/dashboard/page.js";
import { useState } from "react";
import useRouter from "next/navigation";
export default function Home() {
  const router = useRouter();
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
    <div className="">
      {isLoggedIn === false ? router.push("/dashboard") : router.push("/login")}
    </div>
  );
}
