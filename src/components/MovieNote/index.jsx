import { Container, MovieTitleWrapper } from "./styles";
import { RatingMovie } from "../RatingMovie";
import { Category } from "../Category";
import PropTypes from "prop-types";
import theme from "../../styles/theme";

export function MovieNote({ data, ...rest }) {
  let bgCategory = theme.COLORS.MIDNIGHT;

  return (
    <Container {...rest}>
      <MovieTitleWrapper>
        <h1>{data.title}</h1>
        <RatingMovie rate={data.rating} size={15} />
      </MovieTitleWrapper>

      {data.tags && (
        <footer>
          {data.tags.map((movieTag) => (
            <Category
              key={movieTag.id}
              title={movieTag.name}
              $bgColor={bgCategory}
            />
          ))}
        </footer>
      )}
    </Container>
  );
}

MovieNote.propTypes = {
  data: PropTypes.object,
};
