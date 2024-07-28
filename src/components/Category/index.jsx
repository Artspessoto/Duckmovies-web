import { Container } from "./styles";
import PropTypes from "prop-types";

export function Category({ title }) {
  return <Container>{title}</Container>;
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
};
