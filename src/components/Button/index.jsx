import { Container } from "./styles";
import PropTypes from "prop-types";

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {title}
    </Container>
  );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

