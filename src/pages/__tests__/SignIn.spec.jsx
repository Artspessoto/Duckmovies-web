import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { App } from "../../containers/App";
import { RouterWrapper } from "../../test-utils/RouterWrapper";
import { api } from "../../services/api";

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
let mockUser = null;

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

vi.mock("../../services/api", () => {
  return {
    api: {
      post: vi.fn(),
      get: vi.fn(),
    },
  };
});

vi.mock("../../context/AuthContext/useAuth.js", () => {
  return {
    useAuth: () => {
      return {
        signIn: mockedSignIn,
        user: mockUser,
      };
    },
  };
});

describe("SignIn page", () => {
  beforeEach(() => {
    localStorage.clear();
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

  it("Should navigate to home page on successful sign in", async () => {
    api.post.mockResolvedValue({
      data: {
        user: { name: "Arthur Martins", email: "arthur@email.com" },
        token: "test-token",
      },
    });

    mockedSignIn.mockImplementation(async ({ email, password }) => {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@duckmovies:user", JSON.stringify(user));
      localStorage.setItem("@duckmovies:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;

      mockUser = { name: "Arthur Martins", email: "arthur@email.com" };
      return { user, token };
    });

    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    const passwordInput = screen.getByPlaceholderText(/Senha/i);
    const signInButton = screen.getByRole("button", { name: /Entrar/i });

    fireEvent.change(emailInput, { target: { value: "arthur@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith("/sessions", {
        email: "arthur@email.com",
        password: "123456",
      });

      const storedUser = localStorage.getItem("@duckmovies:user");
      const storedToken = localStorage.getItem("@duckmovies:token");

      expect(storedUser).toBe(
        JSON.stringify({ name: "Arthur Martins", email: "arthur@email.com" })
      );
      expect(storedToken).toBe("test-token");
    });
  });
});
