import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputEditar = styled.input`
  display: inline-block;
  margin: 5px; /* Ajuste a margem conforme necessário */
`;

export const ButtonVoltar = styled(Link)`
  padding: 8px;
  display: inline-block;
  margin-top: 30px;
  cursor: pointer;
  border: 1px solid black;
  text-decoration: none;
  color: #fff;
  background-color: blue;
`;
