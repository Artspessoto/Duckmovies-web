import { Link } from "react-router-dom";
import {
  Container,
  Form,
  Main,
  InputWrapper,
  Section,
  MovieItemsWrapper,
  ButtonWrapper,
} from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
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
        <Link to="/">
          <ButtonText
            className="button-text"
            title="Voltar"
            icon={FiArrowLeft}
            iconSize={16}
          />
        </Link>

        <Form>
          <h1>Novo filme</h1>

          <InputWrapper>
            <Input placeholder="Título" type="text" />
            <Input placeholder="Sua nota (de 0 a 5)" type="text" />
          </InputWrapper>

          <Textarea placeholder="Observações" />

          <Section>
            <h2>Marcadores</h2>
            <MovieItemsWrapper>
              <MovieNoteItem value="Tomate" $isNew={false} />
              <MovieNoteItem value="Sofá assassino" $isNew={true} />
              <MovieNoteItem
                value="Tomate assassino ino ino ino"
                $isNew={false}
              />
              <MovieNoteItem value="Tomate" $isNew={false} />
              <MovieNoteItem value="Sofá assassino" $isNew={true} />
            </MovieItemsWrapper>
          </Section>
          <ButtonWrapper>
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </ButtonWrapper>
        </Form>
      </Main>
    </Container>
  );
}
