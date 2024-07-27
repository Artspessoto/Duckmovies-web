import { Container } from "./styles";
import PropTypes from "prop-types";

export function BrandTitle({ title, fontSize }) {
  return <Container fontSize={fontSize}>{title}</Container>;
}

BrandTitle.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
};
