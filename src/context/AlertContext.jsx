import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AlertContext = createContext();

export function AlertProvider({ children }) {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (type, message) => {
    setAlerts((prevAlerts) => [...prevAlerts, { severity: type, text: message }]);
  };

  const cleanAlerts = () => {
    setAlerts([]);
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, cleanAlerts }}>
      {children}
    </AlertContext.Provider>
  );
}

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

