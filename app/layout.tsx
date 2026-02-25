import React from "react"
import type { Metadata } from 'next'
import { Lora, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _lora = Lora({ subsets: ["latin"], variable: "--font-serif" });
const _outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: 'IET Malaysia - Intelligent Ecommerce Technologies | E-commerce & IT Solutions',
  description: 'IET Malaysia (Intelligent Ecommerce Technologies Sdn Bhd) is a Malaysia-based IT company. We deliver e-commerce solutions, bespoke software development, large IT project management, and web development, and partner with organisations and government agencies for efficient, responsive, and user-centric digital services.',
  generator: 'v0.app',
  icons: {
    icon: '/icons/favicon.jpg',
    apple: '/icons/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_outfit.variable} ${_lora.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
