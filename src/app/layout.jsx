import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import './normalize.css'
import Header from './header/page'
import Footer from './footer/page'
import Head from 'next/head'

export const metadata = {
  title: "未来家計簿",
  description: "あなたの生活を豊かにするためのライフプラン作成サイト"
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="ja">
        <body className={inter.className}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </>
  )
}
