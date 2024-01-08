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
      { name: "Chinyelu Éimhín", group: 1, id: "1", email: "aaa", description: "Lorem ipsum eget felis eget nunc lobortis mattis aliquam faucibus purus. Ipsum dolor sit amet consectetur adipiscing elit. Purus in mollis nunc sed id semper. Imperdiet sed euismod nisi porta lorem mollis aliquam. Auctor neque vitae tempus quam. Vitae tempus quam pellentesque nec. Auctor augue mauris augue neque. Mattis aliquam faucibus purus in massa tempor nec feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Massa enim nec dui nunc mattis enim. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Elementum facilisis leo vel fringilla est ullamcorper eget nulla" },
      { name: "Koray Hilarion", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Pijus Livianus", group: 2, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Cassiopeia Babür", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Veríssimo Ljubo", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Girolamo Gulumbu", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Proteus Roly", group: 2, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Tacito Ann", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Kanti Sara", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Terri Sultan", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Salud Denny", group: 2, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Aleksi Puja", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Edvard Régulo", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Janna Vaast", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Clementina Petronela", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Suman Sue", group: 2, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Jaruška Irina", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Lillemor Noureddine", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Ernst Ladi", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Pål Uršula", group: 2, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Heli Thulile", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Adelina Ester", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Amadeu Sigurðr", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Trajan Clara", group: 2, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Emil Thetis", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Dragutin Bhaskara", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Marina Jurek", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Cosima Luther", group: 2, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Alfonz Belenus", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Guiomar Lyn", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Ianto Ségolène", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Zeruiah Saveliy", group: 2, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Josif Nadia", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Shakuntala Diarmaname", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Régis Baldewin", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Klaus Ludovicus", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Bláthnaname Shay", group: 2, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Rosa Fariha", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Mahavira Al", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Avihu Roxana", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Chiemeka Oriol", group: 2, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Tryphaina Peru", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Gayatri Zygmunt", group: 2, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Seok-Jin Dalitso", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Rohan Sunny", group: 2, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Iris Gayathri", group: 1, id: "aaa", email: "aaa", description: "ppp" },
      { name: "Trace Irena", group: 1, id: "aaa", email: "aaa", description: "ppp" },
    ],
  links: []
}
interface Actor {
  name: string
  group: number
  id: string
  email: string
  description: string
}

export default function Home() {
  const [actorFocus, setActorFocus] = useState<Actor>()
  const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis est mollis neque porta tempus vitae fermentum dolor. Vestibulum congue eros laoreet volutpat hendrerit. Nam eget massa placerat, volutpat lorem et, congue odio. Nulla pharetra mollis ipsum, et tincidunt quam facilisis vitae. Duis fermentum bibendum arcu, at efficitur elit tempus eget. Duis ut eros non est porttitor convallis. Quisque cursus mi at diam sodales, at consectetur elit maximus. Pellentesque ac leo a urna luctus dictum et ac augue. Suspendisse potenti. Curabitur vitae eros dolor. Cras sit amet justo quis dui aliquet varius. Praesent ut eros in ante ultricies varius."
  return (
    <div>
      <div className="justify-center">
        <p className="p-5 justify-center" >Metascience Actors Map</p>
        <Button><Link href="/new">Add Yours</Link></Button>
      </div>
      <div className="flex flex-wrap p-10">
        <div className="w-full  lg:w-2/3 p-4">
          <FirstChart data={data} onFocus={(id: string) => {
            setActorFocus(data.nodes.find(e => e.name == id))
          }} />
        </div>
        <div className="w-full  lg:w-80">
          {actorFocus && <ShowActor name={actorFocus.name} email={actorFocus.email} description={actorFocus.description} />}
        </div>
      </div>
    </div>
  )
}
