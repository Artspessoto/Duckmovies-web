import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import PropTypes from "prop-types"
import { Container } from "./styles";

export function RatingMovie({ count = 5, rate = 0 }) {
  return (
    <Container>
      {Array.from({ length: count }, (_, index) => (
        index < rate ? (
          <IoStarSharp key={index} size={30}/>
        ): (
          <IoStarOutline key={index} size={30}/>
        )
      ))}
    </Container>
  );
}

RatingMovie.propTypes = {
    count: PropTypes.number,
    rate: PropTypes.number
}



