import {z} from 'zod'

export const NoteValidator = z.object({
    body: z.string(),
    image: z.string().optional(),
    author: z.string(),
    parent: z.string().optional()
})

export type NewNotePayload = z.infer<typeof NoteValidator>