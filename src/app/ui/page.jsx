import React from 'react'
import styles from "./ui.module.css"
import Link from 'next/link'

export default function PositiveButton({ label }) {
  return (
    <Link className="button" href="./base">
      <button>
        {label}
      </button>
    </Link>
  )
}