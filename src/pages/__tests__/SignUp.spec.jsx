import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { App } from "../../containers/App";
import { RouterWrapper } from "../../test-utils/RouterWrapper";

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
    render(
      <RouterWrapper initialEntries={["/register"]}>
        <App />
      </RouterWrapper>
    );

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
});
