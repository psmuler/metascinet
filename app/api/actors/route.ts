import { NextRequest, NextResponse } from "next/server";
import { db } from "../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { createActorSchema } from "@/lib/ActorSchema";
import OpenAI from 'openai';

export async function POST(request: NextRequest) {
    const body = await request.json()

    const validation = createActorSchema.safeParse(body)
    if (!validation.success) return NextResponse.json(validation.error, { status: 400 })

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
    });

    const embedding = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: body.description,
        encoding_format: "float",
    })

    const data = {
        name: body.name,
        email: body.email,
        group: 1,
        description: body.description,
        embedding: embedding
    }

    await addDoc(collection(db, "actors"), data)
    return (NextResponse.json(body, { status: 201 }))
}

export async function GET(request: NextRequest) {
    const actors = await getDocs(collection(db, "actors"))
    const nodes = actors.docs.map(doc => (doc.data()))

    return NextResponse.json({ nodes: nodes, links: [] }, { status: 200 })
}