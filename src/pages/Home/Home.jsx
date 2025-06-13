import { useEffect, useRef, useState } from "react";
import { animateImageMorph } from "../../components/Atividades/MainAtividades/animations";
import Footer from "../../components/Footer/Footer";
import HeaderAtividades from "../../components/Atividades/HeaderAtividades/HeaderAtividades";
import ImageBanner from "../../components/ImageBanner/ImageBanner";
import BikeAnimation from "../../components/BikeAnimation/BikeAnimation";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import {
  StyleGeral,
  BannerContainer,
  Main,
  Section,
  Title,
  TextPrincipal,
  ImagensContainer,
  ImagemItem,
  TextoSecundario,
} from "./HomeStyle";

const BicycleAnimation = () => {
  const [isPedaling, setIsPedaling] = useState(false);

  return (
    <div
      className="flex justify-center mt-4 mb-2"
      onMouseEnter={() => setIsPedaling(true)}
      onMouseLeave={() => setIsPedaling(false)}
    >
      <div className="relative w-64 h-40">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-400"></div>
        <div className="absolute top-1/2 left-8 w-16 h-16 rounded-full border-4 border-gray-600">
          <div
            className={`absolute top-0 left-1/2 w-1 h-8 bg-gray-600 origin-bottom transform -translate-x-1/2 ${
              isPedaling ? "animate-spin" : ""
            }`}
          ></div>
        </div>
        <div className="absolute top-1/2 right-8 w-16 h-16 rounded-full border-4 border-gray-600">
          <div
            className={`absolute top-0 left-1/2 w-1 h-8 bg-gray-600 origin-bottom transform -translate-x-1/2 ${
              isPedaling ? "animate-spin" : ""
            }`}
          ></div>
        </div>
        <div
          className={`absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-orange-500 transform -translate-x-1/2 -translate-y-1/2 ${
            isPedaling ? "animate-pedal" : ""
          }`}
        >
          <div className="absolute top-1/2 left-1/2 w-12 h-1 bg-gray-600 origin-left transform -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const morphImageRef = useRef(null);

  useEffect(() => {
    if (morphImageRef.current) {
      animateImageMorph(morphImageRef);
    }
  }, []);

  return (
    <>
      {" "}
      <StyleGeral>
        <HeaderAtividades />
        <BannerContainer>
          <ImageSlider />
        </BannerContainer>
        <Main>
          <Section>
            <Title>Bem-vindo ao BikeTracker</Title>
            <TextPrincipal>
              O BikeTracker é um aplicativo de gerenciamento e registro de
              atividades de ciclismo. Com ele será possível monitorar e
              registrar uma simples pedalada que você pratica no dia a dia a uma
              atividade profissional de ciclismo, esse app vai ser seu
              companheiro diário que irá auxiliar no seu desempenho físico e
              atlético.
            </TextPrincipal>
            <BicycleAnimation /> <BikeAnimation />
            <ImagensContainer>
              <ImagemItem>
                <h2>MAPAS</h2>
                <img
                  ref={morphImageRef}
                  src="../../public/img/mapas.jpeg"
                  alt="Gráfico"
                  style={{ transition: "all 0.3s ease" }}
                />
              </ImagemItem>
              <ImagemItem>
                <h2>ATIVIDADE</h2>
                <img src="../../public/img/iniciarPedalada.jpeg" alt="Bike" />
              </ImagemItem>
              <ImagemItem>
                <h2>PROGRESSO</h2>
                <img src="../../public/img/progresso.jpeg" alt="Mapa" />
              </ImagemItem>
            </ImagensContainer>{" "}
            <TextoSecundario>
              Explore o mundo do ciclismo bem acompanhado com informações
              detalhadas de seu desempenho físico, comparados a metas que você
              mesmo definiu, além disso a aplicação também conta com uma aba,
              onde será possível criar planos de atividades personalizados para
              alcançar determinados objetivos de acordo com seu perfil.{" "}
            </TextoSecundario>
          </Section>
        </Main>
        <Footer />
      </StyleGeral>
    </>
  );
}
