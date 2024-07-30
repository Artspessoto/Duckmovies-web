import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import PropTypes from "prop-types"
import { Container } from "./styles";

export function RatingMovie({ rate = 0, size = 30 }) {
  return (
    <Container>
      {Array.from({ length: 5 }, (_, index) => (
        index < rate ? (
          <IoStarSharp key={index} size={size}/>
        ): (
          <IoStarOutline key={index} size={size}/>
        )
      ))}
    </Container>
  );
}

RatingMovie.propTypes = {
    rate: PropTypes.number,
    size: PropTypes.number
}



