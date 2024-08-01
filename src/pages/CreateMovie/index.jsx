import { Container, Form, Main, InputWrapper } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { FiArrowLeft } from "react-icons/fi";

export function CreateMovie() {
  return (
    <Container>
      <Header />
      <Main>
      <ButtonText title="Voltar" icon={FiArrowLeft} iconSize={"1.6rem"} />
        <Form>
          <h1>Novo filme</h1>

          <InputWrapper>
            <Input placeholder="Título" type="text" />
            <Input placeholder="Sua nota (de 0 a 5)" type="text" />
          </InputWrapper>
        <Textarea placeholder="Observações"/>
        </Form>
      </Main>
    </Container>
  );
}
