import Image from 'next/image'
import styles from './page.module.css'
import Header from './header/page'
import Footer from './footer/page'
import Head from 'next/head'
import Link from 'next/link'
import { metadata } from './layout'

export default function Home() {
  return (
    <>
      <p>今の生活やお金の流れから、これからの人生でどれくらい貯められるか、必要かを見てみましょう。</p>
      <p>{metadata.title}は未来の夢や計画をもっと素敵にするためのヒントをお伝えします。</p>
      <span>FP資格保有者が監修！</span>
      <Link className='btn' href="./initial/">
        <span>無料</span>
        <span>今スグ診断してみる</span>
      </Link>
      <p>{metadata.title}のポイント</p>
      <ol>
        <li>商品の押し売りはしません</li>
        <li>無料でシミュレーションできます</li>
        <li>結果を見比べることができる</li>
      </ol>
      <p>{metadata.title}ができること</p>
      <p>{metadata.title}の使い方</p>
    </>
  )
}
