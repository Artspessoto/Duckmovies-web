import { Container, Section } from "./styles";
import { Header } from "../../components/Header";
import { Category } from "../../components/Category";

export function MoviePreview() {
  return (
    <Container>
      <Header />
      <Section>
        <Category title="Teste" />
        <Category title="Teste2" />
      </Section>
    </Container>
  );
}
