"use client";
import "@/styles/app.css";
import "@/styles/Category.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function AddCountry(props) {
  const ApiLink = "http://localhost:8000/api/country/add";
  const token = props.token;
  const [formData, setFormData] = useState({
    countryName: "",
    description: "",
    status: "active",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setLoading(true); // Set loading state when submitting

    axios
      .post(ApiLink, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Success:", response.data);
        const success = response.data.success;
        if (success) {
          Swal.fire({
            title: "Thêm Thành Công",
            text: "Reload Trang Để Cập Nhật",
            icon: "success",
            confirmButtonText: "OK",
          })
        } else {
          Swal.fire({
            title: "Thêm Thất Bại!",
            text: response.data.message || "Vui Lòng Kiểm Tra Lại Thông Tin!",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false); // Reset loading state after API call
      });
      console.log(formData)

  };

  return (
    <div>
      <div className="wrapper">
        <div className="CategoryListSection">
          <div className="CategoryListSection_title">Thêm Quốc Gia</div>
          <div className="flex flex-col gap-2">
            <label htmlFor="countryName">Tên Quốc Gia</label>
            <input
              type="text"
              id="countryName"
              className="countryName"
              onChange={handleChange}
              name="countryName"
              value={formData.countryName}
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
          <button className="btn submitAddCate" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Đang xử lý...' : 'Xác Nhận'}
          </button>
        </div>
      </div>
    </div>
  );
}
