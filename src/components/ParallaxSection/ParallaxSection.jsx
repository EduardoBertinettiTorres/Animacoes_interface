import { useEffect, useRef } from "react";
import styled from "styled-components";
import Rellax from "rellax";

const ParallaxContainer = styled.section`
  position: relative;
  height: 600px;
  width: 100%;
  overflow: hidden;
  margin: 40px 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-radius: 0;

  @media (min-width: 768px) {
    height: 70vh;
    min-height: 600px;
    border-radius: 8px;
    margin: 60px 20px;
  }
`;

const ParallaxBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center bottom;
  transition: transform 0.5s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 40px;
  color: #fff;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1px);

  @media (min-width: 768px) {
    padding-left: 15%;
    text-align: left;
    align-items: flex-start;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const Title = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
`;

const OverlayElement = styled.div`
  position: absolute;
  z-index: 1;
  &.bike {
    right: 10%;
    bottom: 10%;
    width: 150px;
    height: 150px;
    background-image: url("/img/bicicleta.svg");
    background-size: contain;
    background-repeat: no-repeat;
    filter: brightness(0) invert(1);
    opacity: 0.8;
    transform-origin: center;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  &.circle {
    left: 15%;
    top: 20%;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      rgba(0, 180, 170, 0.3),
      rgba(255, 255, 255, 0.15)
    );
    box-shadow: 0 0 15px rgba(0, 180, 170, 0.5);
  }

  &.gear {
    left: 75%;
    top: 60%;
    width: 80px;
    height: 80px;
    background-image: url("/img/bicicleta (1).svg");
    background-size: contain;
    background-repeat: no-repeat;
    filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(170deg);
    opacity: 0.7;
    animation: rotate 15s linear infinite;
  }

  &.wheel {
    left: 8%;
    bottom: 15%;
    width: 120px;
    height: 120px;
    border: 4px solid rgba(0, 180, 170, 0.6);
    border-radius: 50%;
    opacity: 0.8;
    animation: rotate 10s linear infinite;
    box-shadow: 0 0 20px rgba(0, 180, 170, 0.4);
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ParallaxSection = () => {
  const parallaxBgRef = useRef(null);
  const bikeElementRef = useRef(null);
  const circleElementRef = useRef(null);
  const gearElementRef = useRef(null);
  const wheelElementRef = useRef(null);
  const titleRef = useRef(null);
  useEffect(() => {
    // Inicializar elementos com efeito parallax em diferentes velocidades
    new Rellax(parallaxBgRef.current, {
      speed: -4,
      center: true,
      percentage: 0.5,
    });

    new Rellax(bikeElementRef.current, {
      speed: 3,
      center: false,
      percentage: 0.6,
    });

    new Rellax(circleElementRef.current, {
      speed: -2,
      center: false,
      percentage: 0.7,
    });

    new Rellax(gearElementRef.current, {
      speed: 4,
      center: false,
      percentage: 0.5,
    });

    new Rellax(wheelElementRef.current, {
      speed: -3,
      center: false,
      percentage: 0.6,
    });

    new Rellax(titleRef.current, {
      speed: 1.5,
      center: true,
      percentage: 0.5,
    });

    // Cleanup function
    return () => {
      // Rellax não tem método de destruição diretamente acessível em hooks
      // Em apps reais, poderia usar referência à instância para cleanup
    };
  }, []);
  return (
    <ParallaxContainer>
      <ParallaxBackground
        image="/img/fundo_cadastro.jpg"
        ref={parallaxBgRef}
      />

      <Content>
        <Title ref={titleRef}>Sua Bicicleta, Sua Aventura</Title>
        <Subtitle>
          Cadastre suas bicicletas, acompanhe a manutenção e gerencie seu
          equipamento. A qualidade do seu equipamento define a qualidade da sua
          jornada.
        </Subtitle>
      </Content>
      <OverlayElement className="bike" ref={bikeElementRef} />
      <OverlayElement className="circle" ref={circleElementRef} />
      <OverlayElement className="gear" ref={gearElementRef} />
      <OverlayElement className="wheel" ref={wheelElementRef} />
    </ParallaxContainer>
  );
};

export default ParallaxSection;
