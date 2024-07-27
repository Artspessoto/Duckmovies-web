import { Container, Profile } from "./styles";
import { BrandTitle } from "../BrandTitle";

export function Header() {
  return (
    <Container>
      <Profile>
        <BrandTitle title="Duckmovies" fontSize="2.4rem" />
        <div>
          <strong>Arthur Martins</strong>
          <span>sair</span>
        </div>

        <img src="https://github.com/Artspessoto.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
