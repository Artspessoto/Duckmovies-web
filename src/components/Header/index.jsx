import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <div>
          <strong>Arthur Martins</strong>
          <span>sair</span>
        </div>

        <img src="https://github.com/Artspessoto.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
