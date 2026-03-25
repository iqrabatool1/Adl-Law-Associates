import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { ReactNode } from 'react'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'ADL Law Associates',
  description: 'Professional legal services in criminal, civil, family, and corporate law.',
  // Google Search Console Verification
  verification: {
    google: 'google7f8766081ec234cc',
  },
  icons: {
    icon: '/logo.jpeg?v=1', 
    apple: '/logo.jpeg?v=1',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RTB85RDQL9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RTB85RDQL9');
          `}
        </Script>
      </head>
      <body className="bg-white text-black font-sans">
        <WhatsAppButton />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}