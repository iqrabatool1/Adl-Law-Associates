import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { ReactNode } from 'react'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://adllawassociates.pk'),
  title: 'ADL Law Associates | Best Lawyer & Advocate in Islamabad',
  description: 'Trusted Islamabad law firm for criminal, civil, family & corporate cases. Expert legal representation with Advocate Riffat Jan. Book a consultation today.',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'zfSPmJn17xbBdwujfIJXvl5eWdIP-iLyVxe-h64gvZ8',
  },
  icons: {
    icon: '/logo.jpeg?v=1', 
    apple: '/logo.jpeg?v=1',
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "ADL Law Associates",
  "image": "https://adllawassociates.pk/blindfoldlady.png",
  "url": "https://adllawassociates.pk",
  "telephone": "+92-345-9588005",
  "email": "hazratrifat@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office No.16, Farhan Plaza, G-11 Markaz",
    "addressLocality": "Islamabad",
    "addressCountry": "PK"
  },
  "founder": {
    "@type": "Person",
    "name": "Riffat Jan"
  },
  "areaServed": "Pakistan",
  "priceRange": "$$"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
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

        <Script
          id="legal-service-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
