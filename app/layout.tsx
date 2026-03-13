import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { ReactNode } from 'react'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ADL Law Associates',
  description: 'Professional legal services in criminal, civil, family, and corporate law.',
  icons: {
    // Adding ?v=1 forces the browser to refresh the icon
    icon: '/logo.jpeg?v=1', 
    apple: '/logo.jpeg?v=1',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">
        <WhatsAppButton />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}