import React from "react";
import {
  MainContainer,
  GridContainer,
  GridItem,
  EditButton,
  HistorySection,
  TypeSection,
  InfoContainer,
  ImageContainer,
} from "./Main.styles.js";

export default function Main() {
  // Dados estáticos de exemplo em vez de usar bicicletas do backend
  const bicicletasExemplo = [
    {
      id: 1,
      marca: "Caloi",
      modelo: "Explorer",
      aro: 29,
      cor: "Verde",
    },
    {
      id: 2,
      marca: "Specialized",
      modelo: "Rockhopper",
      aro: 27.5,
      cor: "Vermelho",
    },
    {
      id: 3,
      marca: "Scott",
      modelo: "Scale",
      aro: 29,
      cor: "Preto",
    },
  ];

  return (
    <MainContainer>
      <h1>O Fascinante Mundo das Bicicletas</h1>

      <HistorySection>
        <h2>História das Bicicletas</h2>
        <InfoContainer>
          <div>
            <p>
              A história da bicicleta começa em 1817, quando o barão alemão Karl
              von Drais inventou a "Draisienne", um veículo de duas rodas sem
              pedais que era impulsionado pelos pés.
            </p>
            <p>
              Em 1861, o francês Pierre Michaux adicionou pedais à roda
              dianteira, criando o "velocípede". Mais tarde, a bicicleta
              "Penny-farthing" com sua roda dianteira gigante tornou-se popular.
            </p>
            <p>
              A "bicicleta de segurança" com rodas de mesmo tamanho e
              transmissão por corrente surgiu na década de 1880, estabelecendo o
              design básico que conhecemos hoje.
            </p>
          </div>
          <ImageContainer>
            <img
              src="../../../public/img/bike.jpg"
              alt="Evolução das bicicletas"
            />
          </ImageContainer>
        </InfoContainer>
      </HistorySection>

      <TypeSection>
        <h2>Tipos de Bicicletas</h2>
        <InfoContainer>
          <div>
            <h3>Mountain Bike</h3>
            <p>
              Projetadas para trilhas e terrenos acidentados, possuem suspensão
              e pneus largos.
            </p>

            <h3>Bicicletas de Estrada</h3>
            <p>
              Leves e aerodinâmicas, ideais para estradas pavimentadas e alta
              velocidade.
            </p>

            <h3>Bicicletas Urbanas</h3>
            <p>Confortáveis e práticas para deslocamentos diários na cidade.</p>
          </div>
          <ImageContainer>
            <img
              src="../../../public/img/bike1.jpg"
              alt="Tipos de bicicletas"
            />
          </ImageContainer>
        </InfoContainer>
      </TypeSection>

      <h2>Exemplos de Bicicletas:</h2>
      <GridContainer>
        {/* Renderizando itens estáticos em vez de usar map */}
        <GridItem>
          <p>Marca: {bicicletasExemplo[0].marca}</p>
          <p>Modelo: {bicicletasExemplo[0].modelo}</p>
          <p>Aro: {bicicletasExemplo[0].aro}</p>
          <p>Cor: {bicicletasExemplo[0].cor}</p>
        </GridItem>
        <GridItem>
          <p>Marca: {bicicletasExemplo[1].marca}</p>
          <p>Modelo: {bicicletasExemplo[1].modelo}</p>
          <p>Aro: {bicicletasExemplo[1].aro}</p>
          <p>Cor: {bicicletasExemplo[1].cor}</p>
        </GridItem>
        <GridItem>
          <p>Marca: {bicicletasExemplo[2].marca}</p>
          <p>Modelo: {bicicletasExemplo[2].modelo}</p>
          <p>Aro: {bicicletasExemplo[2].aro}</p>
          <p>Cor: {bicicletasExemplo[2].cor}</p>
        </GridItem>
      </GridContainer>

      <div>
        <a href="/editar-bicicleta">
          <EditButton>Personalizar Bicicletas</EditButton>
        </a>
      </div>
    </MainContainer>
  );
}
