import styled from "styled-components";
import { Link } from "react-router-dom";

export const Input = styled.input`
  display: block;
  padding: 8px;
  margin-bottom: 5px;
`;
export const Button = styled.button`
  padding: 8px;
  width: 100%;
  margin-top: 12px;
  cursor: pointer;
  background-color: green;
  color: #fff;
`;

export const ButtonEdit = styled(Link)`
  padding: 8px;
  width: 100%;
  display: inline-block;
  margin-top: 20px;
  cursor: pointer;
  border: 1px solid black;
  text-decoration: none;
  color: #fff;
  background-color: blue;
`;

export const ButtonExcluir = styled.button`
  padding: 8px;
  width: 100%;
  margin-top: 12px;
  cursor: pointer;
  background-color: red;
  color: #fff;
`;
