import styled from "styled-components";
import { Link } from "react-router-dom";
import "animate.css";

export const Cabecalho = styled.header`
  font-family: "Poppins", sans-serif;
  background-color: #000;
  color: #fff;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 8em;
  z-index: 1000;
  position: fixed;
`;

export const Logo = styled.div`
  img {
    height: 7em;
    animation: spin 5s linear infinite;

    &:hover {
      animation-play-state: paused;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Navegacao = styled.nav`
  display: flex;
  align-items: center;
`;

export const Lista = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1em;
  margin-right: 50em;
`;

export const Item = styled.li`
  margin: 0 1em;
  font-size: 1em;
`;

export const LinkNav = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #b2ff59;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #b2ff59;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const BotaoSair = styled.button`
  background-color: #b2ff59;
  color: #1a1a1a;
  font-weight: bold;
  margin-right: 4em;
  border: none;
  border-radius: 25px;
  padding: 0.5em 1.5em;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(103, 204, 31);
  }
`;

export const UserInfo = styled.div`
  padding: 0.5em 1em;
  font-weight: 500;
  color: #fff;
  margin-right: 2em;
`;
