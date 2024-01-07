'use client'

import FirstChart from "./components/FirstChart"
// import graphOne from "../lib/data-1.json"
import styles from '../styles/Home.module.css'
import { Button } from "@radix-ui/themes"
import Link from "next/link"

const data =
{
  nodes:
    [
      { id: "Chinyelu Éimhín", group: 1 },
      { id: "Koray Hilarion", group: 1 },
      { id: "Pijus Livianus", group: 2 },
      { id: "Cassiopeia Babür", group: 1 },
      { id: "Veríssimo Ljubo", group: 1 },
      { id: "Girolamo Gulumbu", group: 1 },
      { id: "Proteus Roly", group: 2 },
      { id: "Tacito Ann", group: 1 },
      { id: "Kanti Sara", group: 1 },
      { id: "Terri Sultan", group: 1 },
      { id: "Salud Denny", group: 2 },
      { id: "Aleksi Puja", group: 1 },
      { id: "Edvard Régulo", group: 1 },
      { id: "Janna Vaast", group: 1 },
      { id: "Clementina Petronela", group: 1 },
      { id: "Suman Sue", group: 2 },
      { id: "Jaruška Irina", group: 1 },
      { id: "Lillemor Noureddine", group: 1 },
      { id: "Ernst Ladi", group: 1 },
      { id: "Pål Uršula", group: 2 },
      { id: "Heli Thulile", group: 1 },
      { id: "Adelina Ester", group: 1 },
      { id: "Amadeu Sigurðr", group: 1 },
      { id: "Trajan Clara", group: 2 },
      { id: "Emil Thetis", group: 1 },
      { id: "Dragutin Bhaskara", group: 1 },
      { id: "Marina Jurek", group: 1 },
      { id: "Cosima Luther", group: 2 },
      { id: "Alfonz Belenus", group: 1 },
      { id: "Guiomar Lyn", group: 1 },
      { id: "Ianto Ségolène", group: 1 },
      { id: "Zeruiah Saveliy", group: 2 },
      { id: "Josif Nadia", group: 1 },
      { id: "Shakuntala Diarmaid", group: 1 },
      { id: "Régis Baldewin", group: 1 },
      { id: "Klaus Ludovicus", group: 1 },
      { id: "Bláthnaid Shay", group: 2 },
      { id: "Rosa Fariha", group: 1 },
      { id: "Mahavira Al", group: 1 },
      { id: "Avihu Roxana", group: 1 },
      { id: "Chiemeka Oriol", group: 2 },
      { id: "Tryphaina Peru", group: 1 },
      { id: "Gayatri Zygmunt", group: 2 },
      { id: "Seok-Jin Dalitso", group: 1 },
      { id: "Rohan Sunny", group: 2 },
      { id: "Iris Gayathri", group: 1 },
      { id: "Trace Irena", group: 1 },
    ],
  links: []
}
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="p-5" >Metascience Actors Map</h1>
        <Button><Link href="/new">Add Yours</Link></Button>
        <FirstChart data={data} />
      </main>
    </div>
  )
}
