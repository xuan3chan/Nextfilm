"use client";
import "@/styles/app.css";
import "@/styles/Category.css";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import AddCategory from "./AddCategory";
export default function CategoryList(props) {
  const token = props.token;
  const ApiLink = "http://localhost:8000/api/category/getall";
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ApiLink, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategoryList(response.data.categories);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [token]);
  const [showAddCategory, setShowCategory] = useState(false);
  const handleShowCate = () => {
    setShowCategory(true);
  };
  return (
    <div className="flex">
      <div className="wrapper">
        <div className="CategoryListSection">
          <div className="CategoryListSection_title">Danh Sách Danh Mục</div>
          <button
            className="btn btnAddCategory border-black border-1 hover:bg-slate-600 "
            onClick={() => handleShowCate()}
          >
            Thêm Danh Mục
          </button>

          <select className="CategoryList_Items">
            <option value="">Chọn một danh mục</option>
            {categoryList.map((category) => (
              <option key={category._id} value={category._id}>
                {category.categoryName}
              </option>
            ))}
          </select>
          {categoryList.map((category) => {
            return (
              <div key={category._id} className="CategoryList_Items">
                <div className="CategoryList_Items_Name">
                  Tên Danh Mục : {category.categoryName}
                </div>
                <div className="CategoryList_Items_Description">
                 Mô Tả : {category.description}
                </div>
                <div className="CategoryList_Items_Status">
                  Trạng Thái : {category.status}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showAddCategory == true ? (
        <div>
          <AddCategory token={token} />
        </div>
      ) : null}
    </div>
  );
}
