import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Roboto", sans-serif;

  h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 150px;
    font-size: 2.5rem;
  }

  h2 {
    color: #3498db;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const GridItem = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  p {
    margin: 10px 0;
    font-size: 16px;
  }
`;

export const EditButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

// Novos componentes estilizados
export const HistorySection = styled.section`
  margin-bottom: 50px;
  animation: fadeIn 1s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const TypeSection = styled.section`
  margin-bottom: 50px;
  animation: slideIn 1s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(-20px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  p {
    line-height: 1.6;
    margin-bottom: 15px;
    color: #555;
  }

  h3 {
    color: #2c3e50;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  min-width: 300px;

  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
`;
