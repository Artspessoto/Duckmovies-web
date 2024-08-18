import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext/useAuth";
import { Container, Section, Content, MovieHeader, Main } from "./styles";
import { Header } from "../../components/Header";
import { Category } from "../../components/Category";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import ConfirmDialog from "../../components/ConfirmDialog";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { RatingMovie } from "../../components/RatingMovie";
import avatarPlaceholder from "../../assets/images/avatarProfile.svg";
import { formatDateTime } from "../../utils/formatDateTime";
import { useAlerts } from "../../context/AlertContext/useAlerts";

export function MoviePreview() {
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);

  const params = useParams();
  const { user } = useAuth();
  const { addAlert } = useAlerts();
  const navigate = useNavigate();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(true);
  };

  const handleRemoveMovie = async () => {
    try {
      await api.delete(`/movie_notes/${params.id}`);
      addAlert("success", "Nota de filme deletada com sucesso.");
      navigate(-1);
    } catch (err) {
      const apiResponse = err.response.data.message;
      addAlert("error", apiResponse);
      return;
    }
  };

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
            <Button title={"Excluir filme"} onClick={handleConfirm} />
            <ConfirmDialog
              open={open}
              handleClose={handleClose}
              handleConfirm={handleRemoveMovie}
              title="Confirmar Exclusão"
              message="Você tem certeza que deseja excluir esta nota de filme? Esta ação não pode ser desfeita."
              confirmText="Excluir"
              cancelText="Cancelar"
            />
          </Content>
        </Main>
      )}
    </Container>
  );
}
