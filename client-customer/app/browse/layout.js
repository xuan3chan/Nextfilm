import { Header } from "../ui/browse/Header"
import { Footer } from "../ui/browse/Footer"
import { TokenJWTAuth } from "../lib/auth";

export default function BrowseLayout({children}) {
  return (
    <TokenJWTAuth>
      <div className="h-full relative">
      <Header />
        {children}
      </div>
      <Footer />
    </TokenJWTAuth>
  )
}