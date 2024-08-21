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
    result.error.errors.forEach((error) => {
      const message = error.message;
      addAlert("error", message);
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
