import { api } from "./api";
import { CreateUserPayload } from "../validation/userDataValidation";

export function handleSignUp({ name, email, password, addAlert, navigate }) {
  if (!name || !email || !password) {
    addAlert("error", "Preencha os campos obrigatórios!");
    return;
  }

  const result = CreateUserPayload.safeParse({
    name,
    email,
    password,
  });

  if (!result.success) {
    const groupedErrors = {};

    result.error.errors.forEach((error) => {
      const path = error.path[0];
      const message = error.message;

      if (groupedErrors[path]) {
        groupedErrors[path].push(message);
      } else {
        groupedErrors[path] = [message];
      }
    });

    Object.entries(groupedErrors).forEach(([ , messages]) => {
      const combinedMessage = messages.join(" ; ");
      addAlert("error", combinedMessage);
    });

    return;
  }

  api
    .post("/users", { name, email, password })
    .then(() => {
      addAlert("success", "Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch((err) => {
      let apiMessage = err.response.data.message;

      if (apiMessage) {
        Array.isArray(apiMessage)
          ? apiMessage.forEach((msg) => addAlert("error", msg))
          : addAlert("error", apiMessage);
      } else {
        addAlert("error", "Não foi possível cadastrar o usuário");
      }
    });
}
