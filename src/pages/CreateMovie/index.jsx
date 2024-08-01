import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { FiArrowLeft } from "react-icons/fi";

export function CreateMovie() {
  return (
    <Container>
      <Header />
      <Main>
        <ButtonText title="Voltar" icon={FiArrowLeft} iconSize={"1.6rem"} />
        <h1>Novo filme</h1>
        <Input placeholder="Título" type="text" />
        <Input placeholder="Sua nota (de 0 a 5)" type="text" />
      </Main>
    </Container>
  );
}
