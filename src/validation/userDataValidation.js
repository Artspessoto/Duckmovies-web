import { z } from "zod";

const emailMessage = "E-mail inválido (8-254 caracteres)";
const nameMessage = "Nome (2-50 caracteres)";
const passwordMessage = "Senha (6-12 caracteres)";
const newPasswordMessage = "Nova senha obrigatória (6-12 caracteres)";

export const CreateUserPayload = z.object({
  email: z
    .string()
    .email(emailMessage)
    .min(8, emailMessage)
    .max(254, emailMessage),
  name: z.string().min(2, nameMessage).max(50, nameMessage),
  password: z.string().min(6, passwordMessage).max(12, passwordMessage),
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
        message: newPasswordMessage,
      }
    ),
});
