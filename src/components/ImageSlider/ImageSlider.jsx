import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";
import styled from "styled-components";

// Importando estilos CSS do Swiper
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderContainer = styled.div`
  width: 100%;
  padding: 40px 0;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
`;

const SlideCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: #fff;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  transition: opacity 0.3s;
  opacity: 0;
`;

const SlideWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  &:hover {
    ${SlideImage} {
      transform: scale(1.03);
    }

    ${SlideCaption} {
      opacity: 1;
    }
  }
`;

const images = [
  {
    src: "/img/telainicial.jpg",
    title: "App Ciclismo",
    description: "Comece sua jornada de ciclismo com nosso aplicativo",
  },
  {
    src: "/img/iniciarPedalada.jpeg",
    title: "Iniciar Pedalada",
    description: "Registre suas pedaladas e acompanhe seu progresso",
  },
  {
    src: "/img/mapas.jpeg",
    title: "Rotas e Mapas",
    description: "Visualize e planeje suas rotas em tempo real",
  },
  {
    src: "/img/progresso.jpeg",
    title: "Acompanhe seu Progresso",
    description: "Estatísticas personalizadas para melhorar seu desempenho",
  },
  {
    src: "/img/cadAtividades.jpg",
    title: "Registro de Atividades",
    description: "Mantenha um histórico completo de todas suas atividades",
  },
];

const ImageSlider = () => {
  return (
    <SliderContainer>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
        className="mySwiper"
        style={{
          width: "100%",
          padding: "50px 0",
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "70%",
              maxWidth: "800px",
            }}
          >
            <SlideWrapper>
              <SlideImage src={image.src} alt={image.title} />
              <SlideCaption>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </SlideCaption>
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default ImageSlider;
