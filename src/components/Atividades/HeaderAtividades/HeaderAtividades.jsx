import {
  Cabecalho,
  Logo,
  Navegacao,
  Lista,
  Item,
  LinkNav,
  BotaoSair,
  UserInfo,
} from "./HeaderAtividades.styles";
import logo from "../../../../public/img/novologo.png";
import { useAuthContext } from "../../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function HeaderAtividades() {
  const { setToken, setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("ACCESS_TOKEN");
    navigate("/");
  };

  return (
    <Cabecalho>
      <Logo>
        <img src={logo} alt="Logo da Aplicação" />
      </Logo>
      <Navegacao>
        <Lista>
          <Item>
            <LinkNav to="/">Home</LinkNav>
          </Item>
          <Item>
            <LinkNav to="/atividades">Atividades</LinkNav>
          </Item>
          <Item>
            <LinkNav to="/bicicletas">Bicicletas</LinkNav>
          </Item>
        </Lista>
        <UserInfo>
          <span>Bem-vindo</span>
        </UserInfo>

        <BotaoSair onClick={handleLogout}>Sair</BotaoSair>
      </Navegacao>
    </Cabecalho>
  );
}
