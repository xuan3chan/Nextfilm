import { Header } from "../ui/browse/Header"
import { Footer } from "../ui/browse/Footer"
export default function BrowseLayout({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}