import { Container, Form, Background } from "./styles";
import { BrandTitle } from "../../components/BrandTitle";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { FiMail, FiLock, FiArrowLeft, FiUser } from "react-icons/fi"

export function SignUp() {
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
        <Input placeholder="Nome" icon={FiUser}/>
        <Input placeholder="E-mail" icon={FiMail}/>
        <Input placeholder="Senha" icon={FiLock}/>
        <Button title="Cadastrar"/>
        <ButtonText title="Voltar para o login" icon={FiArrowLeft} iconSize={20}/>
      </Form>
      <Background />
    </Container>
  );
}
