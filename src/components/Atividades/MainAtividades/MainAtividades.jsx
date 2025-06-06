// MainAtividades.jsx
import React, { useEffect, useRef } from "react";
import {
  GlobalStyle,
  BannerContainer,
  Banner,
  IntroSection,
  Container,
  Titulo,
  TextoPrincipal,
  AtividadesSection,
  SectionTitle,
  GridContainer,
  GridItem,
  RegistrarAtividadeSection,
  RegistrarText,
  BtnCadastrar,
  MorphSVG,
  MotionDot,
  BicicletaContainer,
} from "./MainAtividades.styles";
import { Link } from "react-router-dom";
import axiosClient from "../../../utils/axios_client";
import { animateCSS, animateMotionPath } from "./animations";
import bicicleta from "../../../../public/bicicleta.svg";
import anime from "animejs";
import BicicletaSVG from "../../SVG/BicicletaSVG";

export default function MainAtividades({ atividades, token }) {
  const bikeRef = useRef(null);
  const motionDotRef = useRef(null);
  const morphRef = useRef(null);

  useEffect(() => {
    const animations = [animateCSS(), animateMotionPath(motionDotRef)];

    if (bikeRef.current) {
      bikeRef.current.style.position = "absolute";
      bikeRef.current.style.top = "50%";
      bikeRef.current.style.left = "0";
      bikeRef.current.style.transform = "translateY(-50%)";

      const largura = window.innerWidth;
      const bikeAnim = anime({
        targets: bikeRef.current,
        translateX: [
          { value: -150, duration: 0 },
          { value: largura, duration: 5000 },
        ],
        easing: "linear",
        loop: true,
        direction: "normal",
        autoplay: true,
      });
      animations.push(bikeAnim);
    }

    if (morphRef.current) {
      anime({
        targets: morphRef.current,
        d: [
          { value: "M20,20 L80,20 L80,80 L20,80 Z" },
          { value: "M50,10 Q90,50 50,90 Q10,50 50,10 Z" },
          { value: "M20,50 Q50,10 80,50 Q50,90 20,50 Z" },
          { value: "M20,20 L80,20 L80,80 L20,80 Z" },
        ],
        duration: 4000,
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
      });
    }

    return () => {
      animations.forEach((anim) => anim?.pause && anim.pause());
    };
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja deletar esta atividade?"
    );
    if (confirmDelete) {
      try {
        const response = await axiosClient.delete(`/atividades/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          alert("Atividade deletada com sucesso!");
          window.location.reload();
        }
      } catch (error) {
        console.error("Erro ao deletar atividade:", error);
        alert("Erro ao deletar atividade. Tente novamente.");
      }
    }
  };

  return (
    <>
      <GlobalStyle />
      <BannerContainer>
        <MotionDot ref={motionDotRef} />
        <Banner ref={bikeRef} src={bicicleta} alt="Bicicleta" />
        <MorphSVG viewBox="0 0 100 100">
          <path ref={morphRef} d="M20,20 L80,20 L80,80 L20,80 Z" />
        </MorphSVG>
      </BannerContainer>

      <main>
        <IntroSection>
          <Container>
            <Titulo>Registro de Atividades</Titulo>
            <TextoPrincipal className="grid-item">
              O BikeTracker é um aplicativo de gerenciamento e registro de
              atividades de ciclismo.
            </TextoPrincipal>
          </Container>
        </IntroSection>

        <AtividadesSection>
          <Container>
            <SectionTitle className="grid-item">Minhas Atividades</SectionTitle>
            <GridContainer>
              {Array.isArray(atividades) && atividades.length > 0 ? (
                atividades.map((atividade, index) => (
                  <GridItem
                    key={atividade.id}
                    className="grid-item"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <p>
                      <strong>Título:</strong> {atividade.titulo}
                    </p>
                    <p>
                      <strong>Local:</strong> {atividade.endereco}
                    </p>
                    <p>
                      <strong>Tempo:</strong> {atividade.tempo}
                    </p>
                    <p>
                      <strong>Distância:</strong> {atividade.distancia}
                    </p>
                    <p>
                      <strong>Data:</strong> {atividade.data}
                    </p>
                    <p>
                      <strong>Descrição:</strong> {atividade.descricao}
                    </p>
                    <Link to={`/editar-atividade/${atividade.id}`}>
                      <BtnCadastrar>Editar</BtnCadastrar>
                    </Link>
                    <BtnCadastrar onClick={() => handleDelete(atividade.id)}>
                      Deletar
                    </BtnCadastrar>
                  </GridItem>
                ))
              ) : (
                <p className="grid-item">Nenhuma atividade encontrada</p>
              )}
            </GridContainer>
          </Container>
        </AtividadesSection>

        <BicicletaContainer>
          <BicicletaSVG />
        </BicicletaContainer>

        <RegistrarAtividadeSection>
          <Container>
            <RegistrarText className="grid-item">
              Pronto para adicionar sua próxima aventura?
            </RegistrarText>
            <Link to="/cadastro-atividades">
              <BtnCadastrar className="grid-item">
                Cadastrar Atividade
              </BtnCadastrar>
            </Link>
          </Container>
        </RegistrarAtividadeSection>
      </main>
    </>
  );
}
