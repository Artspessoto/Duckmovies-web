import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { App } from "../../containers/App";
import { RouterWrapper } from "../../test-utils/RouterWrapper";

export function renderSignInPage() {
  render(
    <RouterWrapper initialEntries={["/"]}>
      <App />
    </RouterWrapper>
  );
}

let mockedAddAlert = vi.fn();
let mockedNavigate = vi.fn();
let mockedSignIn = vi.fn();

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
  };
});

vi.mock("../../context/AuthContext/useAuth.js", () => {
  return {
    useAuth: () => ({
      signIn: mockedSignIn,
    }),
  };
});

describe("SignIn page", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  it("Should be render SignIn form correctly", async () => {
    renderSignInPage();

    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Entrar/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Criar conta/i })
    ).toBeInTheDocument();
  });
});
