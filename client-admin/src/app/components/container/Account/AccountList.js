"use client";
import AddAccount from "./AddAccount";
import React, { useEffect, useState } from "react";
import { FaUserGroup } from "react-icons/fa6";
import AddAdmin from "./AddAdmin";
import axios from "axios";
import ButtonEdit from "../../Button/EditButton";
import ButtonDelete from "../../Button/DeleteButton";
export default function AccountList() {
  const [role, setRole] = useState("Admin");

  const handleChangeRole = (props) => {
    setRole(props);
  };
  const data = localStorage.getItem("data");
  const dataObject = JSON.parse(data);
  const token = dataObject.accessToken;
  const [adminList, setAdminList] = useState([]);
  const [userList, setUserList] = useState([]);
  const ApiLink = "http://localhost:8000/api/admin/getall";
  const ApiGetUser = "http://localhost:8000/api/user/getall";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const [response1, response2] = await Promise.all([
          axios.get(ApiLink, { headers }),
          axios.get(ApiGetUser, { headers }),
        ]);
        setAdminList(response1.data.admins);
        setUserList(response2.data.users);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  });

  return (
    <div className="flex gap-10 ml-10">
      <section className="AddAccountSection ContentBg flex justify-center items-center">
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
        {role === "User" ? <AddAccount /> : <AddAdmin token={token} />}
      </section>
      <section className="AccountListSection ContentBg">
        <div className="flex items-center gap-10">
          <div className="AddAccount_title">Danh Sách Người Dùng </div>
          <div className="TotalAccount flex items-center ">
            <FaUserGroup className="w-8 h-8" />
            <div className="flex flex-col">
              <span>Tổng Khách</span>
              <span>100</span>
            </div>
          </div>
        </div>
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
        {role === "User" ? (
          <div className="">
            <span>User List</span>
            {Array.isArray(userList) && userList.length > 0 ? (
              <table id="Accounts" className="AccountList_Table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Số Điện Thoại</th>
                    <th>Role 1</th>
                    <th>Role 2</th>
                    <th>Role 3</th>
                    <th>Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  {userList.map((item, index) => (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item._id}</td>
                      <td>{item.userName}</td>
                      <td>{item.email}</td>
                      <td>{item.phoneNumber}</td>
                      <td>{item.role1 ? item.role1.name : ""}</td>
                      <td>{item.role2 ? item.role2.name : ""}</td>
                      <td>{JSON.stringify(item.role3)}</td>
                      <td className="flex gap-2">
                        <ButtonEdit />
                        <ButtonDelete></ButtonDelete>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>Không có dữ liệu</div>
            )}
          </div>
        ) : (
          <div className="">
            <span>Admin List</span>
            {Array.isArray(adminList) && adminList.length > 0 ? (
              <table id="Accounts" className="AccountList_Table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Id</th>
                    <th>AdminName</th>
                    <th>Role</th>
                    <th>Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  {adminList.map((item, index) => (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item._id}</td>
                      <td>{item.adminName}</td>
                      <td>{item.role}</td>
                      <td className="flex gap-2">
                        <ButtonEdit />
                        <ButtonDelete></ButtonDelete>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>Không có dữ liệu</div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
