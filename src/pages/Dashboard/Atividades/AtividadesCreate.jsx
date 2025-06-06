import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAtividadesProvider } from "../../../contexts/AtividadesProvider";
import {
  Content,
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  Select,
  Option,
  SubmitButton,
  ImageContainer,
  FieldGroup,
} from "./AtividadesCreateStyles";
import Imagem from "../../../../public/img/cadAtividades.jpg";
import HeaderAtividades from "../../../components/Atividades/HeaderAtividades/HeaderAtividades";
import Footer from "../../../components/Footer/Footer";
import axiosClient from "../../../utils/axios_client";

export default function AtividadesCreate() {
  const [formData, setFormData] = useState({
    titulo: "",
    endereco: "",
    distancia: "",
    tempo: "",
    data: "",
    descricao: "",
    codBicicleta: "",
  });
  const [bicicletas, setBicicletas] = useState([]);
  const [disableButton, setDisableButton] = useState(true);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const { addAtividade } = useAtividadesProvider();

  useEffect(() => {
    const fetchBicicletas = async () => {
      try {
        const response = await axiosClient.get("/bicicletas", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (Array.isArray(response.data.data)) {
          setBicicletas(response.data.data);
        } else {
          console.error("Erro: Resposta da API não contém um array de bicicletas.", response.data);
        }
      } catch (error) {
        console.error("Erro ao carregar bicicletas", error);
      }
    };

    fetchBicicletas();
  }, []);

  useEffect(() => {
    const { titulo, endereco, distancia, tempo, data, descricao, codBicicleta } = formData;
    setDisableButton(
      !(titulo && endereco && distancia > 0 && tempo > 0 && data && descricao && codBicicleta)
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage(null);
    try {
      const feedback = await addAtividade(formData);
      setMessage(feedback);
      setTimeout(() => navigate("/atividades"), 3000);
    } catch (error) {
      setMessage(error.message || "Erro ao cadastrar atividade. Tente novamente.");
    }
  };

  return (
    <>
      <HeaderAtividades />
      <Content>
        <ImageContainer>
          <img src={Imagem} alt="Imagem descritiva" />
        </ImageContainer>
        <FormContainer>
          <Title>Cadastrar Atividade</Title>
          <Form onSubmit={onSubmit}>
            <FieldGroup>
              <Input
                type="text"
                id="titulo"
                name="titulo"
                placeholder=" "
                value={formData.titulo}
                onChange={handleChange}
              />
              <Label htmlFor="titulo">Título</Label>
            </FieldGroup>

            <FieldGroup>
              <Input
                type="text"
                id="endereco"
                name="endereco"
                placeholder=" "
                value={formData.endereco}
                onChange={handleChange}
              />
              <Label htmlFor="endereco">Local</Label>
            </FieldGroup>

            <FieldGroup>
              <Input
                type="number"
                id="distancia"
                name="distancia"
                placeholder=" "
                value={formData.distancia}
                onChange={handleChange}
              />
              <Label htmlFor="distancia">Distância (km)</Label>
            </FieldGroup>

            <FieldGroup>
              <Input
                type="number"
                id="tempo"
                name="tempo"
                placeholder=" "
                value={formData.tempo}
                onChange={handleChange}
              />
              <Label htmlFor="tempo">Tempo (min)</Label>
            </FieldGroup>

            <FieldGroup>
              <Input
                type="date"
                id="data"
                name="data"
                placeholder=" "
                value={formData.data}
                onChange={handleChange}
              />
              <Label htmlFor="data">Data</Label>
            </FieldGroup>

            <FieldGroup>
              <Input
                type="text"
                id="descricao"
                name="descricao"
                placeholder=" "
                value={formData.descricao}
                onChange={handleChange}
              />
              <Label htmlFor="descricao">Descrição</Label>
            </FieldGroup>

            <FieldGroup>
              <Select
                id=""
                name="codBicicleta"
                value={formData.codBicicleta}
                onChange={handleChange}
              >
                <Option value="" disabled>
                  
                </Option>
                {bicicletas.length > 0 ? (
                  bicicletas.map((bicicleta) => (
                    <Option key={bicicleta.id} value={bicicleta.id}>
                      {bicicleta.marca} {bicicleta.modelo}
                    </Option>
                  ))
                ) : (
                  <Option disabled>Não há bicicletas disponíveis</Option>
                )}
              </Select>
              <Label>Escolha uma bicicleta</Label>
            </FieldGroup>

            <SubmitButton type="submit" disabled={disableButton}>
              {disableButton ? "Preencha todos os campos" : "Cadastrar"}
            </SubmitButton>
          </Form>
          {message && <p>{message}</p>}
        </FormContainer>
      </Content>
      <Footer />
    </>
  );
}
