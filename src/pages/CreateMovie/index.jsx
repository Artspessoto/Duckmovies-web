import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { CreateMovieNotePayload } from "../../validation/movieValidation";
import { api } from "../../services/api";
import { useAlerts } from "../../context/AlertContext/useAlerts";

export function CreateMovie() {
  const { addAlert } = useAlerts();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [movieTags, setMovieTags] = useState([]);
  const [newMovieTag, setNewMovieTag] = useState("");

  const handleAddMovieTag = () => {
    setMovieTags((prevState) => [...prevState, newMovieTag]);
    setNewMovieTag("");
  };

  const handleRemoveMovieTag = (deleted) => {
    setMovieTags((prevState) => prevState.filter((tag) => tag !== deleted));
  };

  const handleNewMovie = async () => {
    const ratingMovie = parseFloat(rating);

    if (isNaN(ratingMovie)) {
      addAlert("error", "Avaliação deve ser um número válido entre 1 e 5");
      return;
    }

    const result = CreateMovieNotePayload.safeParse({
      title,
      description,
      rating: ratingMovie,
      tags: movieTags,
    });

    if (!result.success) {
      result.error.errors.forEach((error) => {
        const message = error.message;
        addAlert("error", message);
      });

      return;
    }

    await api.post("/movie_notes", {
      title,
      description,
      rating: ratingMovie,
      tags: movieTags,
    });

    addAlert("success", "Anotação sobre filme criada com sucesso!");
    navigate(-1);
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setMovieTags([]);
    setNewMovieTag("");
    navigate("/");
  };

  return (
    <Container>
      <Header>
        <Input placeholder="Pesquisar pelo título" />
      </Header>
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
            <Input
              placeholder="Título"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </InputWrapper>

          <Textarea
            placeholder="Observações"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={1500}
          />

          <Section>
            <h2>Marcadores</h2>
            <MovieItemsWrapper>
              {movieTags.map((tag, index) => (
                <MovieNoteItem
                  key={String(index)}
                  value={tag}
                  $isNew={false}
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
            <Button title="Cancelar" onClick={handleCancel} />
            <Button title="Salvar alterações" onClick={handleNewMovie} />
          </ButtonWrapper>
        </Form>
      </Main>
    </Container>
  );
}
