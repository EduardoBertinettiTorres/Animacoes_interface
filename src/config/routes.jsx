import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import BicicletasIndex from "../pages/Dashboard/Bicicletas/BicicletasIndex.jsx";
import Cadastro from "../pages/Cadastro/Cadastro.jsx";
import Login from "../pages/Login/Login.jsx";
import Home from "../pages/Home/Home.jsx";
import AtividadesIndex from "../pages/Dashboard/Atividades/AtividadesIndex.jsx";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute.jsx";
import EditUser from "../pages/Dashboard/Users/EditUser.jsx";
import AtividadesCreate from "../pages/Dashboard/Atividades/AtividadesCreate.jsx";
import EditAtividades from "../pages/Dashboard/Atividades/EditAtividades.jsx";
import EditBicicletas from "../pages/Dashboard/Bicicletas/EditBicicletas.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Rotas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />

      {/* Rotas protegidas */}
      <Route path="/" element={<Home />} />
      <Route path="/atividades" element={<AtividadesIndex />} />
      <Route path="/bicicletas" element={<BicicletasIndex />} />
      <Route
        path="/editar-perfil"
        element={
          <ProtectedRoute>
            <EditUser />
          </ProtectedRoute>
        }
      />
      <Route path="/cadastro-atividades" element={<AtividadesCreate />} />
      <Route path="/editar-atividade/:id" element={<EditAtividades />} />
      <Route path="/editar-bicicleta" element={<EditBicicletas />} />
    </>
  )
);

export default router;
