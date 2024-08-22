import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { SignUp } from "../SignUp";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { ThemeProvider } from "styled-components";
import { AlertProvider } from "../../context/AlertContext/AlertContext";
import { handleSignUp } from "../../services/signUpService";
import theme from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import { useAlerts } from "../../context/AlertContext/useAlerts";

vi.mock("../../services/signUpService.js", () => ({
  handleSignUp: vi.fn(),
}));

vi.mock("../../context/AlertContext/useAlerts.js", () => ({
  useAlerts: vi.fn(),
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
  const mockNavigate = vi.fn();
  const mockAddAlert = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    useAlerts.mockReturnValue({ addAlert: mockAddAlert });
    useNavigate.mockReturnValue(mockNavigate);
  });

  it("Should be render SignUp form correctly", async () => {
    render(
      <ThemeProvider theme={theme}>
        <AlertProvider>
          <BrowserRouter>
            <SignUp />
          </BrowserRouter>
        </AlertProvider>
      </ThemeProvider>
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
