"use client";
import "@/styles/app.css";
import "@/styles/Category.css";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import AddCountry from "./AddCountry";
export default function CountryList(props) {
  const token = props.token;
  const ApiLink = "http://localhost:8000/api/country/getall";
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ApiLink, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCountryList(response.data.countries);
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
            {countryList.map((country) => (
              <option key={country._id} value={country._id}>
                {country.countryName}
              </option>
            ))}
          </select>
          {countryList.map((country) => {
            return (
              <div key={country._id} className="CategoryList_Items">
                <div className="CategoryList_Items_Name">
                  Tên Danh Mục : {country.countryName}
                </div>
                <div className="CategoryList_Items_Description">
                 Mô Tả : {country.description}
                </div>
                <div className="CategoryList_Items_Status">
                  Trạng Thái : {country.status}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showAddCategory == true ? (
        <div>
          <AddCountry token={token} />
        </div>
      ) : null}
    </div>
  );
}
