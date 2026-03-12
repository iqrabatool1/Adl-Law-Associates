import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { ReactNode } from 'react'
import WhatsAppButton from '@/components/WhatsAppButton'


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">
        <WhatsAppButton /> {/* Moved to the top to test visibility */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
