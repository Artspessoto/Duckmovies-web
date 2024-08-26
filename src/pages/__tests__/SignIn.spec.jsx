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
    // eslint-disable-next-line react/prop-types
    Link: ({ to, children }) => (
      <a href={to} onClick={() => mockedNavigate(to)}>
        {children}
      </a>
    ),
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
    renderSignInPage();
  });

  it("Should be render SignIn form correctly", async () => {
    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Entrar/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Criar conta/i })
    ).toBeInTheDocument();
  });

  it("Should update input values correctly", () => {
    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    const passwordInput = screen.getByPlaceholderText(/Senha/i);

    fireEvent.change(emailInput, { target: { value: "teste@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    expect(emailInput.value).toBe("teste@email.com");
    expect(passwordInput.value).toBe("123456");
  });

  it("Should call signIn with correct values when form is submitted", () => {
    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    const passwordInput = screen.getByPlaceholderText(/Senha/i);
    const signInButton = screen.getByRole("button", { name: /Entrar/i });

    fireEvent.change(emailInput, { target: { value: "teste@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.click(signInButton);

    expect(mockedSignIn).toHaveBeenCalledWith({
      email: "teste@email.com",
      password: "123456",
      addAlert: expect.any(Function),
    });
  });

  it("Should show an error when email or password is empty", () => {
    const signInButton = screen.getByRole("button", { name: /Entrar/i });

    mockedSignIn.mockImplementation(({ addAlert }) => {
      addAlert(
        "error",
        "O formato do e-mail é inválido; O e-mail deve conter pelo menos 8 caracteres"
      );
      addAlert("error", "A senha deve conter pelo menos 6 caracteres");
    });

    fireEvent.click(signInButton);

    expect(mockedAddAlert).toHaveBeenCalledTimes(2);
    expect(mockedAddAlert).toHaveBeenCalledWith(
      "error",
      "O formato do e-mail é inválido; O e-mail deve conter pelo menos 8 caracteres"
    );
    expect(mockedAddAlert).toHaveBeenCalledWith(
      "error",
      "A senha deve conter pelo menos 6 caracteres"
    );
  });

  it("Should navigate to sign up page when 'Criar conta' button is clicked", () => {
    const signUpButton = screen.getByRole("button", { name: /Criar Conta/i });

    expect(signUpButton).toBeInTheDocument();

    fireEvent.click(signUpButton);

    expect(mockedNavigate).toHaveBeenCalledWith("/register");
  });
});
