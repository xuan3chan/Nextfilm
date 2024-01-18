"use client";
import "@/styles/dashboard.css";
import "@/styles/Account.css";
import "@/styles/Category.css";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "@/styles/Account.css";
import SideBar from "@/app/components/SideBar/SideBar";
import Header from "@/app/components/header/header";

export default function NewFilm() {
  // State for form data
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
  const data = localStorage.getItem("data");
  const token = data.accessToken;
  // Function to handle form data changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilmData({
      ...filmData,
      [name]: value,
    });
  };

  // Function to handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFilmData({
      ...filmData,
      [name]: files[0], // Assuming you only allow selecting one file
    });
  };

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

      // Handle success or display an appropriate message
      console.log(response.data);
    } catch (error) {
      // Handle error or display an appropriate message
      console.error("Error adding film:", error);
    }
  };
  return (
    <div>
      <div className="flex flex-col bg-color">
        <Header></Header>
        <div className="flex">
          <SideBar></SideBar>
          <div className="wrapper flex flex-col">
            Thêm Phim
            <form
              className="flex flex-col gap-3 justify-center items-center min-[980px]:"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-10">
                <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Film Name:
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="filmName"
                    value={filmData.filmName}
                    onChange={handleInputChange}
                  />
                </label>
                <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  category:
                  <input
                    type="text"
                    name="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={filmData.category}
                    onChange={handleInputChange}
                  />
                </label>
                <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  country:
                  <input
                    type="text"
                    name="country"
                    value={filmData.country}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="flex gap-10">
                <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  age:
                  <input
                    type="text"
                    name="age"
                    value={filmData.age}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleInputChange}
                  />
                </label>
                <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  tags:
                  <input
                    type="text"
                    name="tags"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={filmData.tags}
                    onChange={handleInputChange}
                  />
                </label>
                <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  status:
                  <input
                    type="text"
                    name="status"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={filmData.status}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 w-1/3">
                Mô Tả:
                <input
                  type="text"
                  name="description"
                  className="bg-gray-50 border border-gray-300 h-60 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={filmData.description}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                Poster Image:
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
                Main Video:
                <input
                  type="file"
                  name="video"
                  accept="video/*"
                  onChange={handleFileChange}
                />
              </label>
              <button type="submit">Add Film</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
