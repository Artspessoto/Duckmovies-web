import { MemoryRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const RouterWrapper = ({ initialEntries = [], children }) => {
  return (
    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
  );
};

RouterWrapper.propTypes = {
  initialEntries: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};
