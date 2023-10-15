import React from 'react'
import styles from "./ui.module.css"
import Link from 'next/link'

export function PositiveButton({ label, href }) {
  return (
    <>
      <Link href={href}>
        <span className={styles.button}>{label}</span>
      </Link>
    </>
  )
}
