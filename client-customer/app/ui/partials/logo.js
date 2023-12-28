import Image from "next/image"
import logo from '@/public/nextfilmLogo21.svg'

export const Logo = ({className}) => {
  return (
    <div className={className}>
      <Image
        priority
        quality={50}
        src={logo}
        alt="NextFilm"
      />
    </div>
  )
}