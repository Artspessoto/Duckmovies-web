import { api } from "./api";

export function handleSignUp({ name, email, password, addAlert }) {
  if (!name || !email || !password) {
    addAlert("error", "Preencha os campos obrigatórios!");
    return;
  }

  api
    .post("/users", { name, email, password })
    .then(() => {
      addAlert("success", "Usuário cadastrado com sucesso!");
    })
    .catch((err) => {
      let apiMessage = err.response.dat.message;

      if (apiMessage) {
        Array.isArray(apiMessage)
          ? apiMessage.forEach((msg) => addAlert("error", msg))
          : addAlert("error", apiMessage);
      } else {
        addAlert("error", "Não foi possível cadastrar o usuário");
      }
    });
}
