import { Container, Section, Content, MovieHeader, Main } from "./styles";
import { Header } from "../../components/Header";
import { Category } from "../../components/Category";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from "react-icons/fi";
import { RatingMovie } from "../../components/RatingMovie";

export function MoviePreview() {
  return (
    <Container>
      <Header />
      <Main>
        <Content>
          <MovieHeader>
            <ButtonText title="Voltar" icon={FiArrowLeft} />
            <h1>
              Hereditário
              <RatingMovie rate={3} />
            </h1>
            <span>Por Arthur Martins</span>
          </MovieHeader>

          <Section>
            <Category title="Teste" />
            <Category title="Teste2" />
          </Section>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae
            hic labore, voluptate repellat culpa vitae dolorum libero tempore
            impedit optio architecto nulla qui iusto? Facere fugit illum dolorum
            nisi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae
            hic labore, voluptate repellat culpa vitae dolorum libero tempore
            impedit optio architecto nulla qui iusto? Facere fugit illum dolorum
            nisi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae
            hic labore, voluptate repellat culpa vitae dolorum libero tempore
            impedit optio architecto nulla qui iusto? Facere fugit illum dolorum
            nisi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae
            hic labore, voluptate repellat culpa vitae dolorum libero tempore
            impedit optio architecto nulla qui iusto? Facere fugit illum dolorum
            nisi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae
            hic labore, voluptate repellat culpa vitae dolorum libero tempore
            impedit optio architecto nulla qui iusto? Facere fugit illum dolorum
            nisi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae
            hic labore, voluptate repellat culpa vitae dolorum libero tempore
            impedit optio architecto nulla qui iusto? Facere fugit illum dolorum
            nisi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae
            hic labore, voluptate repellat culpa vitae dolorum libero tempore
            impedit optio architecto nulla qui iusto? Facere fugit illum dolorum
            nisi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae
            hic labore, voluptate repellat culpa vitae dolorum libero tempore
            impedit optio architecto nulla qui iusto? Facere fugit illum dolorum
            nisi!
          </p>
        </Content>
      </Main>
    </Container>
  );
}
