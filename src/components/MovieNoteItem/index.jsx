import { Container } from "./styles";
import PropTypes from "prop-types";
import { FiPlus, FiX } from "react-icons/fi";

export function MovieNoteItem({ $isNew, value, onClick, ...rest }) {
  return (
    <Container $isNew={$isNew} size={value.length}>
      <input type="text" value={value} readOnly={!$isNew} {...rest} />

      <button type="button" onClick={onClick}>
        {$isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}

MovieNoteItem.propTypes = {
  $isNew: PropTypes.bool.isRequired,
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
