import { useAuth } from "../context/AuthContext/useAuth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();
  return user ? <AppRoutes /> : <AuthRoutes />;
}
