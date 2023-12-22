import {z} from 'zod'

export const NoteValidator = z.object({
    note: z.string(),
    image: z.string().optional()
})

export type NewNotePayload = z.infer<typeof NoteValidator>