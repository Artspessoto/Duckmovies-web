import { z } from "zod";

export const CreateMovieNotePayload = z.object({
  title: z
    .string()
    .min(2, "Título (2-255)")
    .max(255, "Título não pode exceder 255 caracteres"),
  description: z
    .string()
    .max(1500, "Descrição sobre filme não pode exceder 1500 caracteres")
    .optional(),
  rating: z
    .number()
    .min(1, "Avaliação do filme deve ser entre 1 e 5")
    .max("Avaliação do filme deve ser entre 1 e 5"),
  tags: z
    .array(z.string())
    .min(1, "Para anotação do filme, 1 categoria é obrigatória"),
});
