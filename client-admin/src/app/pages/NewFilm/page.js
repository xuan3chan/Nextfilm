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
  const data = localStorage.getItem('data')
  const token = data.accessToken
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
      <div className="flex flex-col">
        <Header></Header>
        <div className="flex">
          <SideBar></SideBar>
          <div className="wrapper flex flex-col">
            Thêm Phim
            <form
              className="flex flex-col gap-3 justify-center items-center"
              onSubmit={handleSubmit}
            >
              <label>
                Film Name:
                <input
                  type="text"
                  name="filmName"
                  value={filmData.filmName}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                Mô Tả:
                <input
                  type="text"
                  name="description"
                  value={filmData.description}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                tags:
                <input
                  type="text"
                  name="tags"
                  value={filmData.tags}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                category:
                <input
                  type="text"
                  name="category"
                  value={filmData.category}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                country:
                <input
                  type="text"
                  name="country"
                  value={filmData.country}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                status:
                <input
                  type="text"
                  name="status"
                  value={filmData.status}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                age:
                <input
                  type="text"
                  name="age"
                  value={filmData.age}
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
