import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Content, AddMovie, TitleWrapper } from "./styles";
import { Header } from "../../components/Header";
import { MovieNote } from "../../components/MovieNote";
import { Input } from "../../components/Input";
import { FiPlus } from "react-icons/fi";

export function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [movieNotes, setMovieNotes] = useState([]);

  const handleMoviePreview = (id) => {
    navigate(`/preview/${id}`)
  }

  useEffect(() => {
    const getMovieNotes = async () => {
      const response = await api.get(`/movie_notes?title=${search}`);
      setMovieNotes(response.data);
    };

    getMovieNotes();
  }, [search]);

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>
      <TitleWrapper>
        <h1>Meus filmes</h1>
        <AddMovie to="/create-movie">
          <FiPlus />
          Adicionar filme
        </AddMovie>
      </TitleWrapper>
      <Content>
        {movieNotes.map((movie) => (
          <MovieNote
            key={String(movie.id)}
            data={movie}
            onClick={() => handleMoviePreview(movie.id)}
          />
        ))}
      </Content>
    </Container>
  );
}
