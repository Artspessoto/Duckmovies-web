import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { App } from "../../containers/App";
import { RouterWrapper } from "../../test-utils/RouterWrapper";
import { handleSignUp } from "../../services/signUpService";
import { api } from "../../services/api";

export function renderSignUpPage() {
  return render(
    <RouterWrapper initialEntries={["/register"]}>
      <App />
    </RouterWrapper>
  );
}

let mockedAddAlert = vi.fn();
let mockedNavigate = vi.fn();

vi.mock("../../context/AlertContext/useAlerts.js", () => {
  return {
    useAlerts: vi.fn().mockReturnValue({
      addAlert: (...args) => {
        mockedAddAlert(...args);
      },
      alerts: [],
      cleanAlerts: vi.fn(),
    }),
  };
});

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
    BrowserRouter: actual.BrowserRouter,
  };
});

vi.mock("../../services/signUpService", () => ({
  handleSignUp: vi.fn(),
}));

describe("SignUp page", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  it("Should be render SignUp form correctly", async () => {
    renderSignUpPage();

    expect(screen.getByPlaceholderText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Senha/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Cadastrar/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Voltar para o login/i })
    ).toBeInTheDocument();
  });

  it("Should update input values correctly", () => {
    renderSignUpPage();

    const nameInput = screen.getByPlaceholderText(/Nome/i);
    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    const passwordInput = screen.getByPlaceholderText(/Senha/i);

    fireEvent.change(nameInput, { target: { value: "Teste Gameplays" } });
    fireEvent.change(emailInput, {
      target: { value: "testegameplays@email.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "senhaSegura123" } });

    expect(nameInput.value).toBe("Teste Gameplays");
    expect(emailInput.value).toBe("testegameplays@email.com");
    expect(passwordInput.value).toBe("senhaSegura123");
  });

  it("Should call handleSignUp with correct data", () => {
    renderSignUpPage();

    const name = "Arthur Martins";
    const email = "arthur@email.com";
    const password = "senhaSegura123";

    fireEvent.change(screen.getByPlaceholderText(/Nome/i), {
      target: { value: name },
    });
    fireEvent.change(screen.getByPlaceholderText(/E-mail/i), {
      target: { value: email },
    });
    fireEvent.change(screen.getByPlaceholderText(/Senha/i), {
      target: { value: password },
    });

    fireEvent.click(screen.getByRole("button", { name: /Cadastrar/i }));

    expect(handleSignUp).toHaveBeenCalledWith({
      name: name,
      email: email,
      password: password,
      addAlert: expect.any(Function),
      navigate: expect.any(Function),
    });
  });

  it("Should show an error alert when all fiels are empty", () => {
    renderSignUpPage();

    handleSignUp.mockImplementation(({ addAlert }) => {
      addAlert("error", "Preencha os campos obrigatórios!");
    });

    fireEvent.click(screen.getByRole("button", { name: /Cadastrar/i }));

    expect(mockedAddAlert).toHaveBeenCalledWith(
      "error",
      "Preencha os campos obrigatórios!"
    );
  });

  it("Should show an error alert when name is less than 2 characters", () => {
    renderSignUpPage();

    handleSignUp.mockImplementation(({ addAlert }) => {
      addAlert("error", "O nome deve conter pelo menos 2 caracteres");
    });

    fireEvent.change(screen.getByPlaceholderText(/Nome/i), {
      target: { value: "A" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Cadastrar/i }));

    expect(mockedAddAlert).toHaveBeenCalledWith(
      "error",
      "O nome deve conter pelo menos 2 caracteres"
    );
  });

  it("Should show an error with two alert messages when name and password is invalid", () => {
    renderSignUpPage();

    handleSignUp.mockImplementation(({ addAlert }) => {
      addAlert("error", "O nome deve conter pelo menos 2 caracteres");
      addAlert("error", "A senha deve conter pelo menos 6 caracteres");
    });

    fireEvent.change(screen.getByPlaceholderText(/Nome/i), {
      target: { value: "A" },
    });

    fireEvent.change(screen.getByPlaceholderText(/Senha/i), {
      target: { value: "teste" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Cadastrar/i }));

    expect(mockedAddAlert).toHaveBeenCalledTimes(2);

    expect(mockedAddAlert).toHaveBeenCalledWith(
      "error",
      "O nome deve conter pelo menos 2 caracteres"
    );
    expect(mockedAddAlert).toHaveBeenCalledWith(
      "error",
      "A senha deve conter pelo menos 6 caracteres"
    );
  });

  it("Should show an error alert when email value is invalid format", () => {
    renderSignUpPage();

    handleSignUp.mockImplementation(({ addAlert }) => {
      addAlert("error", "O formato do e-mail é inválido");
    });

    fireEvent.change(screen.getByPlaceholderText(/E-mail/i), {
      target: { value: "invalid_email" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Cadastrar/i }));

    expect(mockedAddAlert).toHaveBeenCalledWith(
      "error",
      "O formato do e-mail é inválido"
    );
  });

  it("Should create an user with successful fields", () => {
    renderSignUpPage();

    const name = "Teste usuário";
    const email = "teste@email.com";
    const password = "senhaComplexa123";

    handleSignUp.mockImplementation(({ addAlert, navigate }) => {
      addAlert("success", "Usuário criado com sucesso!");
      navigate("/");
    });

    fireEvent.change(screen.getByPlaceholderText(/Nome/i), {
      target: { value: name },
    });
    fireEvent.change(screen.getByPlaceholderText(/E-mail/i), {
      target: { value: email },
    });
    fireEvent.change(screen.getByPlaceholderText(/Senha/i), {
      target: { value: password },
    });

    fireEvent.click(screen.getByRole("button", { name: /Cadastrar/i }));

    expect(handleSignUp).toHaveBeenCalledWith({
      name: name,
      email: email,
      password: password,
      addAlert: expect.any(Function),
      navigate: expect.any(Function),
    });

    expect(mockedAddAlert).toHaveBeenCalledWith(
      "success",
      "Usuário criado com sucesso!"
    );

    expect(mockedNavigate).toHaveBeenCalledWith("/");
  });
});
