import { z } from 'zod';

export const createActorSchema = z.object({
    name: z.string().min(1, "Title cannot be empty").max(50, "Your name exceed the limit length"),
    email: z.string().email("Please provide valid email address"),
    description: z.string().min(1, "Description cannot be empty").max(800, "Please provide shorter description of yours"),
    group: z.number(),
    embedding: z.object({
        data: z.object({
            embedding: z.number().array()
        }).array()
    })
});