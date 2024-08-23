import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { App } from "../../containers/App";
import { RouterWrapper } from "../../test-utils/RouterWrapper";
import { handleSignUp } from "../../services/signUpService";

export function renderSignUpPage() {
  return render(
    <RouterWrapper initialEntries={["/register"]}>
      <App />
    </RouterWrapper>
  );
}

let mockedAddAlert = vi.fn();

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
    useNavigate: vi.fn(),
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
});
