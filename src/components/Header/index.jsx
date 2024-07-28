import { Container, Profile } from "./styles";
import { BrandTitle } from "../BrandTitle";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <Profile>
        <BrandTitle
          title="Duckmovies"
          fontSize="2.4rem"
          logoHeight="4rem"
          logoWidth="4rem"
        />
        <Input placeholder="Pesquisar pelo título" />
        <div>
          <strong>Arthur Martins</strong>
          <img src="https://github.com/Artspessoto.png" alt="Foto do usuário" />
        </div>
      </Profile>
    </Container>
  );
}
