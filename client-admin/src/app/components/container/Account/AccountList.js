"use client";
import AddAccount from "./AddAccount";
import React, { useState } from "react";

export default function AccountList() {
  const [role, setRole] = useState("Admin");

  const handleChangeRole = (props) => {
    setRole(props);
  };

  return (
    <div>
      <div className="AddAccount_title">Thêm Người Dùng</div>
      <div className="AddAccount_RoleSelection flex mb-10">
        <a
          onClick={() => {
            handleChangeRole("Admin");
          }}
          className="RoleAdmin SelectionRole"
        >
          Admin
        </a>
        <a
          onClick={() => {
            handleChangeRole("User");
          }}
          className="RoleUser SelectionRole"
        >
          User
        </a>
      </div>
      {role === "User" ? <AddAccount /> : null}
      Danh Sách Người Dùng
    </div>
  );
}
