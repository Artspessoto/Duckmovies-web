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
import { useState } from "react";

export function CreateMovie() {
  const [movieTags, setMovieTags] = useState([]);
  const [newMovieTag, setNewMovieTag] = useState("");

  const handleAddMovieTag = () => {
    setMovieTags((prevState) => [...prevState, newMovieTag]);
    setNewMovieTag("");
  };

  const handleRemoveMovieTag = (deleted) => {
    setMovieTags((prevState) => prevState.filter((tag) => tag !== deleted));
  };

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
              {movieTags.map((tag, index) => (
                <MovieNoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveMovieTag(tag)}
                />
              ))}
              <MovieNoteItem
                $isNew
                placeholder="Nova categoria"
                onChange={(e) => setNewMovieTag(e.target.value)}
                value={newMovieTag}
                onClick={handleAddMovieTag}
              />
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
