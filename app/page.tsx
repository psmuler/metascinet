'use client'
import FirstChart from "./components/FirstChart"
import graphOne from "../lib/data-1.json"

import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <FirstChart data={graphOne} />
      </main>
    </div>
  )
}
