"use client"
import { useEffect, useState } from "react";
import { getAllFilm } from "../lib/action";
import MovieCardSkeleton from "../ui/skeleton";

export default function browse() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      window.location.href = '/login';
    }

    const fetchAllFilm = async () => {
      setLoading(true);
      try {
        const res = await getAllFilm();
        setFilms(res)
        setLoading(false);
      } catch (error) {
        alert("Can't get all film in browse page");
      }
    };

    fetchAllFilm();
  }, []);

  return (
    <div className="w-full">
      {loading && <MovieCardSkeleton />}
      {!loading && films.length > 0 && (
        <div key={films[1]._id}>
          <h1>{films[1].filmName}</h1>
          <video autoPlay controls className="w-full">
            <source src={films[1].trailer} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}