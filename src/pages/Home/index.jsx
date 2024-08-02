import { Container, Content, AddMovie, TitleWrapper } from "./styles";
import { Header } from "../../components/Header";
import { MovieNote } from "../../components/MovieNote";
import { FiPlus } from "react-icons/fi";

export function Home() {
  return (
    <Container>
      <Header />
        <TitleWrapper>
          <h1>Meus filmes</h1>
          <AddMovie to="/create-movie">
            <FiPlus />
            Adicionar filme
          </AddMovie>
        </TitleWrapper>
        <Content>
          <MovieNote
            data={{
              title: "Velocipastor",
              tags: [
                { id: "1", name: "Terror" },
                { id: "2", name: "Comédia" },
              ],
            }}
          />
          <MovieNote
            data={{
              title: "Pânico",
              tags: [
                { id: "1", name: "Terror" },
                { id: "2", name: "Comédia" },
              ],
            }}
          />
          <MovieNote
            data={{
              title: "Fuga das galinhas",
              tags: [
                { id: "1", name: "Aventura" },
                { id: "2", name: "Comédia" },
              ],
            }}
          />
        </Content>
    </Container>
  );
}
