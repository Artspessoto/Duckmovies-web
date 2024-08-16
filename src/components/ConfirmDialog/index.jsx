import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "../Button";
import theme from "../../styles/theme";
import PropTypes from "prop-types";
import { Container } from "./styles";

export default function ConfirmDialog({
  open,
  handleClose,
  handleConfirm,
  title = "Confirmação",
  message,
  confirmText = "Sim",
  cancelText = "Não",
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="confirmation-dialog-title"
      aria-describedby="confirmation-dialog-description"
      sx={{
        "& .MuiPaper-root": {
          fontFamily: `Poppins, sans-serif`,
          backgroundColor: theme.COLORS.ONYX,
          color: theme.COLORS.WHITE,
        },
      }}
    >
      <DialogTitle
        id="confirmation-dialog-title"
        sx={{
          fontSize: "2rem",
          fontWeight: "700",
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="confirmation-dialog-description"
          sx={{
            fontSize: "1.6rem",
            color: theme.COLORS.WHITE,
            paddingBottom: "0"
          }}
        >
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Container>
          <Button title={cancelText} onClick={handleClose} />
          <Button title={confirmText} onClick={handleConfirm} />
        </Container>
      </DialogActions>
    </Dialog>
  );
}

ConfirmDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
};
