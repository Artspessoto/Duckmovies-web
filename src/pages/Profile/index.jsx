import { Link } from "react-router-dom";
import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";

export function Profile() {
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
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
