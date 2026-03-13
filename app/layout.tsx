import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { ReactNode } from 'react'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: 'ADL Law Associates',
  description: 'Professional legal services in criminal, civil, family, and corporate law.',
  icons: [
    { rel: 'icon', url: '/logo.png' },
    { rel: 'apple-touch-icon', url: '/logo.png' },
  ],
}

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
