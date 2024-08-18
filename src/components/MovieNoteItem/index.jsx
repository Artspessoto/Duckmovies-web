import { Container } from "./styles";
import PropTypes from "prop-types";
import { FiPlus, FiX } from "react-icons/fi";

export function MovieNoteItem({ $isNew, value, onClick, onKeyDown, ...rest }) {
  return (
    <Container $isNew={$isNew} size={value.length}>
      <input
        type="text"
        value={value}
        readOnly={!$isNew}
        onKeyDown={onKeyDown}
        {...rest}
      />

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
  onKeyDown: PropTypes.func,
};
