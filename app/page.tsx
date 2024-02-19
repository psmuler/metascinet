import { Button } from "@radix-ui/themes"
import Link from "next/link"
import axios from "axios"
import ActorNetwork from "./ActorNetwork";

if (process.env.NODE_ENV === 'production') {
  // Set production base URL
  axios.defaults.baseURL = 'https://metascinet.vercel.app/';
} else {
  // Set development base URL
  axios.defaults.baseURL = 'http://localhost:3000';
}
interface Actor {
  name: string
  group: number
  id: string
  email: string
  description: string
  embedding: {
    data: {
      embedding: number[];
    }[];
  }
}
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
  const res = await axios.get("/api/actors")
  const nodes: Actor[] = res.data.nodes.map((node: Actor) => (
    {
      ...node,
      group: 1
    }
  ))
  const links: object[] = []
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
