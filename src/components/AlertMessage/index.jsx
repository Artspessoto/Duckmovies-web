import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import PropTypes from "prop-types";
import { Container } from "./styles";
import Stack from "@mui/material/Stack";
import theme from "../../styles/theme";
import { getAlertStyles } from "../../utils/getAlertStyles";

export function AlertMessage({ messages = [] }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (messages.length > 0) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [messages]);

  if (!show) {
    return null;
  }

  return (
    <Container className={`alert-container ${!show ? 'fade-out' : 'fade-in'}`}>
      <Stack sx={{ width: "100%" }} spacing={2}>
        {messages.map((msg, index) => (
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

AlertMessage.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      severity: PropTypes.oneOf(["success", "info", "warning", "error"])
        .isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
