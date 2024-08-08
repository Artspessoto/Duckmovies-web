import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import { Container } from "./styles";
import Stack from "@mui/material/Stack";
import theme from "../../styles/theme";
import { getAlertStyles } from "../../utils/getAlertStyles";
import { useAlerts } from "../../context/useAlerts";

export function AlertMessage() {
  const { alerts, cleanAlerts } = useAlerts();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (alerts.length > 0) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        cleanAlerts();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [alerts, cleanAlerts]);

  if (!show) {
    return null;
  }

  return (
    <Container className={`alert-container ${!show ? "fade-out" : "fade-in"}`}>
      <Stack sx={{ width: "100%" }} spacing={2}>
        {alerts.map((msg, index) => (
          <Alert
            key={index}
            severity={msg.severity}
            variant="outlined"
            sx={{
              fontSize: "1.3rem",
              color: theme.COLORS.SOFT_HEATHER,
              fontFamily: `Poppins, sans-serif`,
              fontWeight: 500,
              backgroundColor: getAlertStyles(msg.severity),
            }}
          >
            {msg.text}
          </Alert>
        ))}
      </Stack>
    </Container>
  );
}
