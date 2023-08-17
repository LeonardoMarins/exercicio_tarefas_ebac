import React from "react";
import { ChangeEvent, useState } from "react";
import ItensForm from "../../components/ItensFormulario";
import { EstiloGlobal } from "../../styles/styles";
import { Container, StyledContent, StyledContent2 } from "./styles";
import Tabela from "../../components/TabelaCadastro";
import { adicionarItem } from "../../store/reducers/cadastro";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";

const Formulario = () => {
  const dispatch = useDispatch();
  const { itens } = useSelector((state: RootReducer) => state.formulario);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [submit, setSubmit] = useState(true);
  const [currentId, setCurrentId] = useState(0);

  const handleNomeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleTelefoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTelefone(event.target.value);
  };

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const novoCadastro = {
      nome: nome,
      email: email,
      telefone: telefone,
      id: currentId,
    };
    dispatch(adicionarItem(novoCadastro));
    setCurrentId(currentId + 1);
    setNome("");
    setEmail("");
    setTelefone("");
  };

  const handleSubmit = () => {
    console.log("clicado");
    setSubmit(true);
  };

  return (
    <>
      <Container>
        <StyledContent>
          <EstiloGlobal />
          <ItensForm
            nome={nome}
            email={email}
            telefone={telefone}
            onNomeChange={handleNomeChange}
            onEmailChange={handleEmailChange}
            onTelefoneChange={handleTelefoneChange}
            Submit={handleSubmit}
            onSubmit={handleSubmitForm}
          />
        </StyledContent>
        <StyledContent2>{submit && <Tabela itens={itens} />}</StyledContent2>
      </Container>
    </>
  );
};

export default Formulario;
