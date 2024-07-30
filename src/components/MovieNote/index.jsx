import { Container, MovieTitleWrapper } from "./styles";
import { RatingMovie } from "../RatingMovie";
import { Category } from "../Category";
import PropTypes from "prop-types";

export function MovieNote({ data, ...rest }) {
  return (
    <Container {...rest}>
      <MovieTitleWrapper>
        <h1>{data.title}</h1>
        <RatingMovie rate={4} size={15} />
      </MovieTitleWrapper>

      {
      data.tags && 
        <footer>
          {
          data.tags.map((movieTag) => <Category key={movieTag.id} title={movieTag.name} />)
          }
        </footer>
      }
    </Container>
  );
}

MovieNote.propTypes = {
  data: PropTypes.object,
};
