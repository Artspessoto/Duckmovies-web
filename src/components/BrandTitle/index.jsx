import { Container, Logo } from "./styles";
import PropTypes from "prop-types";
import logo from "../../assets/icons/duckmoviesLogo.svg";

export function BrandTitle({ title, fontSize, logoHeight, logoWidth }) {
  return (
    <Container fontSize={fontSize}>
      <Logo
        logoWidth={logoWidth}
        logoHeight={logoHeight}
        src={logo}
        alt="Logo"
      />
      {title}
    </Container>
  );
}

BrandTitle.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  logoHeight: PropTypes.string,
  logoWidth: PropTypes.string
};

BrandTitle.defaultProps = {
  fontSize: "1.8rem",
  logoWidth: "3.2rem",
  logoHeight: "3.2rem",
}

