import { Button } from "@radix-ui/themes"
import Link from "next/link"
import ActorNetwork from "./ActorNetwork";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./api/firebase";
import { z } from "zod";
import { fetchActorSchema } from "@/lib/ActorSchema";

const fetchActors = async () => {
  const querySnapshot = await getDocs(collection(db, "actors"));
  const nodes: Actor[] = []
  querySnapshot.forEach((doc) => {
    nodes.push({
      name: doc.data().name,
      email: doc.data().email,
      group: 1,
      description: doc.data().description,
      embedding: doc.data().embedding
    })
  });

  return nodes
}

type Actor = z.infer<typeof fetchActorSchema>

const THRESHOLD = 0.00018
const computeCosineSimilarity = (arr1: number[], arr2: number[]) => {
  if (arr1.length != arr2.length) return null
  let c: number = 0, n1: number = 0, n2: number = 0
  for (let i = 0; i < arr1.length; i++) {
    c += arr1[i] * arr2[i];
    n1 += arr1[i] ^ 2;
    n2 += arr2[i] ^ 2;
  }
  return c / (n1 ^ (0.5) * n2 ^ (0.5))
}
export default async function Home() {
  const nodes: Actor[] = await fetchActors()
  const links: object[] = []
  if (nodes) {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const vec1 = nodes[i].embedding.data[0].embedding
        const vec2 = nodes[j].embedding.data[0].embedding

        const cossim = computeCosineSimilarity(vec1, vec2)

        if (cossim && cossim > THRESHOLD) {
          links.push({ source: nodes[i].name, target: nodes[j].name, value: 1 })
        }
      }
    }
  }

  const data = {
    nodes: nodes,
    links: links
  }
  return (
    <div>
      <div className="justify-center">
        <p className="p-5 justify-center">Metascience Actors Map</p>
        <Button><Link href="/new">Add Yours</Link></Button>
        <ActorNetwork nodes={data.nodes} links={data.links} />
      </div>

    </div>
  )
}
