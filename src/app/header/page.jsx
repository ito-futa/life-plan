import React from 'react'
import styles from "./header.module.css"

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h2>未来家計簿</h2>
        <p>-手軽にはじめるライフプラン-</p>
      </header>
    </>
  )
}
