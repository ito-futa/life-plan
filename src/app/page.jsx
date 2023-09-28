import Image from 'next/image'
import styles from './page.module.css'
import Header from './header/page'
import Footer from './footer/page'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <p>今の生活やお金の流れから、これからの人生でどれくらい貯められるか、必要かを見てみましょう。</p>
      <p>未来の夢や計画をもっと素敵にするためのヒントになります。</p>
      <Link className='btn' href="./initial/">
        さっそく試してみる
      </Link>
    </>
  )
}
