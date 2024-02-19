'use client'
import React, { useState } from 'react'
import ShowActor from "./ShowActor"
import FirstChart from "./components/FirstChart"
import { z } from 'zod'
import { createActorSchema } from '@/lib/ActorSchema'

type Actor = z.infer<typeof createActorSchema>
interface Props {
    nodes: Actor[]
    links: object
}

const ActorNetwork = ({ nodes, links }: Props) => {
    const [actorFocus, setActorFocus] = useState<Actor>()
    const data = {
        nodes: nodes,
        links: links
    }
    return (
        <div className="flex flex-wrap p-10">
            <div className="w-full  lg:w-2/3 p-4">
                <FirstChart data={data} onFocus={(id: string) => {
                    setActorFocus(nodes.find(e => e.name == id))
                }} />
            </div>
            <div className="w-full  lg:w-80">
                {actorFocus && <ShowActor name={actorFocus.name} email={actorFocus.email} description={actorFocus.description} />}
            </div>
        </div>
    )
}

export default ActorNetwork