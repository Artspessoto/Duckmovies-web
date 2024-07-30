import { Container, Content, AddMovie, TitleWrapper } from "./styles";
import { Header } from "../../components/Header";
import { FiPlus } from "react-icons/fi";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <TitleWrapper>
          <h1>Meus filmes</h1>
          <AddMovie>
            <FiPlus />
            Adicionar filme
          </AddMovie>
        </TitleWrapper>
      </Content>
    </Container>
  );
}
