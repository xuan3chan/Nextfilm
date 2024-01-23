"use client"
import { useEffect, useState } from "react";
import { getAllFilm } from "../lib/action";
import HeroSkeleton from "../ui/skeleton";
// import { Image } from "@nextui-org/react";
import Image from "next/image";
import thumNail from '@/public/maxresdefault.jpg'

export default function Browse() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showThumbnail, setshowThumbnail] = useState(false);

  useEffect(() => {
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

  const handleThumbnail = () => {
    setshowThumbnail(true)
  }

  return (
    <div className="w-full h-screen relative">
      {loading && <HeroSkeleton />}
      {!loading && films.length > 0 && (
        <div key={films[1]._id}>
          {showThumbnail ? (
            <Image src={thumNail} alt="Thumnail" className="w-full h-full transition-all duration-1000 ease-in-out opacity-100" />
          ) : 
          <video autoPlay onEnded={handleThumbnail} className="w-full">
            <source src={films[1].trailer} type="video/mp4" />
          </video>
          }
        </div>
      )}
    </div>
  )
}