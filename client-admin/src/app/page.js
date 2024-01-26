"use client";
import { useRouter } from "next/navigation";
import Login from "@/app/login/page.js";
import React, { useEffect } from "react";
import Dashboard from "@/app/dashboard/page.js";
import { useState } from "react";

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

  useEffect(() => {
    if (isLoggedIn === false) {
      router.push("/pages/dashboard");
    } else {
      router.push("/pages/login");
    }
  }, [isLoggedIn, router]);

  return (
    <div>

    </div>
  );
}
