'use client'

import FirstChart from "./components/FirstChart"
import { Button } from "@radix-ui/themes"
import Link from "next/link"
import { useState } from "react"
import ShowActor from "./ShowActor"

const data =
{
  nodes:
    [
      { name: "Chinyelu Éimhín", group: 1, id: "1" },
      { name: "Koray Hilarion", group: 1, id: "aaa" },
      { name: "Pijus Livianus", group: 2, id: "aaa" },
      { name: "Cassiopeia Babür", group: 1, id: "aaa" },
      { name: "Veríssimo Ljubo", group: 1, id: "aaa" },
      { name: "Girolamo Gulumbu", group: 1, id: "aaa" },
      { name: "Proteus Roly", group: 2, id: "aaa" },
      { name: "Tacito Ann", group: 1, id: "aaa" },
      { name: "Kanti Sara", group: 1, id: "aaa" },
      { name: "Terri Sultan", group: 1, id: "aaa" },
      { name: "Salud Denny", group: 2, id: "aaa" },
      { name: "Aleksi Puja", group: 1, id: "aaa" },
      { name: "Edvard Régulo", group: 1, id: "aaa" },
      { name: "Janna Vaast", group: 1, id: "aaa" },
      { name: "Clementina Petronela", group: 1, id: "aaa" },
      { name: "Suman Sue", group: 2, id: "aaa" },
      { name: "Jaruška Irina", group: 1, id: "aaa" },
      { name: "Lillemor Noureddine", group: 1, id: "aaa" },
      { name: "Ernst Ladi", group: 1, id: "aaa" },
      { name: "Pål Uršula", group: 2, id: "aaa" },
      { name: "Heli Thulile", group: 1, id: "aaa" },
      { name: "Adelina Ester", group: 1, id: "aaa" },
      { name: "Amadeu Sigurðr", group: 1, id: "aaa" },
      { name: "Trajan Clara", group: 2, id: "aaa" },
      { name: "Emil Thetis", group: 1, id: "aaa" },
      { name: "Dragutin Bhaskara", group: 1, id: "aaa" },
      { name: "Marina Jurek", group: 1, id: "aaa" },
      { name: "Cosima Luther", group: 2, id: "aaa" },
      { name: "Alfonz Belenus", group: 1, id: "aaa" },
      { name: "Guiomar Lyn", group: 1, id: "aaa" },
      { name: "Ianto Ségolène", group: 1, id: "aaa" },
      { name: "Zeruiah Saveliy", group: 2, id: "aaa" },
      { name: "Josif Nadia", group: 1, id: "aaa" },
      { name: "Shakuntala Diarmaname", group: 1, id: "aaa" },
      { name: "Régis Baldewin", group: 1, id: "aaa" },
      { name: "Klaus Ludovicus", group: 1, id: "aaa" },
      { name: "Bláthnaname Shay", group: 2, id: "aaa" },
      { name: "Rosa Fariha", group: 1, id: "aaa" },
      { name: "Mahavira Al", group: 1, id: "aaa" },
      { name: "Avihu Roxana", group: 1, id: "aaa" },
      { name: "Chiemeka Oriol", group: 2, id: "aaa" },
      { name: "Tryphaina Peru", group: 1, id: "aaa" },
      { name: "Gayatri Zygmunt", group: 2, id: "aaa" },
      { name: "Seok-Jin Dalitso", group: 1, id: "aaa" },
      { name: "Rohan Sunny", group: 2, id: "aaa" },
      { name: "Iris Gayathri", group: 1, id: "aaa" },
      { name: "Trace Irena", group: 1, id: "aaa" },
    ],
  links: []
}
export default function Home() {
  const [actorFocus, setActorFocus] = useState("")
  const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis est mollis neque porta tempus vitae fermentum dolor. Vestibulum congue eros laoreet volutpat hendrerit. Nam eget massa placerat, volutpat lorem et, congue odio. Nulla pharetra mollis ipsum, et tincidunt quam facilisis vitae. Duis fermentum bibendum arcu, at efficitur elit tempus eget. Duis ut eros non est porttitor convallis. Quisque cursus mi at diam sodales, at consectetur elit maximus. Pellentesque ac leo a urna luctus dictum et ac augue. Suspendisse potenti. Curabitur vitae eros dolor. Cras sit amet justo quis dui aliquet varius. Praesent ut eros in ante ultricies varius."
  return (
    <div>
      <div className="justify-center">
        <p className="p-5 justify-center" >Metascience Actors Map</p>
        <Button><Link href="/new">Add Yours</Link></Button>
      </div>
      <div className="flex flex-wrap p-10">
        <div className="w-full  lg:w-2/3 p-4">
          <FirstChart data={data} onFocus={(id: string) => { setActorFocus(id) }} />
        </div>
        <div className="w-full  lg:w-80">
          {actorFocus && <ShowActor name={"Obaka maru"} email={"mailto@example.com"} description={desc} />}
        </div>
      </div>
    </div>
  )
}
