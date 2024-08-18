import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Avatar } from "./styles";
import avatarPlaceholder from "../../assets/images/avatarProfile.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext/useAuth";
import { useAlerts } from "../../context/AlertContext/useAlerts";
import { api } from "../../services/api";

export function Profile() {
  const { user, updateProfile } = useAuth();
  const { addAlert } = useAlerts();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const handleUpdate = async () => {
    const updated = {
      name,
      email,
      old_password: oldPassword,
      password: newPassword,
    };

    const userUpdated = Object.assign(user, updated);
    await updateProfile({ user: userUpdated, avatarFile, addAlert });
  };

  const handleChangeAvatar = (event) => {
    const allowedExtensions = ["jpeg", "jpg", "png", "gif"];

    const file = event.target.files[0];

    if(file){
      const fileExtension = `${file.name.split(".").pop().toLowerCase()}`

      if(!allowedExtensions.includes(fileExtension)){
        addAlert("error", "Apenas imagens com extensão jpeg, jpg, png ou gif são permitidas.")
        return;
      }

      setAvatarFile(file);

      const imagePreview = URL.createObjectURL(file);
      setAvatar(imagePreview);
    }
  };

  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </Link>
      </header>

      <Avatar>
        <img src={avatar} alt="Foto do usuário" />
        <label htmlFor="avatar">
          <FiCamera />
          <input type="file" id="avatar" onChange={handleChangeAvatar} />
        </label>
      </Avatar>

      <Form>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
