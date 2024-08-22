import { z } from "zod";

export const CreateMovieNotePayload = z.object({
  title: z
    .string()
    .min(2, "O título deve conter pelo menos 2 caracteres")
    .max(255, "O título pode conter no máximo 255 caracteres"),
  description: z
    .string()
    .max(1500, "A descrição do filme pode conter no máximo 1500 caracteres")
    .optional(),
  rating: z
    .number()
    .min(1, "A avaliação do filme deve ser no mínimo 1")
    .max(5, "A avaliação do filme deve ser no máximo 5"),
  tags: z
    .array(z.string())
    .min(
      1,
      "Você deve selecionar pelo menos 1 categoria para a anotação do filme"
    ),
});
