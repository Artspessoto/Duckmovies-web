import { Container, MovieTitleWrapper } from "./styles";
import { RatingMovie } from "../RatingMovie";
import { Category } from "../Category";
import PropTypes from "prop-types";

let bgCategory = ({theme}) => theme.COLORS.MIDNIGHT;

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
          data.tags.map((movieTag) => <Category key={movieTag.id} title={movieTag.name} bgColor={bgCategory} />)
          }
        </footer>
      }
    </Container>
  );
}

MovieNote.propTypes = {
  data: PropTypes.object,
};
