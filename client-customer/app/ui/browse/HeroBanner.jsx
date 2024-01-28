"use client"
import { useEffect, useState } from "react";
import { getAllFilm } from "@/app/lib/action";
import HeroSkeleton from "../skeleton";
import Image from "next/image";
import thumNail from '@/public/maxresdefault.jpg'

export function HeroBanner() {
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
    <div className="w-full relative">
      {loading && <HeroSkeleton />}
      {!loading && films.length > 0 && (
        <div key={films[1]._id}>
          {showThumbnail ? (
            <div className="relative">
              <Image src={thumNail} alt="Thumnail" className="w-full h-full" />
              <h1 className="absolute flex flex-col justify-end text-white text-2xl w-[36%] top-0 bottom-[35%] left-[4%]">{films[1].filmName}</h1>
            </div>
          ) : 
          <video autoPlay onEnded={handleThumbnail} className="w-full">
            <source src={films[1].trailer} type="video/mp4" />
          </video>
          }
        </div>
      )}
      <div className="absolute w-full h-28 z-30 bottom-0 bg-transparent bg-gradient-to-t from-black/70">
      </div>
    </div>
    
  )
}