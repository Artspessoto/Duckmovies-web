import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext/useAuth";
import { Container, Section, Content, MovieHeader, Main } from "./styles";
import { Header } from "../../components/Header";
import { Category } from "../../components/Category";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { RatingMovie } from "../../components/RatingMovie";
import avatarPlaceholder from "../../assets/images/avatarProfile.svg";
import { formatDateTime } from "../../utils/formatDateTime";

export function MoviePreview() {
  const [data, setData] = useState("");
  const params = useParams();
  const { user } = useAuth();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  useEffect(() => {
    const getNoteById = async () => {
      const response = await api.get(`/movie_notes/${params.id}`);
      setData(response.data);
    };

    getNoteById();
  }, [params.id]);

  return (
    <Container>
      <Header>
        <Input placeholder="Pesquisar pelo título" />
      </Header>
      {data && (
        <Main>
          <Content>
            <MovieHeader>
              <Link to="/">
                <ButtonText title="Voltar" icon={FiArrowLeft} />
              </Link>
              <h1>
                {data.title}
                <RatingMovie rate={data.rating} />
              </h1>
              <span>
                <img src={avatarUrl} alt="Foto do usuário" />
                Por {user.name} <FiClock /> {formatDateTime(data.updated_at)}
              </span>
            </MovieHeader>

            {data.movie_tags && (
              <Section>
                {data.movie_tags.map((movieTag) => (
                  <Category key={String(movieTag.id)} title={movieTag.name} />
                ))}
              </Section>
            )}

            <p>{data.description}</p>
          </Content>
        </Main>
      )}
    </Container>
  );
}
