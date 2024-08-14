import { Link } from "react-router-dom";
import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext/useAuth";
import { useAlerts } from "../../context/AlertContext/useAlerts";
import { useState } from "react";

export function Profile() {
  const { user, updateProfile } = useAuth();
  const { addAlert } = useAlerts();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleUpdate = async () => {
    const user = {
      name,
      email,
      old_password: oldPassword,
      password: newPassword,
    };
    await updateProfile({ user, addAlert});
  };

  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </Link>
      </header>

      <Avatar>
        <img src="https://github.com/Artspessoto.png" alt="Foto do usuário" />
        <label htmlFor="avatar">
          <FiCamera />
          <input type="file" id="avatar" />
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
