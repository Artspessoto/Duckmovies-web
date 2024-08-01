import { Container, Form, Main, InputWrapper, Section } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MovieNoteItem } from "../../components/MovieNoteItem";
import { FiArrowLeft } from "react-icons/fi";

export function CreateMovie() {
  return (
    <Container>
      <Header />
      <Main>
        <ButtonText title="Voltar" icon={FiArrowLeft} iconSize={16} />
        <Form>
          <h1>Novo filme</h1>

          <InputWrapper>
            <Input placeholder="Título" type="text" />
            <Input placeholder="Sua nota (de 0 a 5)" type="text" />
          </InputWrapper>

          <Textarea placeholder="Observações" />

          <Section>
            <h2>Marcadores</h2>
            <MovieNoteItem value="Tomate assassino" $isNew={false}/>
            <MovieNoteItem value="Sofá assassino" $isNew={true}/>
          </Section>
        </Form>
      </Main>
    </Container>
  );
}
