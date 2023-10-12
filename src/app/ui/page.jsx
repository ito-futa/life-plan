import React from 'react'
import styles from "./ui.module.css"
import Link from 'next/link'

export default function PositiveButton({ label, href }) {
  return (
    <Link className={styles.button} href={href}>
      <span>{label}</span>
    </Link>
  )
}