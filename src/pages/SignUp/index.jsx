import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiArrowLeft, FiUser } from "react-icons/fi";

import { BrandTitle } from "../../components/BrandTitle";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Container, Form, Background } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp(){
    if(!name || !email || !password){
      return console.log("preencher os campos");
    }
  }

  return (
    <Container>
      <Form>
        <BrandTitle
          title="Duckmovies"
          fontSize={"4.8rem"}
          $logoHeight={"5rem"}
          $logoWidth={"5rem"}
        />
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          vale={name}
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
          placeholder="Senha"
          type="password"
          icon={FiLock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp()} />
        <Link to="/">
          <ButtonText
            title="Voltar para o login"
            icon={FiArrowLeft}
            iconSize={20}
          />
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
