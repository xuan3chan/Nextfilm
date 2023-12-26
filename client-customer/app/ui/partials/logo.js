import Image from "next/image"
import Link from "next/link"
import logo from '@/public/nextfilmLogo21.svg'

export const Logo = ({width, height}) => {
  return (
    <Image
      src={logo}
      alt="NextFilm"
      width={width}
      height={height}
    />
  )
}