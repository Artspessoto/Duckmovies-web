import { useContext } from "react";
import { AlertContext } from "./AlertContext";

export function useAlerts() {
  return useContext(AlertContext);
}
