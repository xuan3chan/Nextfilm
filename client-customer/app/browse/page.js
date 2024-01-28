import { HeroBanner } from "../ui/browse/HeroBanner"
import { CategoryFilm } from "../ui/browse/CategoryFilm"

export default function Browse() {
  return (
    <div className="relative">
      <HeroBanner />
      <div className="relative w-full h-screen mt-[-15%] z-40">
        <CategoryFilm />
      </div>
      {/* <div className="absolute w-full h-screen top-[75%] overflow-hidden">
        <div className="bg-slate-950 w-14 h-40"></div>
      </div> */}
    </div>
  )
}