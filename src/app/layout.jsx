import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import './normalize.css'
import Header from './header/page'
import Footer from './footer/page'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html >
  )
}
