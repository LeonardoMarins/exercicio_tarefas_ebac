import React, { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DadosCadastro } from "../../models";
import { RootReducer } from "../../store";
import { editarItem } from "../../store/reducers/cadastro";
import { ButtonVoltar, Container, InputEditar } from "./style";

const Editar = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { itens } = useSelector((state: RootReducer) => state.formulario);

  const selectedId = id ? parseInt(id, 10) : undefined;

  const selectedItem =
    selectedId !== undefined
      ? itens.find((item) => item.id === selectedId)
      : undefined;

  const defaultItem: DadosCadastro = {
    id: selectedId || 0,
    nome: "",
    email: "",
    telefone: "",
  };

  const [editedItem, setEditedItem] = useState<DadosCadastro>(
    selectedItem || defaultItem,
  );

  const handleNomeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedItem({ ...editedItem, nome: event.target.value });
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedItem({ ...editedItem, email: event.target.value });
  };

  const handleTelefoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedItem({ ...editedItem, telefone: event.target.value });
  };

  const handleSalvarClick = () => {
    if (editedItem) {
      dispatch(editarItem(editedItem));
      alert("cadastro atualizado com sucesso");
    }
  };

  return (
    <>
      <ButtonVoltar to={"/"}>Voltar para a pagina inicial</ButtonVoltar>
      <Container>
        <h1>Editar o cadastro</h1>
        <InputEditar
          value={editedItem.nome}
          onChange={handleNomeChange}
          placeholder="Nome"
        />
        <InputEditar
          value={editedItem.email}
          onChange={handleEmailChange}
          placeholder="email"
        />
        <InputEditar
          value={editedItem.telefone}
          onChange={handleTelefoneChange}
          placeholder="telefone"
        />
        <button onClick={handleSalvarClick}>Salvar Alterações</button>
      </Container>
    </>
  );
};

export default Editar;
