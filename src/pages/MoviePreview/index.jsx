import { Container, Section } from "./styles";
import { Header } from "../../components/Header";
import { Category } from "../../components/Category";
import { ButtonText } from "../../components/ButtonText";

export function MoviePreview() {
  return (
    <Container>
      <Header />
      <ButtonText title="Voltar"/>
      <Section>
        <Category title="Teste" />
        <Category title="Teste2" />
      </Section>
    </Container>
  );
}
