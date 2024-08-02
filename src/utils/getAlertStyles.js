import theme from "../styles/theme";

export function getAlertStyles(severity) {
  switch (severity) {
    case "success":
      return {
        backgroundColor: theme.ALERTS.DEEP_FOREST_GREEN,
      };
    case "info":
      return {
        backgroundColor: theme.ALERTS.DEEP_MIDNIGHT_BLUE,
      };
    case "warning":
      return {
        backgroundColor: theme.ALERTS.DEEP_AMBER,
      };
    case "error":
      return {
        backgroundColor: theme.ALERTS.DEEP_PLUM,
      };

    default:
      break;
  }
}
