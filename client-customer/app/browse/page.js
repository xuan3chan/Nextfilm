"use client"
import { useEffect } from "react";

export default function browse() {

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      window.location.href = '/login';
    }
  }, []);

  return (
    <h1>browse</h1>
  );
}