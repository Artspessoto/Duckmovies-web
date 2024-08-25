import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { App } from "../../containers/App";
import { RouterWrapper } from "../../test-utils/RouterWrapper";
import { useAuth } from "../../context/AuthContext/useAuth";

export function handleSignInPage() {
  <RouterWrapper initialEntries={["/"]}>
    <App />
  </RouterWrapper>;
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
    actual,
    useNavigate: () => mockedNavigate,
    BrowserRouter: actual.BrowserRouter,
  };
});

vi.mock("../../context/AuthContext/useAuth.js", () => {
  return {
    useAuth: () => ({
      signIn: mockedSignIn,
    }),
  };
});
