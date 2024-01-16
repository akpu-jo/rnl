import {z} from 'zod'

export const NoteValidator = z.object({
    body: z.string(),
    image: z.string().optional(),
    author: z.string()
})

export type NewNotePayload = z.infer<typeof NoteValidator>