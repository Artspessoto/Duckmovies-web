import { Container } from "./styles";
import PropTypes from "prop-types";

export function ButtonText({ title, icon: Icon, iconSize = 20 }) {
  return (
    <Container type="button">
      {Icon && <Icon className="icon" size={iconSize} />}
      {title}
    </Container>
  );
}

ButtonText.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  iconSize: PropTypes.number,
};
