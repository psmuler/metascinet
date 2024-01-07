import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const createActorSchema = z.object({
    name: z.string().min(1).max(50),
    email: z.string().email(),
    description: z.string().min(1),
})

export async function POST(request: NextRequest) {
    const body = await request.json()

    const validation = createActorSchema.safeParse(body)
    if (!validation.success) return NextResponse.json("invalid data format", { status: 400 })

    const data = {
        name: body.name,
        email: body.email,
        description: body.description
    }
    await addDoc(collection(db, "actors"), data)
    return (NextResponse.json(body, { status: 201 }))
}

export async function GET(request: NextRequest) {
    // const body = await request.json()
    const data = { name: "Loyd Forger", email: "aho@example.com", description: "you are not baka" }
    return NextResponse.json(data, { status: 200 })
}