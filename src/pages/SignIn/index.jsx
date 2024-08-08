import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Background } from "./styles";
import { BrandTitle } from "../../components/BrandTitle";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext/useAuth";
import { useAlerts } from "../../context/AlertContext/useAlerts";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { addAlert } = useAlerts();
  const { signIn } = useAuth();

  const handleSignIn = () => signIn({ email, password, addAlert });

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
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn}/>
        <Link to="/register">
          <ButtonText title="Criar Conta" />
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
