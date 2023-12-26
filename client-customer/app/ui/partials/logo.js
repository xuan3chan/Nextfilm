import Image from "next/image"
import logo from '@/public/nextfilmLogo21.svg'

export const Logo = ({width, height}) => {
  return (
    <Image
      quality={50}
      src={logo}
      alt="NextFilm"
      width={width}
      height={height}
    />
  )
}