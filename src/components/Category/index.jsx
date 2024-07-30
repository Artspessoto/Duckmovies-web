import { Container } from "./styles";
import PropTypes from "prop-types";

export function Category({ title, bgColor }) {
  return <Container bgColor={bgColor}>{title}</Container>;
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string
};
