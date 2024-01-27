"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";
import SideBar from "@/app/components/SideBar/SideBar";
import Header from "@/app/components/header/header";
import DeleteButtonDefault from "@/app/components/Button/DeleteButtonDefault";
import EditButton from "@/app/components/Button/EditButton";
import "@/styles/app.css";
export default function page() {
  const [token, setToken] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isOpened, setIsOpened] = useState(false);

  const data = localStorage.getItem("data") || {};
  const ApiLink = "http://localhost:8000/api/film/getall";
  const handleDeleteMovie = (id) => {
    axios
      .delete(`http://localhost:8000/api/film/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        Swal.fire({
          title: "Thành Công",
          text: "Xóa Phim Thành Công",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        // Handle error, if needed
        console.error(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data) {
          setToken(data.accessToken);
        }

        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        };

        const res = await axios.get(ApiLink, { headers });
        setMovieList(res.data.films);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token, movieList]); // Added token as a dependency

  return (
    <div className="bg-color">
      <div className="flex flex-col">
        <Header></Header>
        <div className="flex">
          <SideBar></SideBar>
          <div className="wrapper w-3/4 flex flex-col">
            <div className="MovieListTitle w-full flex justify-center items-center">
              Danh Sách Phim
            </div>
            <button
              onClick={() => {
                window.location.href = "NewFilm";
              }}
              className="btn w-30 h-10 text-black border-black border-2 w-32"
            >
              Phim Mới
            </button>
            {Array.isArray(movieList) && movieList.length > 0 ? (
              <div className="MovieListSection flex flex-wrap w-full ">
                {movieList.map((item) => (
                  <li
                    key={item._id}
                    scroll={false}
                    className="MovieItem w-1/5 hover:border-black hover:border-2 p-2 style list-none rounded-lg flex flex-col justify-center items-center"
                  >
                    <Link
                      href="movies/[slug]"
                      as={`movies/${item._id}`}
                      className="w-full flex flex-col gap-4 justify-center items-center"
                    >
                      <img
                        src={item.poster}
                        alt=""
                        className="MoviePoster w-full h-3/4"
                      />
                      <div className="TextSection flex flex-col justify-center items-center">
                        <div className="MovieName">{item.filmName}</div>
                        <div className="MovieCategory">{item.category}</div>
                      </div>
                    </Link>
                    <div className="ButtonSection flex gap-4">
                      <DeleteButtonDefault
                        handleFunction={() => handleDeleteMovie(item._id)}
                      />
                      <EditButton />
                    </div>
                  </li>
                ))}
              </div>
            ) : (
              <div> Chưa Có Dữ Liệu</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
