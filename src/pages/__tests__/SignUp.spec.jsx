import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { App } from "../../containers/App";
import { RouterWrapper } from "../../test-utils/RouterWrapper";

export function renderSignUpPage() {
  return render(
    <RouterWrapper initialEntries={["/register"]}>
      <App />
    </RouterWrapper>
  );
}

vi.mock("../../services/signUpService.js", () => ({
  handleSignUp: vi.fn(),
}));

vi.mock("../../context/AlertContext/useAlerts.js", () => ({
  useAlerts: vi.fn().mockReturnValue({
    alerts: [],
    cleanAlerts: vi.fn(),
  }),
}));

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: vi.fn(),
    BrowserRouter: actual.BrowserRouter,
  };
});

describe("SignUp page", () => {
  beforeEach(() => {
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
});
