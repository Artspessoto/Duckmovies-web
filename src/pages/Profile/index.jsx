import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText title="Voltar" icon={FiArrowLeft} />
      </header>
      <Form>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <Button title="Salvar"/>
      </Form>
    </Container>
  );
}
