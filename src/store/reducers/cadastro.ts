// store/reducers/formulario.js

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DadosCadastro } from "../../models";

type StateInicial = {
  itens: DadosCadastro[];
};

const initialState: StateInicial = {
  itens: [],
};

const formularioSlice = createSlice({
  name: "formulario",
  initialState,
  reducers: {
    adicionarItem: (state, action: PayloadAction<DadosCadastro>) => {
      state.itens.push(action.payload);
    },
    editarItem: (state, action: PayloadAction<DadosCadastro>) => {
      const indexDoItem = state.itens.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (indexDoItem !== -1) {
        state.itens[indexDoItem] = action.payload;
      }
    },
    excluirItem: (state, action: PayloadAction<DadosCadastro>) => {
      const novoArrayItens = state.itens.filter(
        (item) => item.id !== action.payload.id,
      );
      state.itens = novoArrayItens;
    },
  },
});

export const { adicionarItem, editarItem, excluirItem } =
  formularioSlice.actions;

export default formularioSlice.reducer;
