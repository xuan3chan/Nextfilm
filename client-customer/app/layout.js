import '@/app/ui/globals.css'
import { Providers } from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body suppressHydrationWarning={true}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
