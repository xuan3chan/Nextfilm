import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";
import "@/styles/app.css";
import "@/styles/Movie.css";
export default function EditMoviePopUp() {
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);
  const ApiLink = "http://localhost:8000/api/category/getall";
  const [categoryList, setCategoryList] = useState([]);
  const ApiLinkCountry = "http://localhost:8000/api/country/getall";
  const [countryList, setCountryList] = useState([]);
  const [posterPreview, setPosterPreview] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = JSON.parse(localStorage.getItem("data"));
        if (!data) {
          router.push("/login");
          return;
        }
        const { accessToken } = data;
        setToken(accessToken);
        const response = await axios.get(ApiLinkCountry, {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Use accessToken directly
          },
        });
        setCountryList(response.data.countries);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = JSON.parse(localStorage.getItem("data"));
        if (!data) {
          router.push("/login");
          return;
        }
        const { accessToken } = data;
        setToken(accessToken);
        const response = await axios.get(ApiLink, {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Use accessToken directly
          },
        });
        setCategoryList(response.data.categories);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const [filmData, setFilmData] = useState({
    filmName: "",
    poster: null,
    description: "",
    trailer: null,
    video: null,
    category: "",
    country: "",
    yearPublish: 0,
    age: 0,
    status: "active",
    tags: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilmData({
      ...filmData,
      [name]: value,
    });
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setPosterPreview(reader.result);
    };
    reader.readAsDataURL(file);

    // Cập nhật state filmData với file đã chọn
    setFilmData({
      ...filmData,
      [name]: file,
    });
  };

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data != null) {
      setData(data);
      setToken(data.accessToken);
      return;
    } else {
      return null;
    }
  });
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a FormData object to handle file uploads
      const formData = new FormData();
      Object.entries(filmData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Make API request to add a new film with FormData
      const response = await axios.post(
        "http://localhost:8000/api/film/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      {
        response.data.success == true
          ? Swal.fire({
              title: "Thành Công",
              text: "Thêm Phim Mới Thành Công",
              icon: "success",
              confirmButtonText: "OK",
            })
          : Swal.fire({
              title: "Thất Bại",
              text: "Thêm Phim Mới Thất Bại, Hãy Thử Lại",
              icon: "error",
              confirmButtonText: "OK",
            });
      }

      console.log(response);
    } catch (error) {
      // Handle error or display an appropriate message
      console.error("Error adding film:", error);
    }
  };
  return (
    <form
      className="flex flex-col gap-3 min-[980px]: w-11/12 p-10 rounded-3xl"
      onSubmit={handleSubmit}
    >
      <div className="primary-title">Thêm Phim</div>

      <div className="flex form_item gap-10">
        <label className=" mb-2 text-sm w-1/2 font-medium text-gray-900 dark:text-gray-300">
          Tên Phim:
          <input
            type="text"
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="filmName"
            value={filmData.filmName}
            onChange={handleInputChange}
          />
        </label>
        <label className=" mb-2 text-sm w-fit font-medium text-gray-900 dark:text-gray-300">
          Danh Mục:
          <select
            name="category"
            value={filmData.category}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Chọn một danh mục</option>
            {categoryList.map((category) => (
              <option key={category._id} value={category.categoryName}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </label>
        <label className=" mb-2 text-sm w-fit  font-medium text-gray-900 dark:text-gray-300">
          Quốc Gia:
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleInputChange}
            name="country"
          >
            <option value={filmData.country}>Chọn một quốc gia</option>
            {countryList.map((country) => (
              <option key={country._id} value={country.countryName}>
                {country.countryName}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex form_item gap-10">
            <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Tuổi:
              <input
                type="text"
                name="age"
                value={filmData.age}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleInputChange}
              />
            </label>
            <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Tags:
              <input
                type="text"
                name="tags"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={filmData.tags}
                onChange={handleInputChange}
              />
            </label>
            <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Trạng Thái:
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900
            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={filmData.status}
                onChange={handleInputChange}
                id="cars"
                name="status"
              >
                <option value="active">Active</option>
                <option value="inactive">inActive</option>
              </select>
            </label>
          </div>
          <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 w-full">
            Mô Tả:
            <textarea
              type="text"
              name="description"
              className="bg-gray-50 border resize-y border-gray-300 h-60 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={filmData.description}
              onChange={handleInputChange}
            />
          </label>
        </div>
        {posterPreview && (
          <div className="flex flex-col ml-10 items-center">
            <div className="posterText">Hình Poster</div>
            <img
              src={posterPreview}
              alt="Poster Preview"
              style={{
                width: "300px",
                height: "350px",
                marginTop: "10px",
              }}
            />
          </div>
        )}
      </div>
      <label>
        Hình Poster Phim:
        <input
          type="file"
          name="poster"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>

      <label>
        Trailer Video:
        <input
          type="file"
          name="trailer"
          accept="video/*"
          onChange={handleFileChange}
        />
      </label>
      <label>
        File Phim:
        <div className="drag-image mt-4">
          <div className="icon">
            <i className="fas fa-cloud-upload-alt"></i>
          </div>
          <h6>Drag & Drop File Here</h6>
          <span>OR</span>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleFileChange}
            multiple
          />
        </div>
      </label>
      <button className="submitBtn" type="submit ">
        Thêm Phim
      </button>
    </form>
  );
}
