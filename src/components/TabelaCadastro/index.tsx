import { ButtonEdit, ButtonExcluir } from "../ItensFormulario/style";
import { TabelaS, TabelaTh, TabelaTd } from "./styles";
import { DadosCadastro } from "../../models/index";
import { useDispatch } from "react-redux";
import { excluirItem } from "../../store/reducers/cadastro";

type Props = {
  itens: DadosCadastro[];
};

const Tabela = ({ itens }: Props) => {
  const dispatch = useDispatch();
  return (
    <>
      <TabelaS>
        <thead>
          <tr>
            <TabelaTh>Nome</TabelaTh>
            <TabelaTh>E-mail</TabelaTh>
            <TabelaTh>Telefone</TabelaTh>
            <TabelaTh>Opções</TabelaTh>
          </tr>
        </thead>
        <tbody>
          {itens.map((item) => (
            <tr key={item.id}>
              <TabelaTd>{item.nome}</TabelaTd>
              <TabelaTd>{item.email}</TabelaTd>
              <TabelaTd>{item.telefone}</TabelaTd>
              <ButtonEdit to={`/edit/${item.id}`}>Editar</ButtonEdit>
              <ButtonExcluir onClick={() => dispatch(excluirItem(item))}>
                Excluir
              </ButtonExcluir>
            </tr>
          ))}
        </tbody>
      </TabelaS>
    </>
  );
};

export default Tabela;
