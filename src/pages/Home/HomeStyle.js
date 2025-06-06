import styled from "styled-components";
import "animate.css";

export const StyleGeral = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #fff;
  font-size: 16px;
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40em;
  margin-bottom: 1.25em;
  padding-bottom: 1em;
`;

export const Banner = styled.section`
  background-image: ${({ imageLoaded }) =>
    imageLoaded
      ? `url('../../../public/img/telainicial.jpg')center/cover no-repeat`
      : "none"};
  width: 100%;
  height: 45em;
  object-fit: cover;
  z-index: 1;
  transition: background 0.5s ease-in-out;

  &.animate__animated {
    animation-duration: 1.5s;
  }
`;

export const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 1.25em;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 0.625em 1.25em;
  font-size: 4.5em;
  border-radius: 0.3125em;
  max-width: 45%;
  text-align: center;
`;

export const Main = styled.main`
  padding: 1.25em;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const Section = styled.section`
  max-width: 70em;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.25em;
  font-size: 2em;
  margin-top: 3em;
`;

export const TextPrincipal = styled.p`
  text-align: justify;
  font-size: 1.125em;
  line-height: 1.5;
  margin-bottom: -8em;
`;

export const ImagensContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

export const ImagemItem = styled.div`
  position: relative;
  overflow: hidden; /* Para conter o efeito morph */
  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: all 0.5s ease;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const TextoSecundario = styled.p`
  text-align: justify;
  margin-bottom: 2.5em;
  font-size: 1.125em;
  line-height: 1.5;
`;

export const SkeletonLoader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #e0e0e0 25%, #cccccc 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  z-index: 1;

  &.animate__animated {
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;
