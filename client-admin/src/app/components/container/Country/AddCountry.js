"use client";
import "@/styles/app.css";
import "@/styles/Category.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AddCountry(props) {
  const ApiLink = "http://localhost:8000/api/category/add";
  const token = props.token;
  const [formData, setFormData] = useState({
    categoryName: "",
    description: "",
    status: "active",
  });

  // Update form data when input values change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    axios
      .post(
        ApiLink,
        formData, // Data to be sent in the request body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Success:", response.data);
        const message = response.data.success;
        if (message === false) {
          Swal.fire({
            title: "Thêm Thất Bại!",
            text: "Vui Lòng Kiểm Tra Lại Thông Tin!",
            icon: "error",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Thêm Thành Công",
            text: "Reload Trang Để Cập Nhật",
            icon: "success",
            confirmButtonText: "OK",
          }).then((window.location.href = "/dashboard"));
        }
      });

  };

  return (
    <div>
      <div className="wrapper">
        <div className="CategoryListSection">
          <div className="CategoryListSection_title">Thêm Danh Mục</div>
          <div className="flex flex-col gap-2">
            <label htmlFor="categoryName">Tên Danh Mục</label>
            <input
              type="text"
              id="categoryName"
              className="categoryName"
              onChange={handleChange}
              name="categoryName"
              value={formData.categoryName}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Ghi Chú</label>
            <input
              type="text"
              id="description"
              name="description"
              className="description"
              onChange={handleChange}
              value={formData.description}
            />
          </div>
          <button className="btn submitAddCate" onClick={handleSubmit}>
            Xác Nhận
          </button>
        </div>
      </div>
    </div>
  );
}
