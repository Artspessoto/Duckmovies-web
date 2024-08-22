import { z } from "zod";

export const CreateUserPayload = z.object({
  email: z
    .string()
    .email("O formato do e-mail é inválido")
    .min(8, "O e-mail deve conter pelo menos 8 caracteres")
    .max(254, "O e-mail pode conter no máximo 254 caracteres"),
  name: z
    .string()
    .min(2, "O nome deve conter pelo menos 2 caracteres")
    .max(50, "O nome pode conter no máximo 50 caracteres"),
  password: z
    .string()
    .min(6, "A senha deve conter pelo menos 6 caracteres")
    .max(12, "A senha pode conter no máximo 12 caracteres"),
});

export const UpdateUserPayload = CreateUserPayload.pick({
  email: true,
  name: true,
}).extend({
  password: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (value) {
          return value.length >= 6 && value.length <= 12;
        }
        return true;
      },
      {
        message: "Nova senha obrigatória (6-12 caracteres)",
      }
    ),
});
