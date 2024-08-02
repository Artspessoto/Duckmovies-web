import Alert from "@mui/material/Alert";
import PropTypes from "prop-types";
import { Container } from "./styles";
import Stack from "@mui/material/Stack";
import theme from "../../styles/theme";

export function AlertMessage({ messages = [] }) {
  const color = theme.COLORS.SOFT_HEATHER;

  return (
    <Container>
      <Stack sx={{ width: "100%" }} spacing={2}>
        {messages.map((msg, index) => (
          <Alert
            key={index}
            severity={msg.severity}
            variant="outlined"
            sx={{
              fontSize: "1.3rem",
              color: { color }, 
              fontFamily: `Poppins, sans-serif`,
              fontWeight: 500
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
