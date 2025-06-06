import { useState, useEffect } from "react";
import styled from "styled-components";
import "animate.css";

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 45em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  overflow: hidden;
`;

const Loader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #d9d9d9 25%, #ffffff 50%, #d9d9d9 75%);
  background-size: 300% 100%;
  animation: shimmer 2.5s infinite;

  @keyframes shimmer {
    from {
      background-position: 300% 0;
    }
    to {
      background-position: -300% 0;
    }
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

export default function ImageBanner() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/img/telainicial.jpg";
    img.onload = () => setTimeout(() => setImageLoaded(true), 2000); // Adiciona um atraso de 2 segundos
  }, []);

  return (
    <BannerContainer>
      {!imageLoaded && <Loader />}
      <BannerImage
        src="/img/telainicial.jpg"
        alt="Banner"
        loaded={imageLoaded}
      />
    </BannerContainer>
  );
}
