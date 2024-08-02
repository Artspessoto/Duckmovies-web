import { Link } from "react-router-dom";
import { Container, Form, Background } from "./styles";
import { BrandTitle } from "../../components/BrandTitle";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  return (
    <Container>
      <Form>
        <Link to="/">
          <BrandTitle
            title="Duckmovies"
            fontSize={"4.8rem"}
            $logoHeight={"5rem"}
            $logoWidth={"5rem"}
          />
        </Link>
        <p>Aplicação para acompanhar tudo o que assistir</p>

        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Entrar" />
        <Link to="/register">
          <ButtonText title="Criar Conta" />
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
