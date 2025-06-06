import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  .grid-item {
    opacity: 0;
  }
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  overflow: hidden;
`;

export const BicicletaContainer = styled.div`
  position: absolute;
  bottom: 20%;
  right: 5%;
  width: 400px; // ajuste de tamanho
  height: auto;
  z-index: 1;

  svg {
    width: 100%;
    height: auto;
  }
`;

export const IntroSection = styled.section`
  padding: 2em;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  width: 100%;
`;

export const Titulo = styled.h1`
  font-size: 2.5em;
  margin-bottom: 0.5em;
  color: #1a1a1a;
`;

export const TextoPrincipal = styled.p`
  font-size: 1.1em;
  color: #555;
  text-align: justify;
`;

export const AtividadesSection = styled.section`
  padding: 2em;
`;

export const SectionTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 1.5em;
  color: #1a1a1a;
  text-align: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5em;
`;

export const GridItem = styled.div`
  background-color: #f5f5f5;
  padding: 1.5em;
  border-radius: 0.625em;
  box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.1);
  font-size: 1.2em;
  text-align: justify;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const RegistrarAtividadeSection = styled.section`
  padding: 2em;
`;

export const RegistrarText = styled.p`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 1.5em;
  text-align: justify;
`;

export const BtnCadastrar = styled.button`
  background-color: #b2ff59;
  color: #1a1a1a;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  padding: 0.75em 2em;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.5em;

  &:hover {
    background-color: rgba(13, 120, 11, 0.59);
    color: white;
    transform: scale(1.1) rotate(2deg);
    box-shadow: 0 0 25px rgba(128, 255, 0, 0.85);
  }
`;

export const Banner = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  z-index: 2;
  transform-origin: 50% 100%; // Ponto de pivô na base
`;

export const MotionDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: rgb(89, 255, 128);
  border-radius: 50%;
  z-index: 1;
`;

export const MorphSVG = styled.svg`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  z-index: 1;

  path {
    fill: #b2ff59;
    stroke: #1a1a1a;
    stroke-width: 2;
  }
`;
