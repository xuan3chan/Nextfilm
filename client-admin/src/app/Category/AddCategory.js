"use client";
import "@/styles/app.css";
import "@/styles/Category.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import ButtonSubmit from "@/app/components/Button/ButtonSubmit";
export default function AddCategory(props) {
  const ApiLink = "http://localhost:8000/api/category/add";
  const token = props.token;
  const [formData, setFormData] = useState({
    categoryName: "",
    description: "",
    status: "active",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    axios
      .post(ApiLink, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
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
          });
          // Reset form data after successful submission
          setFormData({
            categoryName: "",
            description: "",
            status: "active",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Xử lý lỗi nếu cần thiết
      });
  };

  return (
    <div>
      <div className="wrapper">
        <div className="CategoryListSection flex items-center w-80">
          <div className="CategoryListSection_title">Thêm Danh Mục</div>
          <form
            className="flex flex-col items-center w-full gap-6 "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col w-full gap-2 label-form">
              <label htmlFor="categoryName">Tên Danh Mục</label>
              <input
                type="text"
                id="categoryName"
                className="categoryName rounded-md"
                onChange={handleChange}
                name="categoryName"
                value={formData.categoryName}
                autoFocus
              />
            </div>
            <div className="flex flex-col w-full gap-2 label-form">
              <label htmlFor="description">Ghi Chú</label>
              <textarea
                type="text"
                id="description"
                name="description"
                className="description w-full resize-y rounded-md"
                onChange={handleChange}
                value={formData.description}
              ></textarea>
            </div>
            <button type="submit" className="btn submitAddCate submitBtn mt-4">
              Xác Nhận
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
