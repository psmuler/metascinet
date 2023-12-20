'use client'

import FirstChart from "./components/FirstChart"
import graphOne from "../lib/data-1.json"
import styles from '../styles/Home.module.css'
import { Button } from "@radix-ui/themes"
import Link from "next/link"

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="p-5" >Metascience Actor's Map</h1>
        <Button><Link href="/new">Add Yours</Link></Button>
        <FirstChart data={graphOne} />
      </main>
    </div>
  )
}
